
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="text-center sm:text-left">
          <h3 className="text-base font-semibold mb-2">Quick Start</h3>
          <p className="text-sm mb-4">
            HachlyAI is now integrated into your application. The script is
            loaded and initialized automatically.
          </p>
          <p className="text-sm">
            Check the console for any initialization messages or errors.
          </p>
        </div>
      </main>
    </div>
  );
}
