function Card() {
  return (
    <div className="bg-white dark:bg-zinc-700 p-8 rounded-lg shadow-md text-center">
      <hgroup>
        <h1 className="text-4xl m-0">Online image process</h1>
        <p>
          Compress your image and transform its format, then upload it to
          Cloudflare R2.
        </p>
        <br />
      </hgroup>
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

export default function Home() {
  return (
    <div className="min-h-svh p-4 flex flex-col items-center justify-center">
      <div className="flex-1">
        <Card />
      </div>
      <Footer />
    </div>
  );
}
