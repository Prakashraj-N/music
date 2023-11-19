function Music({SongGot,HandlePrevious,HandleNext}){
    return(
        <div className="music">

            <img className="pos-img" src={SongGot.image} alt="poster"/>

            <div className="track">
                
                <audio src={SongGot.src} controls  autoPlay/>

                <div className="cont-btns">
                    <button onClick={()=>HandlePrevious(SongGot.id)} className="btns" >⏮️</button>
                    
                    <button onClick={()=>HandleNext(SongGot.id)} className="btns" >⏭️</button>

                
                
                </div>
                
            
            </div>
        </div>

    )
}

export default  Music;