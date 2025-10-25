import { Globe } from 'lucide-react';

export default function SearchResults({ query, results }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">About {results.length} results for "{query}"</div>
      </div>
      <div className="space-y-4">
        {results.length === 0 ? (
          <div className="rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 p-6 text-center text-zinc-600 dark:text-zinc-400">
            No results found. Try different keywords or pick a suggestion above.
          </div>
        ) : (
          results.map((r) => (
            <article key={r.url} className="rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 p-4 hover:bg-zinc-50/60 dark:hover:bg-zinc-900/60 transition">
              <a href={r.url} target="_blank" rel="noreferrer" className="group block">
                <div className="text-xs text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <Globe size={14} />
                  <span className="truncate">{r.url}</span>
                </div>
                <h3 className="mt-1 text-lg font-semibold group-hover:underline">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {r.description}
                </p>
                {r.tags?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {r.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">{t}</span>
                    ))}
                  </div>
                ) : null}
              </a>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
