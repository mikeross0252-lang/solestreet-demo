import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-plum/5">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-plum-light">
          {product.category}
        </p>
        <h3 className="mt-1 font-display text-2xl tracking-wide">{product.name}</h3>
        <p className="mt-1 font-semibold text-accent">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}