export default function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} Kenz Media. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-zinc-900 dark:hover:text-zinc-200" href="#">Privacy</a>
          <a className="hover:text-zinc-900 dark:hover:text-zinc-200" href="#">Terms</a>
          <a className="hover:text-zinc-900 dark:hover:text-zinc-200" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
