import React from 'react'

function Dashboard() {
  return (
    <div className="flex-1 p-8">

      <h1 className="text-2xl font-semibold mb-6 text-blue">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Books</p>
          <h2 className="text-3xl font-bold">62</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Available</p>
          <h2 className="text-3xl font-bold text-green-600">42</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Students</p>
          <h2 className="text-3xl font-bold text-purple-600">5</h2>
        </div>

      </div>

    </div>

    
  )
}

export default Dashboard