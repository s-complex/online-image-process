import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Online image process",
  description:
    "Compress your image and transform its format, then upload it to Cloudflare R2.",
};

function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-md text-center">
      <hgroup>
        <h1 className="text-4xl m-0">Online image process</h1>
        <p>
          Compress your image and transform its format, then upload it to
          Cloudflare R2.
        </p>
      </hgroup>
      <br />
      <div>{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="h-6">
      <p className="text-center">© Restent Ou</p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 bg-sky-100 dark:bg-sky-500/15 max-w-4xl mx-auto">
        <div className="min-h-svh p-4 flex flex-col items-center justify-center">
          <div className="flex-1 flex items-center justify-center">
            <Card>{children}</Card>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
