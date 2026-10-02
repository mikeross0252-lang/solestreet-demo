import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products, formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addToCart } = useCart()

  const [size, setSize] = useState(null)
  const [color, setColor] = useState(product ? product.colors[0] : null)
  const [qty, setQty] = useState(1)
  const [message, setMessage] = useState('')

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p className="text-lg">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block font-semibold text-accent hover:underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const handleAdd = () => {
    if (!size) {
      setMessage('Please choose a size.')
      return
    }
    addToCart(product, size, color, qty)
    setMessage('Added to cart!')
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/shop" className="text-sm font-semibold text-plum-light hover:text-accent">
        ← Back to shop
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden rounded-xl bg-white">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-plum-light">
            {product.category}
          </p>
          <h1 className="mt-1 font-display text-5xl tracking-wide">{product.name}</h1>
          <p className="mt-2 text-2xl font-semibold text-accent">{formatPrice(product.price)}</p>
          <p className="mt-4 opacity-80">{product.description}</p>

          {/* Size */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide">Size</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => { setSize(s); setMessage('') }}
                className={`h-11 w-11 rounded-lg border text-sm font-semibold transition ${
                  size === s
                    ? 'border-plum bg-plum text-milk'
                    : 'border-plum/30 bg-white hover:border-plum'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Color */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide">Color</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  color === c
                    ? 'border-plum bg-plum text-milk'
                    : 'border-plum/30 bg-white hover:border-plum'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Quantity */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide">Quantity</p>
          <div className="mt-2 inline-flex items-center rounded-lg border border-plum/30 bg-white">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 text-lg">−</button>
            <span className="w-10 text-center font-semibold">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-4 py-2 text-lg">+</button>
          </div>

          <button
            onClick={handleAdd}
            className="mt-8 w-full rounded-full bg-accent py-3 font-semibold text-white transition hover:bg-plum"
          >
            Add to cart
          </button>

          {message && (
            <p className={`mt-3 text-sm font-semibold ${message === 'Added to cart!' ? 'text-green-700' : 'text-red-600'}`}>
              {message}{' '}
              {message === 'Added to cart!' && (
                <Link to="/cart" className="underline">View cart</Link>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}