import React from 'react'
import { Link, Links, NavLink } from 'react-router-dom'

const CartSVG = () => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="100" aria-hidden="true">
    <rect x="10" y="28" width="90" height="52" rx="8" fill="#FAECE7" stroke="#D85A30" strokeWidth="2" />
    <path d="M10 44h90" stroke="#D85A30" strokeWidth="1.5" strokeDasharray="5 4" />
    <circle cx="38" cy="90" r="7" fill="#D85A30" />
    <circle cx="82" cy="90" r="7" fill="#D85A30" />
    <path d="M2 14h12l6 30" stroke="#D85A30" strokeWidth="2" strokeLinecap="round" />
    <text x="55" y="70" textAnchor="middle" fontSize="22" fontFamily="serif" fill="#D85A30" fontWeight="700">?</text>
    <path d="M94 10 L108 10 M101 3 L101 17" stroke="#D85A30" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    <path d="M6 6 L14 14 M14 6 L6 14" stroke="#993C1D" strokeWidth="2" strokeLinecap="round" opacity="0.4" transform="translate(8,-2)" />
  </svg>
)

const Page404 = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center  px-6  py-12 text-center relative overflow-hidden bg-[#f9f7f4]">

      {/* Dot background */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #d1cfc8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg">

        {/* Floating cart icon */}
        <div className="mb-5 animate-bounce">
          <CartSVG />
        </div>

        {/* 404 number */}
        <h1
          className="font-bold leading-none tracking-tighter text-gray-900 text-8xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          4
          <span
            className="text-blue-600 inline-block animate-spin"
            style={{ animation: 'wobble 2.5s ease-in-out infinite' }}
          >
            0
          </span>
          4
        </h1>

        {/* Divider */}
        <div className="w-10 h-0.5 bg-blue-600  rounded-full my-4" />

        {/* Heading */}
        <p className="text-xl font-medium text-gray-900 mb-2">
          Oops! This page is out of stock.
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm">
          Looks like the page you're looking for has been moved, removed, or never existed.
          Let's get you back on track.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-150 no-underline"
          >
            🏠 Go back home
          </Link>
         
          <Link
            to="/product"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-[#f0ede8] active:scale-95 text-gray-900 text-sm font-medium px-5 py-2.5 rounded-lg border border-gray-300 transition-all duration-150 no-underline"
          >
            🛍️ Browse products
          </Link>
        </div>

        {/* Category chips */}
        
      </div>

      {/* Wobble keyframe */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        @keyframes wobble {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
    </div>
  )
}

export default Page404