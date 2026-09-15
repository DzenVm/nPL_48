import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const strony = ["", "/graj", "/mechanika", "/faq", "/kontakt", "/regulamin", "/polityka-prywatnosci"];

  return strony.map((sciezka) => ({
    url: `${siteConfig.url}${sciezka}`,
    lastModified: new Date(),
    changeFrequency: sciezka === "" ? "weekly" : "monthly",
    priority: sciezka === "" ? 1 : sciezka === "/graj" ? 0.9 : 0.6,
  }));
}
