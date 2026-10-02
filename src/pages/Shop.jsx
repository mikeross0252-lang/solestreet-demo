import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Shop() {
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')

  let list = products.filter(
    (p) =>
      (category === 'All' || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  )

  if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
  if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)
  if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-5xl tracking-wide">SHOP</h1>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              category === c
                ? 'bg-plum text-milk'
                : 'bg-white text-plum hover:bg-plum/10'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Search and sort */}
      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <input
          type="text"
          placeholder="Search sneakers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-plum/20 bg-white px-4 py-2 outline-none focus:border-accent"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-plum/20 bg-white px-4 py-2 outline-none focus:border-accent"
        >
          <option value="default">Sort by</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      {/* Products */}
      {list.length === 0 ? (
        <p className="mt-10 text-center text-lg">No sneakers found. Try another search.</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}