import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import data from './data/sampleData';

export default function App() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const tokens = q.split(/\s+/).filter(Boolean);

    const scored = data.map((item) => {
      const hay = `${item.title} ${item.description} ${item.url} ${(item.tags || []).join(' ')}`.toLowerCase();
      let score = 0;
      for (const t of tokens) {
        if (!t) continue;
        if (item.title.toLowerCase().includes(t)) score += 3;
        if (item.description.toLowerCase().includes(t)) score += 2;
        if (item.url.toLowerCase().includes(t)) score += 1.25;
        if (item.tags?.some((x) => x.toLowerCase().includes(t))) score += 1.5;
        if (hay.includes(t)) score += 0.5;
      }
      return { item, score };
    });

    return scored
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map((s) => s.item);
  }, [query]);

  useEffect(() => {
    const el = document.getElementById('koogle-search');
    if (el) el.focus();
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 flex flex-col">
      <Header brandName="KOOGLE" tagline="by Kenz Media" />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
          <div className="text-center space-y-2">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">KOOGLE</h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">Search the web with style — by Kenz Media</p>
          </div>
          <div className="mt-6">
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
          {query.trim().length > 0 ? (
            <SearchResults query={query} results={results} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 p-4 bg-white/60 dark:bg-zinc-900/60 backdrop-blur">
                <h3 className="font-semibold mb-1">Try popular searches</h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  {['design systems', 'react performance', 'tailwind tips', 'modern ai tools'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 p-4 bg-white/60 dark:bg-zinc-900/60 backdrop-blur">
                <h3 className="font-semibold mb-1">Search tips</h3>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 space-y-1">
                  <li>Use quotes to search exact phrases</li>
                  <li>Use minus sign to exclude words</li>
                  <li>Combine keywords for precise results</li>
                </ul>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
