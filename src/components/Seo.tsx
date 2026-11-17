import { useEffect } from "react";

const siteUrl = "https://cfpm-de-madagascar.com";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

const updateMeta = (attribute: "name" | "property", key: string, content: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const Seo = ({ title, description, path, noIndex = false }: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${path}`;
    document.title = title;

    updateMeta("name", "description", description);
    updateMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", canonicalUrl);
    updateMeta("property", "og:type", "website");
    updateMeta("property", "og:site_name", "CFPM de Madagascar");
    updateMeta("property", "og:locale", "fr_MG");
    updateMeta("name", "twitter:card", "summary");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, path, noIndex]);

  return null;
};

export default Seo;
