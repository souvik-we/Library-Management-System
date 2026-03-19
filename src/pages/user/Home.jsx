import React from 'react'

function Home() {
  return (
    <>
     <h1 class ="text-3xl font-bold mb-6 text-black">Dashboard</h1>

  <div class="grid grid-cols-3 gap-7 mb-10">

    <div class="bg-white p-5 rounded-xl shadow flex justify-between items-center hover:shadow-lg hover:scale-105 trnsition duration-300 cursor-pointer">
      <div>
        <p class="text-gray-900">Total Books</p>
        <h2 class="text-2xl font-bold">63</h2>
      </div>
      <div class="bg-blue-100 p-3 rounded-lg">📘</div>
    </div>

    <div class="bg-white p-5 rounded-xl shadow flex justify-between items-center hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
      <div>
        <p class="text-gray-900">Available</p>
        <h2 class="text-2xl font-bold">42</h2>
      </div>
      <div class="bg-green-200 p-3 rounded-lg">✔️</div>
    </div>

    <div class="bg-white p-5 rounded-xl shadow flex justify-between items-center hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
      <div>
        <p class="text-gray-900">Students</p>
        <h2 class="text-2xl font-bold">5</h2>
      </div>
      <div class="bg-purple-100 p-3 rounded-lg">👥</div>
    </div>

    <div class="bg-white p-5 rounded-xl shadow flex justify-between items-center hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
      <div>
        <p class="text-gray-900">Pending</p>
        <h2 class="text-2xl font-bold">2</h2>
      </div>
      <div class="bg-yellow-100 p-3 rounded-lg">⏰</div>
    </div>

    <div class="bg-white p-5 rounded-xl shadow flex justify-between items-center hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
      <div>
        <p class="text-gray-900">Active Loans</p>
        <h2 class="text-2xl font-bold">3</h2>
      </div>
      <div class="bg-pink-100 p-3 rounded-lg">📈</div>
    </div>

    <div class="bg-white p-5 rounded-xl shadow flex justify-between items-center hover:shadow-lg hover:scale-105 transition duaraton-300 cursor-pointer">
      <div>
        <p class="text-gray-900">Returned</p>
        <h2 class="text-2xl font-bold">3</h2>
      </div>
      <div class="bg-teal-100 p-3 rounded-lg">⚠️</div>
    </div>

  </div>
    </>
  )
}

export default Home