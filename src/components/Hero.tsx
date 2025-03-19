import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-white" style={{height:'100vh'}}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?fashion,shopping')" }}>
        <div className="absolute inset-0 bg-[#EFEFD0] bg-opacity-50"></div>
      </div>
      <div className="relative text-center text-black px-6">
        <h1 className="text-5xl font-extrabold md:text-6xl">Shop the Latest Trends</h1>
        <p className="mt-4 text-lg md:text-xl">Discover exclusive deals on top items and styles.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-[#F7C59F] hover:bg-[#FF6B35] rounded-xl text-lg font-medium shadow-lg transition">Shop Now</button>
          <button className="px-6 py-3 border-3 border-[#004e89] text-[#004e89] rounded-xl text-lg font-medium hover:bg-[#EFEFD0] hover:text-black transition hover:font-bold">Explore More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
