import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PetCoIL – Ваш гид по миру питомцев в Израиле',
  description: 'Агрегатор полезных сервисов и мест для животных: клиники, магазины, площадки и многое другое.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-indigo-600">PetCoIL</Link>
            <nav className="space-x-4">
              <Link href="/places" className="text-sm font-medium text-gray-700 hover:text-indigo-600">\u041aаталог</Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-indigo-600">\u041e \u043fроекте</Link>
              <Link href="/rules" className="text-sm font-medium text-gray-700 hover:text-indigo-600">\u041f\u0440\u0430\u0432\u0438\u043b\u0430</Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500">
            \u00a9 {new Date().getFullYear()} PetCoIL. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.
          </div>
        </footer>
      </body>
    </html>
  );
}
