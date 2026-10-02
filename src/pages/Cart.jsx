import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function Cart() {
  const { items, updateQty, removeFromCart, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="font-display text-5xl tracking-wide">YOUR CART IS EMPTY</h1>
        <Link
          to="/shop"
          className="mt-6 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-white transition hover:bg-plum"
        >
          Start shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-5xl tracking-wide">YOUR CART</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {items.map((item) => (
            <div key={item.key} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm">
              <img src={item.image} alt={item.name} className="h-28 w-24 rounded-lg object-cover" />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl tracking-wide">{item.name}</h3>
                  <p className="text-sm opacity-70">Size {item.size} · {item.color}</p>
                  <p className="font-semibold text-accent">{formatPrice(item.price)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center rounded-lg border border-plum/30">
                    <button onClick={() => updateQty(item.key, item.qty - 1)} className="px-3 py-1">−</button>
                    <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <button onClick={() => updateQty(item.key, item.qty + 1)} className="px-3 py-1">+</button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.key)}
                    className="text-sm font-semibold text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
          <h2 className="font-display text-3xl tracking-wide">SUMMARY</h2>
          <div className="mt-4 flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">{formatPrice(total)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm opacity-70">
            <span>Delivery</span>
            <span>Free (demo)</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-plum/20 pt-4 text-lg font-bold">
            <span>Total</span>
            <span className="text-accent">{formatPrice(total)}</span>
          </div>
          <Link
            to="/checkout"
            className="mt-6 block rounded-full bg-accent py-3 text-center font-semibold text-white transition hover:bg-plum"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}