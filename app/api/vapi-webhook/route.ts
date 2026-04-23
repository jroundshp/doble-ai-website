import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const JOHN_EMAIL = 'jroundshp@gmail.com';
const FROM_ADDRESS = 'Lucy <lucy@dobleai.com>';

export async function POST(request: Request) {
  const body = await request.json();
  const message = body?.message;

  // Only process end-of-call reports
  if (!message?.summary) {
    return Response.json({ received: true });
  }

  const summary: string = message.summary;
  const transcript: string = message.transcript ?? '';
  const callerPhone: string = message.call?.customer?.number ?? 'not captured';

  // Extract email from transcript
  const emailMatch = transcript.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/i);
  const callerEmail = emailMatch?.[0] ?? null;

  // Lead notification to John
  await resend.emails.send({
    from: FROM_ADDRESS,
    to: JOHN_EMAIL,
    subject: 'New Doble AI Lead — Lucy call',
    text: [
      'New lead from Lucy call:',
      '',
      summary,
      '',
      `Caller phone: ${callerPhone}`,
      callerEmail ? `Caller email: ${callerEmail}` : 'Caller email: not captured',
      '',
      '---',
      'Full transcript:',
      transcript,
    ].join('\n'),
  });

  // Confirmation email to caller (only if email was captured)
  if (callerEmail) {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: callerEmail,
      subject: "You're connected with Doble AI",
      text: [
        'Hi there,',
        '',
        'Thanks for calling Doble AI today. John will be in touch within one business day.',
        '',
        'In the meantime, you can get a head start on your free business audit here:',
        'https://dobleai.com/#contact',
        '',
        'Talk soon,',
        'John Rounds',
        'Doble AI',
        '(970) 376-2725',
      ].join('\n'),
    });
  }

  return Response.json({ received: true });
}
