import React from "react";
import { use } from "react";
import { NavLink } from "react-router";
const categoryPromise =fetch("/categories.json").then((res)=>res.json());

const Categories =()=>{
   const categories = use(categoryPromise);

    return (
    <div>
        <h2 className="font-bold text-center ">All Categories ({categories.length})</h2>
        

        <div className="grid grid-cols-1 mt-5 gap-3 ">
            {
                categories.map(category => <NavLink to={`/category/${category.id}`} key={category.id} 
                className={"btn bg-white border-0 hover:bg-base-200 font-semibold text-gray-400"}>{category.name}</NavLink>)
            }
             </div> 
        </div>
    )
}


export default Categories;