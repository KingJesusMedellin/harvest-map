import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const templatePath = path.join(process.cwd(), "data", "report-template.html");
  const dataPath = path.join(process.cwd(), "data", "harvest-report.json");

  const [template, data] = await Promise.all([
    fs.readFile(templatePath, "utf8"),
    fs.readFile(dataPath, "utf8"),
  ]);

  const html = template.replace("__HARVEST_REPORT_DATA__", data);

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
