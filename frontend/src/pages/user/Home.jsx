import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
   const user = JSON.parse(localStorage.getItem("user"));

  const rollNumber = user?.roll_number;
  const name = user?.name;
  console.log("nammmmmmmmmmmm", name)
   const navigate = useNavigate();
  const [data, setData] = useState({
    total_books: 0,
    available: 0,
    returned: 0,
    userName:name,
    department: "CSE", // default dept if API doesn't return
  });
  console.log("data" , data)
  const [allbook, setAllbook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookLoading, setBookLoading] = useState(true);
  
  // ✅ Fetch dashboard data
  useEffect(() => {
    fetch("http://localhost/LMS/Api/auth/dashboard.php")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
        console.log(res.name)
      })
      .catch((err) => {
        console.error("Dashboard API Error:", err);
        setLoading(false);
      });
  }, []);

  // ✅ Fetch all books
  useEffect(() => {
    fetch("http://localhost/LMS/Api/books/getBooks.php")
      .then((res) => res.json())
      .then((res) => {
        setAllbook(res);
        setBookLoading(false);
      })
      .catch((err) => {
        console.error("Books API Error:", err);
        setBookLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="p-5 text-lg">Loading Dashboard...</h2>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Title */}
      <h1 className="text-3xl font-bold mb-6 text-black">Dashboard</h1>

      {/* ✅ Welcome Banner */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-2xl mb-6">
        <h2 className="text-2xl font-bold mb-1">Welcome back, {name} 👋</h2>
        <p className="text-sm opacity-90 mb-4">
          Here's what's happening with your library account today.
        </p>
 <div className="flex gap-3">
        <button
          onClick={() => navigate("/books")}
          className="bg-white text-green-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100"
        >
          Browse Books →
        </button>
        <button
          onClick={() => navigate("/new")} 
          className="bg-green-500 px-4 py-2 rounded-lg font-medium hover:bg-green-400"
        >
          My Books
        </button>
      </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-600">Total Books</p>
          <h2 className="text-3xl font-bold text-black">{data.total_books}</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-600">Available</p>
          <h2 className="text-3xl font-bold text-green-600">{data.available}</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-600">Returned</p>
          <h2 className="text-3xl font-bold text-purple-600">{data.returned}</h2>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Recommended for You
        </h2>

        {bookLoading ? (
          <p className="text-gray-500">Loading recommended books...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {(allbook || [])
              .filter((book) => book.department === data.department) // Filter by user's department
              .slice(0, 4) // Show top 4 books
              .map((book) => (
                <div
                  key={book.id}
                  className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                  title={book.title}
                >
                  <div className="h-40 rounded-xl bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white text-2xl hover:shadow-xl">
                    📖
                  </div>
                  <h3 className="mt-2 font-medium text-black truncate">{book.title}</h3>
                  <p className="text-sm text-gray-500">{book.author}</p>
                  <p className="text-sm text-gray-400">ISBN: {book.isbn}</p>
                  <p
                    className={`mt-1 font-semibold ${
                      book.available > 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {book.available > 0 ? "Available" : "Not Available"}
                  </p>
                </div>
              ))}

            {/* Show message if no books found */}
            {(allbook || []).filter((book) => book.department === data.department).length === 0 && (
              <p className="text-gray-500 col-span-full">
                No recommended books available for your department.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;