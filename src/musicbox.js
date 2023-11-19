
// import { useState } from "react";

function Musicbox({data,GetSong,State}){

    
    return(

        data.map((data)=> {

        return(
        <div className="box">

            <img  className="box-img" src={data.image} alt="box"/>

            <div className="music-details">
                <p className="p" >  🎧 {data.name}</p>

                <p className="p"> 🎵 {data.music}</p>


            
            </div>

            {/* <button onClick={()=>GetSong(data.id)} className={State ? "play-btn-1" : "play-btn"}>▶️ play</button> */}

            <button onClick={()=>GetSong(data.id)} className="play-btn">▶️ play</button>

        </div>
        )
        
    
        })

    

        
    )
}


export default  Musicbox;