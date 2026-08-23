import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION, THEME_COLOR } from "@/lib/site";

// Served at /manifest.webmanifest — enables "Add to Home Screen" on Android
// and gives the installed app its name, icons, and colors.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "DSAIC",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6EE",
    theme_color: THEME_COLOR,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
