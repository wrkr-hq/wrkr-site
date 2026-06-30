import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WRKR Holding Co.",
    short_name: "WRKR",
    description:
      "WRKR Holding Co. builds and backs the digital public infrastructure that holds society together. Rooted in Africa. Working globally.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6f1",
    theme_color: "#23258c",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
