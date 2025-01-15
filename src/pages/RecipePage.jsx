import React from 'react'
import { useLocation } from 'react-router-dom';

function extractIngredients(extendedIngredients) {
  return extendedIngredients.map(ingredient => ingredient.name).join(', ');
}

function RecipePage() {
  const location = useLocation();
  const { recipe } = location.state || {};
  const ingredients = extractIngredients(recipe.extendedIngredients);

  if (!recipe) {
    return <div>No recipe data available!</div>;
  }

  const summaryWithoutHtml = recipe?.summary
        ? recipe.summary.replace(/<[^>]*>/g, '')
        : '';

  return (
    <div className="flex flex-wrap items-center justify-center bg-purple-100 ">

      <div className="p-4 w-full md:w-1/2 text-center">
        <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="mb-4 mx-auto rounded-lg" />
        <h3 className='text-lg font-semibold' >Summary</h3>
        <p className="text-gray-700 mb-4">{summaryWithoutHtml}</p>
        <h2 className='text-lg font-semibold'>Ingredients</h2>
        <p className="text-gray-700 mb-4"> {ingredients}</p>
        <h2 className='text-lg font-semibold'>Instructions</h2>
        <p className="text-gray-700 mb-4"> {recipe.instructions}</p>
        <button className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded' onClick={() => window.open(recipe.sourceUrl, '_blank')} >Read More</button>
      </div>
      
    </div>
  );
}

export default RecipePage;

