import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const recipeCache = { recipe: null };

function RecipeCard() {
    const [recipeData, setRecipeData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getRandomRecipe() {
            if (!recipeCache.recipe) {
                try {
                    const apiKey = '5ff6abdab4a6416c9be1acb0be2dc8e8';
                    const resp = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
                    recipeCache.recipe = resp.data.recipes[0];
                    setRecipeData(recipeCache.recipe);
                } catch (error) {
                    console.error(error);
                }
            } else {
                setRecipeData(recipeCache.recipe);
            }
        }

        getRandomRecipe();
    }, []);

    const handleButtonClick = () => {
        navigate('/Recipify/recipe', { state: { recipe: recipeData } });
    };

    const summaryWithoutHtml = recipeData?.summary
        ? recipeData.summary.replace(/<[^>]*>/g, '')
        : '';

    return (
        <div className="max-w-lg hover:shadow-2xl hover:shadow-gray-600 bg-white border border-gray-200 rounded-lg shadow dark:bg-purple-800 dark:border-purple-700 ml-5">
            <a href="#">
                <div className='border  border-purple-800 rounded-lg px-5 py-5'>
                    <img className="rounded-lg" src={recipeData?.image} alt="" />
                </div>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {recipeData?.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-300">{summaryWithoutHtml}</p>
                <button
                    onClick={handleButtonClick}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Let&apos;s make it
                </button>
            </div>
        </div>
    );
}

export default RecipeCard;
