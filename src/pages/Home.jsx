import React,{useEffect, useState} from "react";
import MemeCard from "../components/Card";
import {getAllMemes} from "../api/memes"

const HomePage=()=>{

    const [memes,setMemes]=useState([]);

    useEffect(()=>{
        getAllMemes().then((response)=>setMemes(response.data.memes));
    },[])

    return(
        <div className="row">
            {
                memes.map((el)=>(
                <MemeCard img={el.url} title={el.name}/>
            ))}
        </div>
    )
}

export default HomePage;