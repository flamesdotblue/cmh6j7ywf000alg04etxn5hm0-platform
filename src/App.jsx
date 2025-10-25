import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import data from './data/sampleData';

export default function App() {
  const [query, setQuery] = useState('');

  // Search: weighted scoring with tokenization and partial matches
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    // Support: exclude tokens with -, simple phrases in quotes
    const tokens = [];
    const phraseRegex = /"([^"]+)"|(\S+)/g;
    let match;
    while ((match = phraseRegex.exec(q))) {
      const token = (match[1] || match[2] || '').trim();
      if (!token) continue;
      tokens.push(token);
    }

    const excludes = tokens.filter((t) => t.startsWith('-')).map((t) => t.slice(1));
    const includes = tokens.filter((t) => !t.startsWith('-'));

    const scored = data.map((item) => {
      const title = item.title.toLowerCase();
      const desc = item.description.toLowerCase();
      const url = item.url.toLowerCase();
      const tags = (item.tags || []).map((t) => t.toLowerCase());
      const hay = `${title} ${desc} ${url} ${tags.join(' ')}`;

      // Early exclude
      if (excludes.some((ex) => ex && hay.includes(ex))) return { item, score: 0 };

      let score = 0;
      for (const t of includes) {
        const isPhrase = t.includes(' ');
        const needle = t;
        if (title.includes(needle)) score += isPhrase ? 5 : 3.5;
        if (desc.includes(needle)) score += isPhrase ? 3 : 2;
        if (url.includes(needle)) score += 1.5;
        if (tags.some((x) => x.includes(needle))) score += 1.75;
        if (hay.includes(needle)) score += 0.5; // gentle fuzzy
      }

      return { item, score };
    });

    return scored
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30)
      .map((s) => s.item);
  }, [query]);

  useEffect(() => {
    const el = document.getElementById('koogle-search');
    if (el) el.focus();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 text-zinc-800 dark:text-zinc-100 flex flex-col">
      <Header brandName="KOOGLE" tagline="by Kenz Media" />

      <main className="flex-1">
        <section className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/40 backdrop-blur px-3 py-1 text-xs text-zinc-600 dark:text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
              Fast, aesthetic search — privacy friendly
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400">
              KOOGLE
            </h1>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Discover quality resources across the web. Day and Night ready.
            </p>
          </div>
          <div className="mx-auto max-w-3xl mt-6">
            <SearchBar value={query} onChange={setQuery} onClear={() => setQuery('')} />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          {query.trim().length > 0 ? (
            <SearchResults query={query} results={results} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/50 backdrop-blur p-5">
                <h3 className="font-semibold mb-2">Trending topics</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'ai tools',
                    'design systems',
                    'react performance',
                    'tailwind components',
                    'typescript best practices',
                    'web accessibility',
                  ].map((t) => (
                    <button
                      key={t}
                      onClick={() => setQuery(t)}
                      className="px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/50 backdrop-blur p-5">
                <h3 className="font-semibold mb-2">Search tips</h3>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1 list-disc pl-5">
                  <li>Use quotes for exact phrases: "design systems"</li>
                  <li>Exclude terms with a minus: react -redux</li>
                  <li>Combine tags for precision: ai tools docs</li>
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
