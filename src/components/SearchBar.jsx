import { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange, onSubmit }) {
  const [focused, setFocused] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form onSubmit={submit} className="">
      <div className={`group relative rounded-2xl border transition-colors ${focused ? 'border-rose-400/60 dark:border-rose-400/50' : 'border-zinc-200/60 dark:border-zinc-800/60'} bg-white/70 dark:bg-zinc-900/60 backdrop-blur shadow-sm`}>        
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
              onClick={() => onChange('')}
              className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              <X size={16} />
            </button>
          )}
          <button
            type="submit"
            className="ml-1 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 text-white px-3 py-1.5 text-sm font-medium shadow hover:brightness-95"
          >
            Search
          </button>
        </div>
        <div className="px-4 pb-3">
          <div className="flex flex-wrap gap-2 text-xs text-zinc-500">
            {['news', 'design', 'react', 'ai', 'docs'].map((s) => (
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
