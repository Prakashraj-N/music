function Music({SongGot,HandlePrevious,HandleNext}){
    return(
        <div className="music">

            <div className="prev-img"><img className="pos-img" src={SongGot.image} alt="poster"/></div>

            <div className="track">
                
                <div className="audio"><audio src={SongGot.src} controls  autoPlay/></div>

                <div className="cont-btns">
                    <button onClick={()=>HandlePrevious(SongGot.id)} className="btns" >⏮️</button>
                    
                    <button onClick={()=>HandleNext(SongGot.id)} className="btns" >⏭️</button>

                
                
                </div>
                
            
            </div>
        </div>

    )
}

export default  Music;