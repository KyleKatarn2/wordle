import React from 'react'
import { useState } from 'react';
import Board from './Board';
import Keyboard from './Keyboard';
import '../css/game.css';

const BoardContainer= () => {
    const [key, setKey] = useState("")

    let handleKeyPress = (text) => {
        console.log(text)
        alert('Container received: ${text}')
        setKey(text)
    }

    return (
            <div className='game'>
                <Board pressedKey= {key} />
                <Keyboard onKeyPressed = {handleKeyPress} />
            </div>
    )
}

export default BoardContainer