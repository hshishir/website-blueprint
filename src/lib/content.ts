import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentFile<T> = {
  data: T;
  body: string;
};

export function loadContent<T>(filename: string): ContentFile<T> {
  const fullPath = path.join(process.cwd(), "content", filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);
  return { data: parsed.data as T, body: parsed.content.trim() };
}
