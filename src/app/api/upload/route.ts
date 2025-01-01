import { NextRequest, NextResponse } from "next/server";
import path from "path";
import sharp from "sharp";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const S3 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY as string,
    secretAccessKey: process.env.R2_SECRET_KEY as string,
  },
});

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

  try {
    const realFilename = path.basename(file.name, path.extname(file.name));
    const uploadKey = `images/${realFilename}.webp`;
    const outputBuffer = await sharp(buffer)
      .webp({ quality: 75 })
      .toFormat("webp")
      .toBuffer();

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: uploadKey,
      Body: outputBuffer,
      ContentType: "image/webp"
    });
    await S3.send(command);

    return NextResponse.json({
      success: true,
      name: `${realFilename}.webp`,
      url: `${process.env.R2_BUCKET_URL}/${uploadKey}`,
    });
  } catch (error) {
    console.error("Error processing the image:", error);
    return NextResponse.json({
      success: false,
      message: "Error processing the image.",
    });
  }
};
