import React from 'react'
import { useState } from 'react';
import Board from './Board';
import Keyboard from './Keyboard';

const BoardContainer= () => {
    const [key, setKey] = useState("")

    let handleKeyPress = (text) => {
        console.log(text)
        alert('Container received: ${text}')
        setKey(text)
    }
    render() {
        return (
            <div>
                <Board />
                <Keyboard />
            </div>
        )
    }
}

export default BoardContainer