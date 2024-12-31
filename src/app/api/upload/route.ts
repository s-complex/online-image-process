import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import sharp from "sharp";

const UPLOAD_DIR = path.resolve(process.cwd(), "public/uploads");

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({
      success: false,
      message: "No file uploaded or invalid file type.",
    });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }

  try {
    const realFilename = path.basename(file.name, path.extname(file.name));
    const outputBuffer = await sharp(buffer)
      .webp({ quality: 75 })
      .toFormat("webp")
      .toBuffer();

    const outputFilePath = path.resolve(UPLOAD_DIR, `${realFilename}.webp`);
    fs.writeFileSync(outputFilePath, outputBuffer);

    return NextResponse.json({
      success: true,
      name: `${realFilename}.webp`,
      url: `/uploads/${realFilename}.webp`,
    });
  } catch (error) {
    console.error("Error processing the image:", error);
    return NextResponse.json({
      success: false,
      message: "Error processing the image.",
    });
  }
};
