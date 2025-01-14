import React from 'react'

import RecipeCard from '../components/RecipeCard'


function Home() {

    

  return (
    <div className='bg-purple-100'>
    <div className="flex flex-wrap justify-evenly gap-4 pb-10" >
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        
    </div>
    <div className="flex flex-wrap justify-evenly gap-4 pb-10">
    <RecipeCard/>
    <RecipeCard/>
    <RecipeCard/>
    
</div>
</div>
    
  )
}

export default Home