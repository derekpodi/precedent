'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <div className="text-right pr-6">
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''} text-blue-600`} href="/" >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''} text-blue-600`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/blog' ? 'active' : ''} text-blue-600`}
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/dummy' ? 'active' : ''} text-blue-600`}
            href="/dummy"
          >
            Dummy
          </Link>
        </li>
      </ul>
    </div>
  )
}