import React from 'react';
import '../css/keyboard.css';
import KeyboardActions from './KeyboardActions'


const Keyboard = (props) => {

    const keyRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keyRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "l"]
    const keyRow3 = ["Z", "X", "C", "V", "B", "N", "M"]

    return (
        <div id = "keyboard">
            <div className='r1'>
                {keyRow1.map((key, index) => {
                    return <keyboard key = {index} onKeyPressed = {props.onKeyPressed} text = {key} />
                })}
            </div>
            
            <div className='r2'>
                {keyRow2.map((key, index) => {
                    return <keyboard key = {index} onKeyPressed = {props.onKeyPressed} text = {key} />
                })}
            </div>
            
            <div className='r3'>
                {keyRow3.map((key, index) => {
                    return <keyboard key = {index} onKeyPressed = {props.onKeyPressed} text = {key} />
                })}
            </div>
        </div>
    )
}

export default Keyboard