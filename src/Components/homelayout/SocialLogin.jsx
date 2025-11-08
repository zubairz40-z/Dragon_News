import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SocialLogin = ()=>{
    return(
        <div>
            <h2 className="font-bold mb-5">Login With</h2>
            <div className="space-y-3"> 
                <button className="btn btn-secondary btn-outline w-full"><FaGoogle /> Login with Google</button>
                <button
                className="btn btn-outline btn-primary w-full"><FaGithub /> Login with Github</button>
                
            </div>
        </div>
    )
}

export default SocialLogin;