export function Footer() {
  return (
    <footer className="border-t bg-[var(--card)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--muted-foreground)] text-sm text-center md:text-left">
            Built for ICICI Innovation Hackathon 2025
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#FF6C00] flex items-center justify-center">
              <span className="text-white font-bold">I</span>
            </div>
            <span className="text-sm text-[var(--muted-foreground)]">
              Powered by ICICI Bank
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
