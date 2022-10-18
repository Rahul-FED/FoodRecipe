// we add database for edmam website 
import React,{useState} from 'react'
import Keys from './Keys'
import Axios from 'axios'
import './App.css'
import RecipeTile from './RecipeTile'

const App = () => {
  const [query, setquery] = useState("")
  const [recipes, setrecipes] = useState([])
  // const [healthLabels, sethealthLabels]= useState("vegetarian")

  const YOUR_APP_ID = `8a37f3eb`;
const YOUR_APP_KEY = "d20b7dac486a23bd6f248b1ccc04b669";

 var url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;


async function getRecipe(){
   var result=await Axios.get(url);
   setrecipes(result.data.hits)
   console.log(result.data);
}
const onSubmit=(e)=>{
  e.preventDefault();
  getRecipe();
};


  return (
    <div className='app'>
      <h1>FOod ReCipe CoUnter🍴🥗</h1>
      <form className='app__searchForm' onSubmit={onSubmit}>
        <input type="text"
        className='app__input'
        placeholder='Enter Your Dish..' 
          value={query} onChange={(e)=>setquery(e.target.value)}
        />
        <input  className='app__submit' type="submit" value="Search" />
        {/* <select className="app__healthLabels" >
          <option onClick={()=>sethealthLabels("vegan")}>vegan</option>
          <option onClick={()=>sethealthLabels("vegetarian")}>vegetarian</option>
          <option onClick={()=>sethealthLabels("paleo")}>paleo</option>
          <option onClick={()=>sethealthLabels("dairy-free")}>dairy-free</option>
          <option onClick={()=>sethealthLabels("egg-free")}>egg-free</option>
          <option onClick={()=>sethealthLabels("low-sugar")}>low-sugar</option>
          <option onClick={()=>sethealthLabels("wheat-free")}>wheat-free</option>
        </select> */}
      </form>
      <div className='app__recipes'>
       {recipes.map(recipe=>{
        return <RecipeTile recipe={recipe}/>
       })}
      </div>
    </div>
  )
}

export default App
