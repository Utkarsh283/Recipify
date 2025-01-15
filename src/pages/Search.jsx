// SearchResults.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const { recipes } = location.state || { recipes: [] }; // Ensure recipes is defined

  return (
    <div className="min-h-screen bg-purple-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-purple-800 mb-6">Search Results</h1>

        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {recipe.title}
                  </h2>
                  <Link
                    to={`https://spoonacular.com/recipes/${recipe.title.replaceAll(
                      ' ', '-'
                    )}-${recipe.id}`}
                    target="_blank"
                    className="mt-2 inline-block text-purple-600 hover:underline"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No recipes found. Try searching for something else!</p>
        )}

        <div className="mt-6">
          <Link
            to="/"
            className="text-purple-600 hover:underline text-sm"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
