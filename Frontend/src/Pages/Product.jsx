
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const TABS = ['All', 'Tech', 'Fashion', 'Home']
const PER_PAGE = 8

const CAT_MAP = {
  electronics:        { label: 'TECH',    cls: 'bg-slate-800 text-white' },
  jewelery:           { label: 'TECH',    cls: 'bg-slate-800 text-white' },
  "men's clothing":   { label: 'FASHION', cls: 'bg-red-600 text-white'   },
  "women's clothing": { label: 'FASHION', cls: 'bg-red-600 text-white'   },
  home:               { label: 'HOME',    cls: 'bg-teal-700 text-white'   },
}

const getBadge = (cat) =>
  CAT_MAP[cat?.toLowerCase()] || { label: cat?.toUpperCase().slice(0, 6) || '', cls: 'bg-gray-700 text-white' }

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const badge = getBadge(product.category)
  const origPrice = (product.price * 1.25).toFixed(2)
  const isNew = product.id % 7 === 0

  const handleCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 1800)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">

      {/* Image */}
      <div className="relative h-36 sm:h-40 md:h-44 bg-gray-900 overflow-hidden">
        <img
          src={product.images || product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide ${badge.cls}`}>
          {badge.label}
        </span>
        <button
          onClick={() => setWishlisted(w => !w)}
          aria-label="Wishlist"
          className={`absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-sm border-none cursor-pointer transition-colors
            ${wishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
        >♡</button>
      </div>

      {/* Info */}
      <div className="p-2.5 sm:p-3 flex flex-col gap-1.5 flex-1">
        <div className="flex items-center gap-1">
          <span className="text-amber-400 text-xs">★</span>
          <span className="text-xs text-gray-700 font-medium">{product.rating?.rate || 4.3}</span>
          <span className="text-xs text-gray-400">(120)</span>
        </div>

        <h2 className="text-[12px] sm:text-[13px] font-medium text-gray-900 leading-snug line-clamp-2 m-0">
          {product.title}
        </h2>

        <p className="text-[11px] text-gray-400 capitalize m-0">{product.category}</p>

        <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
          <span className="text-xs sm:text-sm font-bold text-gray-900">₹{product.price}</span>
          {!isNew && (
            <>
              <span className="text-[11px] text-gray-400 line-through">₹{origPrice}</span>
              <span className="text-[11px] font-semibold text-green-600">20% off</span>
            </>
          )}
          {isNew && <span className="text-[11px] font-bold text-red-600">NEW</span>}
        </div>

        <div className="flex gap-1.5 sm:gap-2 mt-auto pt-2">
      
         <Link
  to={`/Products/${product.id}`}
  className="
  
    w-full text-center sm:px-5
    py-2
    text-xs sm:text-sm
    font-medium
    rounded-xl
    border border-blue-500
    text-blue-500
    hover:bg-blue-500
    hover:text-white
    transition-all duration-300
    shadow-sm hover:shadow-md
  "
>
  Details
</Link>
        </div>
      </div>
    </div>
  )
}

const SkeletonCard = () => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col animate-pulse">
    <div className="h-36 sm:h-40 md:h-44 bg-gray-200" />
    <div className="p-3 flex flex-col gap-2">
      <div className="h-3 bg-gray-200 rounded w-1/3" />
      <div className="h-3 bg-gray-200 rounded w-full" />
      <div className="h-3 bg-gray-200 rounded w-2/3" />
      <div className="h-3 bg-gray-200 rounded w-1/4 mt-1" />
      <div className="h-8 bg-gray-200 rounded mt-2" />
    </div>
  </div>
)

const Product = () => {
  const products = useSelector((state) => state.productsreducer.data)
  const [tab, setTab] = useState('All')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('Popularity')
  const [page, setPage] = useState(1)

  console.log(products)
  if (!products || products.length === 0) {
    return (
      <div className="bg-white min-h-screen px-3 sm:px-6 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      </div>
    )
  }

  const filtered = products.filter(p => {
    const cat = p.category?.toLowerCase() || ''
    const matchTab =
      tab === 'All' ||
      (tab === 'Tech' && ['electronics', 'jewelery'].includes(cat)) ||
      (tab === 'Fashion' && ["men's clothing", "women's clothing"].includes(cat)) ||
      (tab === 'Home' && cat.includes('home'))
    return matchTab && p.title?.toLowerCase().includes(search.toLowerCase())
  })

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'Price: Low to High') return a.price - b.price
    if (sort === 'Price: High to Low') return b.price - a.price
    if (sort === 'Rating') return (b.rating?.rate || 0) - (a.rating?.rate || 0)
    return 0
  })

  const totalPages = Math.max(1, Math.ceil(sorted.length / PER_PAGE))
  const paginated = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const pageNums = [1, 2, 3]

  return (
   <section>
     <div className="bg-white min-h-screen px-3 sm:px-6 py-4 sm:py-5">

      {/* Search + Filter */}
      <div className="flex gap-2 sm:gap-2.5 mb-4">
        <div className="flex-1 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          <input
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1) }}
            placeholder="Search the collection..."
            className="w-full h-9 border border-gray-200 rounded-lg pl-8 pr-3 text-[13px] outline-none text-gray-900 bg-white focus:border-indigo-400"
          />
        </div>
        <button className="h-9 px-3 sm:px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold flex items-center gap-1.5 border-none cursor-pointer transition-colors whitespace-nowrap">
          ⚙ <span className="hidden sm:inline">Filters</span>
        </button>
      </div>

      {/* Tabs + Meta */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-5 gap-2">
        {/* Tabs — scrollable on mobile */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => { setTab(t); setPage(1) }}
              className={`px-3 sm:px-4 py-1 rounded-full text-xs font-medium cursor-pointer border transition-colors whitespace-nowrap flex-shrink-0
                ${tab === t
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-indigo-300 hover:text-indigo-500'}`}
            >{t}</button>
          ))}
        </div>

        {/* Results + Sort */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-xs text-gray-500">{sorted.length} results</span>
          <span className="text-xs text-gray-500">
            Sort by:{' '}
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="text-xs border-none bg-transparent cursor-pointer outline-none text-gray-700"
            >
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </span>
        </div>
      </div>

      {/* Grid — 1 col mobile, 2 sm, 3 md, 4 lg */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {paginated.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      {/* Load More */}
      {page < totalPages && (
        <div className="text-center mb-4">
          <button
            onClick={() => setPage(pg => pg + 1)}
            className="w-full sm:w-auto px-9 py-2 rounded-lg border border-gray-200 bg-white text-[13px] text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors"
          >Load More Products</button>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-1.5 mb-8">
        {pageNums.map(n => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`w-7 h-7 rounded-md text-[13px] cursor-pointer border transition-colors
              ${page === n
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-500 border-gray-200 hover:border-indigo-300'}`}
          >{n}</button>
        ))}
        {totalPages > 3 && <span className="self-center text-[13px] text-gray-400">…</span>}
        {totalPages > 3 && (
          <button
            onClick={() => setPage(totalPages)}
            className="w-7 h-7 rounded-md border border-gray-200 bg-white text-[13px] text-gray-500 cursor-pointer hover:border-indigo-300"
          >{totalPages}</button>
        )}
      </div>




    </div>
    <Footer/>
   </section>
  )
}

export default Product