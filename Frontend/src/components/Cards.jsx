import React from "react";

function Cards({ item }) {
  return (
    <div className="bg-base-100 shadow-lg hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white rounded-lg overflow-hidden m-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-5"> {/* Added padding for better spacing */}
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          {item.name}
          <span className="badge badge-secondary ml-2 text-xs">{item.category}</span>
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {item.title}
        </p>
        <div className="flex justify-between items-center">
          <span className="badge badge-outline text-xs p-1">${item.price}</span>
          <button className="text-xs px-4 py-2 rounded-full border border-gray-300 hover:bg-pink-500 hover:text-white transition-colors duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
