import { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange, onClear }) {
  const [focused, setFocused] = useState(false);

  const submit = (e) => {
    e.preventDefault();
  };

  const quick = ['ai', 'design', 'react', 'docs', 'news', 'typescript'];

  return (
    <form onSubmit={submit}>
      <div className={`group relative rounded-2xl border transition-colors ${focused ? 'border-rose-400/60 dark:border-rose-400/50' : 'border-zinc-200/70 dark:border-zinc-800/70'} bg-white/80 dark:bg-zinc-900/60 backdrop-blur shadow-sm`}>        
        <div className="flex items-center gap-3 px-4 py-3">
          <Search size={18} className="text-zinc-500" />
          <input
            id="koogle-search"
            className="flex-1 bg-transparent outline-none placeholder:text-zinc-400 text-base"
            placeholder="Search the web..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          {value && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => { onClear?.(); }}
              className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <div className="px-4 pb-3">
          <div className="flex flex-wrap gap-2 text-xs text-zinc-600 dark:text-zinc-400">
            {quick.map((s) => (
              <button key={s} type="button" onClick={() => onChange(s)} className="px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
