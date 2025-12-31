'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DeckNavigation() {
  const pathname = usePathname();

  return (
    <div className="fixed top-20 right-6 z-50 bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700 overflow-hidden">
      <Link
        href="/"
        className={`block px-6 py-3 text-sm font-semibold transition-colors ${
          pathname === '/'
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
            : 'text-slate-300 hover:bg-slate-700'
        }`}
      >
        🏢 ClickShift
      </Link>
      <div className="h-px bg-slate-700"></div>
      <Link
        href="/clickbot"
        className={`block px-6 py-3 text-sm font-semibold transition-colors ${
          pathname === '/clickbot'
            ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
            : 'text-slate-300 hover:bg-slate-700'
        }`}
      >
        🤖 ClickBot
      </Link>
    </div>
  );
}