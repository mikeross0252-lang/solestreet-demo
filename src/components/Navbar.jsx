import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const { count } = useCart()

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition hover:text-accent ${isActive ? 'text-accent' : 'text-milk'}`

  return (
    <header className="sticky top-0 z-50 bg-plum shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-display text-3xl tracking-widest text-milk">
          SOLE<span className="text-accent">STREET</span>
        </Link>

        <div className="flex items-center gap-6">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/shop" className={linkClass}>Shop</NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart
            <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-white">
              {count}
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}