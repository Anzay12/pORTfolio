import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import {
  certificateMeta,
  excludedCertificates,
  featuredCertificates,
} from "@/lib/data";

const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

export async function GET() {
  const certDir = path.join(process.cwd(), "public", "certificates");

  if (!fs.existsSync(certDir)) {
    return NextResponse.json({ certificates: [] });
  }

  const files = fs
    .readdirSync(certDir)
    .filter(
      (f) =>
        IMAGE_EXT.includes(path.extname(f).toLowerCase()) &&
        !excludedCertificates.includes(f)
    );

  const sortOrder = (filename: string) => {
    const featured = featuredCertificates.indexOf(filename);
    return featured >= 0 ? featured : 100 + filename.localeCompare("");
  };

  const certificates = files
    .sort((a, b) => sortOrder(a) - sortOrder(b))
    .map((filename) => {
      const meta = certificateMeta[filename];
      const baseName = filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
      return {
        filename,
        src: `/certificates/${encodeURIComponent(filename)}`,
        name: meta?.name ?? baseName,
        issuer: meta?.issuer ?? "Professional Certification",
      };
    });

  return NextResponse.json({ certificates });
}
