
import { useState } from 'react';
import './Game.css'
import {
    GiAxolotl,
    GiCapybara,
    GiCat,
    GiCirclingFish,
    GiCrocJaws,
    GiCruiser,
    GiCrownedSkull,
    GiCurledTentacle,
    GiCzSkorpion,
    GiElephant
} from "react-icons/gi";

function Game() {
    const icons = [
        <GiAxolotl />, <GiCapybara />, <GiCat />,
        <GiCirclingFish />, <GiCrocJaws />, <GiCruiser />,
        <GiCrownedSkull />, <GiCurledTentacle />, <GiCzSkorpion />,
        <GiElephant />
    ]

    const [icon, setIcon] = useState([<GiAxolotl />, <GiCapybara />, <GiCat />])

    function TrocarIcone() {
        const newIcons = icons.map((() => {
            const randomIcon = Math.floor(Math.random() * icons.length)
            return icons[randomIcon];
        }));
        setIcon(newIcons);

    }
    return (
        <div className='container-main-content'>
            <div className='container-cubes'>
                <div className='cube-style-content icon-size'>{icon[0]}</div>
                <div className='cube-style-content icon-size'>{icon[1]}</div>
                <div className='cube-style-content icon-size'>{icon[2]}</div>
            </div>
            <div className='container-btn'>
                <button onClick={TrocarIcone} className='style-btn'>ROLL AGAIN</button>
            </div>
        </div>
    )
}

export default Game
