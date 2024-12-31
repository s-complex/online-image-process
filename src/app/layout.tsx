import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Online image process",
  description: "Compress your image and transform its format, then upload it to Cloudflare R2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="m-0"
      >
        {children}
      </body>
    </html>
  );
}
