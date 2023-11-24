
import './App.css';
import Music from './music';

import Musicbox from './musicbox';
import { useState } from 'react';






function App() {


  // const data1={
  //   image: "beast.png",
  //   src:"Beast Mode.mp3"

  // }

  const data=[
    {
      id:1,
      name:"Beast Mode",
      image: "beast.png",
      music:"Anirudh",
      src:"Beast Mode.mp3"

    },
    {
      id:2,
      name:"Naa Ready",
      image: "leo.png",
      music:"Anirudh",
      src:"Naa Ready.mp3"

    },
    {
      id:3,
      name:"Mersal Arasan",
      image: "mersal.png",
      music:"A.R Rahman",
      src:"Mersal-Arasan.mp3"

    },
    {
      id:4,
      name:"Top Tucker",
      image: "sarkar.png",
      music:"A.R Rahman",
      src:"Top-Tucker.mp3"

    },
    {
      id:5,
      name:"Vaathi Coming",
      image: "master.png",
      music:"Anirudh",
      src:"Vaathi-Coming.mp3"

    },
    {
      id:6,
      name:"Tiger Ka Hukum",
      image: "jailer.png",
      music:"Anirudh",
      src:"Hukum.mp3"

    },
    {
      id:7,
      name:"Annatha Sethi",
      image: "master.png",
      music:"Anirudh",
      src:"Annathe-Sethi.mp3"

    },
    {
      id:8,
      name:"Karuthavlam",
      image: "jailer.png",
      music:"Anirudh",
      src:"Karuthavanlaam.mp3"

    },
    {
      id:9,
      name:"Ellapugazhum",
      image: "beast.png",
      music:"Anirudh",
      src:"Ellaappugazhum.mp3"

    },
    {
      id:10,
      name:"Nakku Mukka",
      image: "mersal.png",
      music:"Anirudh",
      src:"Nakka-Mukka.mp3"

    },
    {
      id:11,
      name:"Ethir Neechal",
      image: "sarkar.png",
      music:"Anirudh",
      src:"Ethir-Neechal.mp3"

    },
    {
      id:12,
      name:"Ethirthu Nil",
      image: "leo.png",
      music:"Anirudh",
      src:"Edhirthu-Nil.mp3"

    }


  ]

  // const [State,setState] = useState(false)


  const [Song,setSong] = useState(1)

  function GetSong(id) {
    // setState(true)

    

    setSong((Selected)=>( id === Selected ? null : id))


   

    
  }


  // console.log(State)


  function HandlePrevious(id){
    if(id>1){
      id=id-1;
      setSong(id)
    }
  }

  function HandleNext(id){
    if(id<12){
      id=id+1;
      setSong(id)
    }
  }



  const SongGot= data.find((data)=> data.id === Song)



  console.log(SongGot)






  return (

    <div className='main'>
      <div className='left'>
        
        <div className="logo" ><img  className='logo-img' src="logo.png" alt="logo"/></div>
        <div className='left-down'>
            <p className='home'><span className='home-icon'>🏠</span> Home</p>
            <p className='home'><span className='home-icon'>🔍</span> Search</p>
        </div>

      </div>


      <div className='right'>

        <div className='right-up'>

          

          <Musicbox  GetSong={GetSong} data={data} />

          
        </div>

        

        <div className='right-down'>
          
         

          {/* {Song ?  
          <Music HandlePrevious={HandlePrevious} HandleNext={HandleNext} SongGot={SongGot}/> 
          :<Music SongGot={data1}/> } */}


          <Music HandlePrevious={HandlePrevious} HandleNext={HandleNext} SongGot={SongGot}/>


        </div>

      </div>






    </div>
    











  );
}

export default App;
