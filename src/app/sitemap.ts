import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/beats", "/work", "/deals", "/contact"].map(path=>({url:`https://miiir-beats.vercel.app${path}`,changeFrequency:"monthly",priority:path?0.8:1})); }
