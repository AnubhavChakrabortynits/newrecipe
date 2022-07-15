
import './App.css';
import { useState} from 'react';
import Popular from './components/Popular';


function App() {
const [value,setValue]=useState("");
const [food,setFood]=useState()


const handlecsearch=async(c,m,d)=>{
  
  const data=await fetch(`https://api.edamam.com/search?q=${value}&from=0&to=100&dishType=${d}&mealType=${m}&cuisineType=${c}&app_id=c506cb45&app_key=785aa09ed1af4b122448dd6aff9f24b9`)
  const rdata=await data.json()
  setFood(rdata.hits);
 
  console.log(rdata.hits)

}
const handleChange=(e)=>{
  setValue(e.target.value)
}

const handleClick=async()=>{
  console.log(value)
  const data=await fetch(`https://api.edamam.com/search?q=${value}&from=0&to=100&$app_id=c506cb45&app_key=785aa09ed1af4b122448dd6aff9f24b9`)
    const rdata=await data.json()
    setFood(rdata.hits);
  
    console.log(rdata.hits)
    
  }
  return (
    <div className="App">
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-text">
      <img src="https://cdn-icons-png.flaticon.com/128/3075/3075977.png"  alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      &nbsp;RecipeNinja
    </span>
  </div> 
</nav>


{/*Sea,rch bar */}

<div className="container my-2">

<div className="row my-2">
<div className="searchcont">
<i className="fa fa-search fa-2x mx-1 " onClick={handleClick}></i>
<input type="text" placeholder="search" id="searchtext" value={value} onChange={handleChange} style={{height:"7vh"}} />
</div>
</div>

<div className="row secsearch">
 <div className="col-12">
  <h3 style={{fontWeight:"bolder",fontFamily:"sans-serif",textShadow:"1px 1px 2px white"}}>Search By Category:-</h3>
 </div>
</div>
<div className="row my-2 secsearch">
<div className="mx-auto col-md-3 my-2">
  <label htmlFor="mealtype">Meal:</label><select id="mealtype">
  
    <option value={"Breakfast"}>Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Snack">Snack</option>
    <option value="Teatime">Teatime</option>
  </select>
</div>
<div className="mx-auto col-md-3 my-2">
<label htmlFor="dishtype">Dish:</label><select id="dishtype" >
    <option value="alcohol cocktail">Alcohol Cocktail</option>
    <option value="biscuits and cookies">Biscuit and Cookies</option>
    <option value={"Bread"}>Bread</option>
    <option value="cereals">Cereals</option>
    <option value="condiments and sauces">Condiments and Sauces</option>
    <option value="desserts">Desserts</option>
    <option value="drinks">Drinks</option>
    <option value="soup">Soup</option>
    <option value="starter">starter</option>
    <option value="seafood">Seafood</option>
    <option value="sandwiches">Sandwiches</option>
    <option value="pasta">Pasta</option>
    <option value="salad">Salad</option>
    <option value="main course">Main Course</option>
    <option value="pastry">Pastry</option>
    <option value="pies and tarts">Pies and Tarts</option>
    <option value="sweets">Sweets</option>
    <option value="ice cream and custard">Ice Cream and Custard</option>
   
 
  </select>
</div>


<div className="mx-auto col-md-3 my-2">
<label htmlFor="cuisinetype">Cuisine:</label><select id="cuisinetype">

    <option value={"american"}>American</option>
    <option value="asian">Asian</option>
    <option value="british">British</option>
    <option value="caribbean">Caribbean</option>
    <option value="central europe">Central Europe</option>
    <option value="eastern europe">Eastern Europe</option>
    <option value="chinese">Chinese</option>
    <option value="french">French</option>
    <option value="indian">Indian</option>
    <option value="italian">Italian</option>
    <option value="japanese">Japanese</option>
    <option value="mediterranean">Mediterranean</option>
    <option value="mexican">Mexican</option>
    <option value="middle eastern">Middle Eastern</option>
    <option value="nordic">Nordic</option>
    <option value="south american">South American</option>
    <option value="south east asian">South East Asian</option>

  </select>


</div>
</div>

<div className="row secsearch">
<div className="col-md-6 mx-auto my-3">
  <button className='btn btn-dark btn-block w-100' onClick={()=>{
  console.log(typeof(document.getElementById('cuisinetype').value))
  console.log(document.getElementById('mealtype').value)
  console.log(document.getElementById('cuisinetype').value)
  handlecsearch(document.getElementById('cuisinetype').value,document.getElementById('mealtype').value,document.getElementById('dishtype').value);
}}>Search..</button>
</div>
</div>
 
      </div>

<Popular food={food}/>
    </div>
  );
}

export default App;


