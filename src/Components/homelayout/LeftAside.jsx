import React
, { Suspense } from "react";
import Categories from "../Categories";

 const LeftAside =()=>{
    return(
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
            <Categories></Categories>
        </Suspense>
        
    )
 }

 export default LeftAside;