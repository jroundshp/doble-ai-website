import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Doble AI",
    short_name: "Doble AI",
    description: "Bilingual AI consulting for Colorado businesses",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.png",
        sizes: "400x400",
        type: "image/png",
      },
    ],
  };
}
