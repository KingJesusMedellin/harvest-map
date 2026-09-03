import { promises as fs } from "fs";
import path from "path";

// The page shell is static; it fetches /api/users?source=<param> itself on
// load, so the response here never varies by request and can be prerendered.
export const dynamic = "force-static";

export async function GET() {
  const templatePath = path.join(process.cwd(), "data", "report-template.html");
  const html = await fs.readFile(templatePath, "utf8");

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
