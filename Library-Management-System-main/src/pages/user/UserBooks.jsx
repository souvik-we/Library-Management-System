import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

const UserBooks = () => {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [requestedBooks, setRequestedBooks] = useState([]);

  // ✅ Safe user parsing
  const user = JSON.parse(localStorage.getItem("user"));
  const rollNumber = user?.user;

  // ✅ Fetch Categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost/LMS/Api/categories/get.php"
      );
      setCategories(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  // ✅ Fetch Books
  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        "http://localhost/LMS/Api/books/getBooks.php"
      );
      setBooks(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);

  // ✅ Category Map (Optimized)
  const categoryMap = useMemo(() => {
    return Object.fromEntries(
      categories.map((c) => [String(c.category_id), c.category_name])
    );
  }, [categories]);

  // ✅ Handle Request Book
  const handleAdd = async (book) => {
    if (!rollNumber) {
      alert("User not logged in!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost/LMS/Api/issue/requestBook.php",
        {
          roll_number: rollNumber,
          isbn: book.isbn,
        }
      );

      alert(res.data.message);

      if (res.data.status === "success") {
        setRequestedBooks((prev) =>
          prev.includes(book.isbn) ? prev : [...prev, book.isbn]
        );
      }
    } catch (err) {
      console.error("Request failed:", err);
      alert("Error sending request.");
    }
  };

  // ✅ Filter Books
  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        (book.title?.toLowerCase() || "").includes(search) ||
        (book.author?.toLowerCase() || "").includes(search);

      const matchesCategory =
        activeCategory === "All" ||
        String(book.category_id) === String(activeCategory);

      return matchesSearch && matchesCategory;
    });
  }, [books, searchTerm, activeCategory]);

  return (
    <div className="flex min-h-screen bg-gray-100 text-slate-700">
      <main className="flex-1 p-6 md:p-10">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
          Browse Books
        </h2>

        {/* 🔍 SEARCH + FILTER */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border rounded-xl w-full max-w-md"
          />

          <div className="flex gap-2 flex-wrap">
            {/* All */}
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-xl text-sm ${
                activeCategory === "All"
                  ? "bg-green-600 text-white"
                  : "bg-white border"
              }`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat.category_id}
                onClick={() => setActiveCategory(String(cat.category_id))}
                className={`px-4 py-2 rounded-xl text-sm ${
                  String(activeCategory) === String(cat.category_id)
                    ? "bg-green-600 text-white"
                    : "bg-white border"
                }`}
              >
                {cat.category_name}
              </button>
            ))}
          </div>
        </div>

        {/* 📚 BOOK GRID */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.isbn} // ✅ fixed key
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg">{book.title}</h3>
                <p className="text-gray-500">{book.author}</p>

                {/* ✅ Category Name */}
                <p className="text-sm text-gray-400">
                  {categoryMap[String(book.category_id)] || "Unknown"}
                </p>

                <p className="text-sm mt-2">ISBN: {book.isbn}</p>

                <p
                  className={`mt-2 font-bold ${
                    book.available > 0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {book.available} Available
                </p>

                {/* 📩 REQUEST BUTTON */}
                <button
                  onClick={() => handleAdd(book)}
                  disabled={
                    book.available <= 0 ||
                    requestedBooks.includes(book.isbn)
                  }
                  className={`mt-3 px-4 py-2 rounded-md text-white ${
                    book.available > 0 &&
                    !requestedBooks.includes(book.isbn)
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {requestedBooks.includes(book.isbn)
                    ? "⏳ Requested"
                    : "Request Book"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-10">
            No books found 😢
          </p>
        )}
      </main>
    </div>
  );
};

export default UserBooks;