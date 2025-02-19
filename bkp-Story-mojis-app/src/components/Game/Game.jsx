
import './Game.css'
import { FcHeadset } from "react-icons/fc";

function Game() {
    var FacesDados = []
    return (
        <div className='container-main-content'>
            <div className='dado-style-content'>
            <FcHeadset />
            </div>
            <div className='container-btn'>
                <button onClick={() => {}} className='style-btn'>ROLL AGAIN</button>
            </div>
        </div>
    )
}

export default Game
