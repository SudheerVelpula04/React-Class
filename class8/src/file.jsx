import Nbk from "./assets/nbk.jpeg"
import Video from "./assets/video.mp4"
import React from "react"
import data from "./components/exports/data.json"

// it is inside the assets folder
export function File(){
    return(
        <>
            <img src="./logo.jpg" alt="" />
            <img src={Nbk} alt="" />
            <video controls>
                <source src={Video} />
            </video>
            {
                console.log(data.Products[0].name)
            }
        </>
    )
}