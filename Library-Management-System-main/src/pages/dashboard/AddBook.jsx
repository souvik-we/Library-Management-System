import React from "react";
import { use } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBook } from "../../features/book/bookSlice";
const AddBook = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = ({
author,
available,
category,
isbn,
title,
total,}) => {
        console.log("Book Data:", author,
    available,
    category,
    isbn,
    title,
    total,);

    dispatch(addBook(
      {
         isbn , title,author,category_id:category,total,available
      }
    ))
    reset();
  };

  return (
    <div className="max-w-xl text-black mx-auto p-6 shadow-lg rounded-2xl bg-white">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
            className="w-full  border p-2 rounded"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        {/* Author */}
        <div>
          <input
            type="text"
            placeholder="Author"
            {...register("author", { required: "Author is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.author && <p className="text-red-500">{errors.author.message}</p>}
        </div>

        {/* ISBN */}
        <div>
          <input
            type="text"
            placeholder="ISBN"
            {...register("isbn", { required: "ISBN is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.isbn && <p className="text-red-500">{errors.isbn.message}</p>}
        </div>

        {/* Category */}
        <div>
          <input
            type="text"
            placeholder="Category"
            {...register("category", { required: "Category is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>

        {/* Publisher */}
        {/* <div>
          <input
            type="text"
            placeholder="Publisher"
            {...register("publisher")}
            className="w-full border p-2 rounded"
          />
        </div> */}

        {/* Total Copies */}
        <div>
          <input
            type="number"
            placeholder="Total Copies"
            {...register("total", {
              required: "Total copies required",
              min: { value: 1, message: "Must be at least 1" }
            })}
            className="w-full border p-2 rounded"
          />
          {errors.totalCopies && (
            <p className="text-red-500">{errors.totalCopies.message}</p>
          )}
        </div>

        {/* Available Copies */}
        <div>
          <input
            type="number"
            placeholder="Available Copies"
            {...register("available", {
              required: "Available copies required",
              min: { value: 0, message: "Cannot be negative" }
            })}
            className="w-full border p-2 rounded"
          />
          {errors.availableCopies && (
            <p className="text-red-500">{errors.availableCopies.message}</p>
          )}
        </div>

        {/* Year */}
        {/* <div>
          <input
            type="number"
            placeholder="Year"
            {...register("year", {
              required: "Year is required",
              min: { value: 1000, message: "Invalid year" }
            })}
            className="w-full border p-2 rounded"
          />
          {errors.year && <p className="text-red-500">{errors.year.message}</p>}
        </div> */}

        {/* Description */}
        {/* <div>
          <textarea
            placeholder="Description"
            {...register("description")}
            className="w-full border p-2 rounded"
          />
        </div> */}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Book
        </button>

      </form>
    </div>
  );
};

export default AddBook;