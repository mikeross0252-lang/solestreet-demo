import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const [order, setOrder] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrder({
      number: 'SS-' + Math.floor(100000 + Math.random() * 900000),
      name: form.name,
      total,
    })
    clearCart()
  }

  if (order) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-5xl tracking-wide">THANK YOU, {order.name.split(' ')[0].toUpperCase()}!</h1>
        <p className="mt-4">Your demo order <strong>{order.number}</strong> has been placed.</p>
        <p className="mt-1">Total: <strong className="text-accent">{formatPrice(order.total)}</strong></p>
        <p className="mt-4 text-sm opacity-70">
          This is a demo store, so no payment was taken and nothing will be shipped.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-white transition hover:bg-plum"
        >
          Continue shopping
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p className="text-lg">Your cart is empty.</p>
        <Link to="/shop" className="mt-4 inline-block font-semibold text-accent hover:underline">
          Go to shop
        </Link>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-plum/20 bg-white px-4 py-2 outline-none focus:border-accent'

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-5xl tracking-wide">CHECKOUT</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <form onSubmit={handleSubmit} className="space-y-4 md:col-span-2">
          <input name="name" required placeholder="Full name" value={form.name} onChange={handleChange} className={inputClass} />
          <input name="email" type="email" required placeholder="Email" value={form.email} onChange={handleChange} className={inputClass} />
          <input name="phone" type="tel" required placeholder="Phone number" value={form.phone} onChange={handleChange} className={inputClass} />
          <input name="address" required placeholder="Delivery address" value={form.address} onChange={handleChange} className={inputClass} />
          <input name="city" required placeholder="City" value={form.city} onChange={handleChange} className={inputClass} />
          <button
            type="submit"
            className="w-full rounded-full bg-accent py-3 font-semibold text-white transition hover:bg-plum"
          >
            Place order (demo)
          </button>
        </form>

        <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
          <h2 className="font-display text-3xl tracking-wide">YOUR ORDER</h2>
          <div className="mt-4 space-y-2 text-sm">
            {items.map((i) => (
              <div key={i.key} className="flex justify-between">
                <span>{i.name} × {i.qty}</span>
                <span>{formatPrice(i.price * i.qty)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-plum/20 pt-4 text-lg font-bold">
            <span>Total</span>
            <span className="text-accent">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}