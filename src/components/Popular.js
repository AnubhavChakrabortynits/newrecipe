import React from 'react'


export default function Popular(props) {

const modall=(id)=>{
  document.getElementById(`${id}`).showModal();
  
}

  
  return (
    <div className='container displaycont'>
      <div className="row">

      {props.load==="t"?<div class="spinner-border" role="status" style={{margin:"auto"}}>
  <span class="visually-hidden">Loading...</span>
</div>:"" }


      <div style={{display:"flex",justifyContent:"center",fontSize:"3rem",fontWeight:"900",textShadow:"1px 1px 1px white"}}>
     
     {
     props?.food?.length===0?"No results":""
     }
     </div>
      {props?.food?.map((item,i)=>{
    
        return ("nodata" && 
        
        <div className="col-md-3 mx-auto rcont bg-warning my-3" style={{padding:"0px",boxShadow:"1px 1px 1px black,-1px 1px 2px black"}}>
          
          <div className="card p-0 mx-auto" style={{width:"100%",height:"100%"}}>
          <div className="imgwrap" style={{height:"170px"}} >
          
    <img style={{width:"100%",height:"100%"}} src={item.recipe.image} alt="no" />
    </div>
    <div className="card-body" style={{textAlign:"left"}}>
      <p className="card-text  my-1"><strong>Recipe Name-{item.recipe.label}</strong></p>
      <p className="card-text my-1"><strong>Cuisine Type-{item.recipe.cuisineType[0]}</strong></p>
      <p className="card-text my-1"><strong>Meal Type-{item.recipe.mealType[0]}</strong></p>
    </div>
    
    <dialog id={`${i}`} style={{width:"50rem"}}>
    <div className="container-fluid table-responsive" style={{width:"100%"}} >
    <h3><strong style={{textAlign:"centre",fontWeight:"bolder",fontFamily:"cursive"}}>{item.recipe.label}</strong></h3>
    <table className="table table-striped table-dark mt-3" style={{width:"100%"}}>
    <thead>
    <tr>
    <th scope="col">Ingredient</th>
    <th scope='col'>Quantity</th>
    <th scope='col'>Weight</th>
    <th scope='col'>Measure</th> 
    <th scope='col'>Ingredient Category</th>
    </tr>
    </thead>
    <tbody className='table-warning'>
    {item.recipe.ingredients.map((ig)=>{
return (



<tr>
<td >{ig.text}</td>
<td >{ig.quantity}</td>
<td>{ig.weight.toFixed(2)}&nbsp;grams</td>
<td>{ig.measure}</td>
<td>{ig.foodCategory}</td>
</tr>

  

)
    })}
    </tbody>
    </table>
    
    <br/>
    <h4><strong style={{fontFamily:"cursive"}}>Info:-</strong></h4>
    <table className='table table-dark table-striped '>
      <thead className='table-dark'>
      <tr>
<th scope="col">Calories</th>
<th scope="col">Total Weight</th>
<th scope="col">Yield</th>
<th scope="col">Cooking Time</th>
</tr>
      </thead>
   
      <tbody className='table-warning'>
      <tr>
        <td >{item.recipe.calories.toFixed(2)}</td>
        <td>{item.recipe.totalWeight.toFixed(2)}grams</td>
        <td >{item.recipe.yield}</td>
        <td >{item.recipe.totalTime} &nbsp;mins</td>
        </tr>
      </tbody>
      
    </table>
    
    <div className="w-100 mx-auto my-2" id="mybutton">
    <button   className='btn btn-danger' style={{width:"100%"}} onClick={()=>{
      document.getElementById(`${i}`).close()
    }}>Close</button>
    </div>
    
    </div>

  
    </dialog>
 <button className='btn btn-outline-warning btn-block' onClick={()=>{
modall(i);
 }}>Ingredients</button>

    <a href={item.recipe.url} className='btn btn-outline-danger btn-block' >Full Recipe</a>
  </div>
          </div>
        
        )
      },)}




      </div>
    </div>
  )
}
