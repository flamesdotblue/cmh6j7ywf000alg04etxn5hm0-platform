import { Globe } from 'lucide-react';

function getFavicon(url) {
  try {
    const u = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=64`;
  } catch {
    return `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
  }
}

export default function SearchResults({ query, results }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">About {results.length} results for "{query}"</div>
      </div>
      {results.length === 0 ? (
        <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 p-8 text-center bg-white/70 dark:bg-zinc-900/50 backdrop-blur">
          <div className="text-zinc-700 dark:text-zinc-300 mb-2 font-medium">No results found</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">Try different keywords, use quotes for exact matches, or remove exclusions.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((r) => (
            <article key={r.url} className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/50 backdrop-blur p-4 hover:shadow-sm hover:bg-white/90 dark:hover:bg-zinc-900/70 transition">
              <a href={r.url} target="_blank" rel="noreferrer" className="group block">
                <div className="flex items-center gap-3 text-xs text-emerald-700 dark:text-emerald-400">
                  <img src={getFavicon(r.url)} alt="" className="h-4 w-4 rounded" />
                  <span className="truncate">{r.url}</span>
                </div>
                <h3 className="mt-1 text-lg font-semibold tracking-tight group-hover:underline">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {r.description}
                </p>
                {r.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {r.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">{t}</span>
                    ))}
                  </div>
                ) : null}
              </a>
            </article>
          ))}
        </div>
      )}
      {results.length > 0 && (
        <div className="mt-6 flex justify-center">
          <a
            href={results[0]?.url || '#'}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <Globe size={16} /> Visit a top result
          </a>
        </div>
      )}
    </div>
  );
}
