import React from "react";
import Cards from "./Cards"; // import the Cards component

const list = [
  {
    id: 1,
    name: "John Doe",
    title: "Full Stack Developer",
    price: 0,
    category: "free",
    image: "https://picsum.photos/200/301",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Frontend Developer",
    price: 0,
    category: "free",
    image: "https://picsum.photos/200/302",
  },
  {
    id: 3,
    name: "Richard Brown",
    title: "Backend Developer",
    price: 500,
    category: "free",
    image: "https://picsum.photos/200/303",
  },
  {
    id: 4,
    name: "David Smith",
    title: "DevOps Engineer",
    price: 600,
    category: "free",
    image: "https://picsum.photos/200/304",
  },
  {
    id: 5,
    name: "Michael Davis",
    title: "Artificial Intelligence Engineer",
    price: 800,
    category: "free",
    image: "https://picsum.photos/200/305",
  },
  {
    id: 6,
    name: "John Michiel",
    title: "Data Science",
    price: 800,
    category: "free",
    image: "https://picsum.photos/200/305",
  }
];

function FreeBook() {
  const freeBooks = list.filter((book) => book.category === "free");

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mb-6">
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
          non suscipit, iure neque earum?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {freeBooks.map((book) => (
          <Cards key={book.id} item={book} /> // Using Cards component here
        ))}
      </div>
    </div>
  );
}

export default FreeBook;



 // freeBooks.map((book) => ... ): map goes through each book object in the freeBooks array (which is a list of books filtered by category). For each book, it executes the code inside the arrow function (book) => (...code...).

 // filter creates a new array containing only the elements that meet a certain condition.