import { Link } from '@inertiajs/react'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-4xl mx-auto flex items-center justify-between p-4">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Monika
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </div>
        </nav>
      </header>

      {/* Konten Halaman */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Monika. All rights reserved.
      </footer>
    </div>
  )
}