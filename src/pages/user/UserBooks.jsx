 import React, { useState } from 'react';

 const UserBooks = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [activeCategory, setActiveCategory] = useState("All");

   const categories = ["All", "Computer Science", "Software Engineering", "Mathematics", "Physics", "Literature"];

   const books = [
     { id: 1, title: "Introduction to Algorithms", author: "Sangram Bauri", year: 2009, category: "Computer Science", stock: 3, color: "bg-red-600" },
     { id: 2, title: "Clean Code", author: "Dr.Soumen Mondal", year: 2008, category: "Software Engineering", stock: 2, color: "bg-blue-600", status: "Requested" },
     { id: 3, title: "Differential calculas", author: "Dr.Debesh Mandi", year: 2015, category: "Mathematics iii", stock: 4, color: "bg-emerald-600" },
     { id: 4, title: "6th SEM CHOTA", author: "Dr.Tuhin Mohanta", year: 2013, category: "Physics", stock: 1, color: "bg-purple-600" },
     { id: 5, title: "The linuxby", author: "F. Scott Fitzgerald", year: 1925, category: "Literature", stock: 5, color: "bg-orange-600" },
     { id: 6, title: "Design Patterns", author: "Erich Gamma", year: 1994, category: "Computer Science", stock: 2, color: "bg-teal-600" },
     { id: 7, title: "Object Oriented Programing", author: "Dr.Soumen Mondal", year: 2002, category: "Computer Science", stock: 4, color: "bg-gray-600" },
     { id: 8, title: "C PROGRAMING", author: "Master Debesh Mahato", year: 2003, category: "Computer Science", stock: 7, color: "bg-teal-600" },
   ];

   const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searcjsxhTerm.toLowerCase()) || 
                           book.author.toLowerCase().includes(searchTerm.toLowerCase());
     const matchesCategory = activeCategory === "All" || book.category === activeCategory;
     return matchesSearch && matchesCategory;
   });

  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-700">
      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10">
        <header className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Browse Books</h2>
          
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Search Input using pure SVG */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input 
                type="text" 
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
            
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                    : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map(book => (
            <div key={book.id} className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className={`relative h-52 ${book.color} flex items-center justify-center text-white/80`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                {book.status && (
                  <span className="absolute top-4 right-4 bg-amber-400 text-[10px] font-black px-2.5 py-1 rounded-lg text-white uppercase tracking-widest shadow-lg">
                    {book.status}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">{book.category}</span>
                <h3 className="font-bold text-slate-800 text-lg mt-2 leading-snug group-hover:text-emerald-700 transition-colors">{book.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{book.author}</p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <span className="text-xs text-gray-400 font-bold tracking-tighter">{book.year}</span>
                  <span className={`text-[11px] px-3 py-1.5 rounded-xl font-black uppercase tracking-tight ${
                    book.stock > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'
                  }`}>
                    {book.stock} in stock
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserBooks;
