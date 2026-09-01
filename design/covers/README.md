# Blog cover sources

The `.html` files here are the **source** for the post covers in
`public/work/`. They live in the repo on purpose: the first version of these
was built in a session scratchpad, and scratchpads under
`/private/tmp/claude-501/.../` are outside every backup root. A previous
deliverable (`hogan-longstay-discounts`) lost its build scripts exactly that
way and can no longer be regenerated. Anything a shipped asset depends on
belongs in the project folder.

Nothing here is served or built. `design/` is outside `app/` and `public/`,
so Next.js ignores it.

## House style for post covers

- **1200 x 630.** This is the site standard. `services-four-steps.jpg` was
  1600x1000 and was the odd one out.
- Ground `#0a0a0a`, accent `#f97316`, Inter from Google Fonts.
- Cards: `#141414`, `1px solid rgba(255,255,255,.07)`, radius 18.
- Emphasis card (the last one): `#1e1008`, `1px solid #f97316`, name in
  orange. See `public/work/second-brain-four-pieces-en.jpg`, which is the
  pattern these follow.
- Eyebrow: 72x3px orange rule, then an ALL-CAPS orange label at 17px /
  `.22em` letter-spacing / weight 700.
- Card row: orange two-digit number in a 96px column, then name and sub.

## Product names do not translate

The Spanish cover says **Findability Report**, not "Informe de visibilidad",
and **Doble Presence**, not "Doble Presencia" — the same rule the rest of the
site follows, the way LUCI is LUCI in both languages. A cover is a surface
like any other: if the ES page, the nav, the JSON-LD and `llms.txt` all say
Findability Report, the artwork cannot say something else.

## Rendering

Render at 2x and downsample. That is what makes the type crisp; a 1x
screenshot looks soft.

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1200,630 \
  --virtual-time-budget=4000 \
  --screenshot=raw.png "file://$PWD/ai-step-four-en.html"

python3 -c "
from PIL import Image
Image.open('raw.png').convert('RGB') \
  .resize((1200,630), Image.LANCZOS) \
  .save('../../public/work/ai-step-four-en.jpg', quality=92, subsampling=0)"
```

Chrome must be able to reach fonts.googleapis.com for Inter. If it cannot,
the render silently falls back to a system font and the type will not match
the other covers — check the output before shipping it.

## Alt text

John writes the alt text. Do not ship a placeholder.
