import React from 'react'

const Categories = () => {

    const categories=[
         {
      id: 1,
      title: "Minimal Fashion clothes",
      description: "Timeless pieces for every wardrobe.",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      large: true,
    },
    {
      id: 2,
      title: "Tech ",
      description: "Shop Tech",
      image:
        "https://lh3.googleusercontent.com/aida/ADBb0uhREUaDSb5uAG2hy-_UrWsuYDph9LhAK2B1P06HhHvNVxEMw7LrrwmqVCoSHwbZ4bQ_C0l1q19EsdC7cDEIHvSvYuoAqArPoAHM1JCQlcSyZRuC7v-LreNLmegVjec4gdJ9z6KOxkGz1-GtTRBvFwzgWGqbuN-nOTN3mrxzpJg_O8iWTcr16L6psNwgHtJNfJWFSpicCFM1fPiLylnDP5o6v-JBMzKyEXElx3saBbxyTyi5ezSxmwR5Z9I",
    },
    {
      id: 3,
      title: "Skincare",
      description: "",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1000",
    },
    {
      id: 4,
      title: "Modern Home",
      description: "",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000",
    },
    ];
  return (
 <section className="bg-[#f5f5f7] py-20 px-6 md:px-12">
      <header className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Collections
        </h2>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
     
          <article className="relative h-125 overflow-hidden hover: rounded-2xl group">
            <img
              src={categories[0].image}
              alt={categories[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-4xl font-bold">
                {categories[0].title}
              </h3>

              <p className="mt-2 text-sm opacity-90">
                {categories[0].description}
              </p>

              <button className="mt-4 text-sm font-medium underline">
                Explore Category
              </button>
            </div>
          </article>

          {/* Right Side */}
          <aside className="grid grid-rows-2 gap-4">
            {/* Top Card */}
            <article className="relative h-60.5 overflow-hidden rounded-2xl group">
              <img
                src={categories[1].image}
                alt={categories[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-2xl font-bold">
                  {categories[1].title}
                </h3>

                <p className="text-sm">
                  {categories[1].description}
                </p>
              </div>
            </article>

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-2 gap-4">
              {categories.slice(2).map((category) => (
                <article
                  key={category.id}
                  className="relative h-60.5 overflow-hidden rounded-2xl group"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">
                      {category.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </section>
  )
}

export default Categories