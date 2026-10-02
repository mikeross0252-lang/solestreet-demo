import { Link } from 'react-router-dom'
import { products, categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Home() {
  const featured = products.filter((p) => p.tag === 'New' || p.tag === 'Sale').slice(0, 4)

  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex min-h-[70vh] items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-plum/70" />
        <div className="relative mx-auto w-full max-w-6xl px-4 text-milk">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            New season drop
          </p>
          <h1 className="mt-2 font-display text-6xl leading-none tracking-wide md:text-8xl">
            WALK THE <br /> STREET YOUR WAY
          </h1>
          <p className="mt-4 max-w-md text-lg opacity-90">
            Bold sneakers, high-tops, runners and slides for every move you make.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-plum"
          >
            Shop now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-4xl tracking-wide">SHOP BY CATEGORY</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories
            .filter((c) => c !== 'All')
            .map((c) => (
              <Link
                key={c}
                to={`/shop?category=${c}`}
                className="rounded-xl bg-plum py-10 text-center font-display text-3xl tracking-wide text-milk transition hover:bg-plum-light"
              >
                {c}
              </Link>
            ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-4xl tracking-wide">FEATURED</h2>
          <Link to="/shop" className="text-sm font-semibold text-accent hover:underline">
            View all
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}