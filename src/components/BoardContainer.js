import React from 'react'
import Board from './Board';
import KeyBoard from './keyboard';

class BoardContainer extends React.Component {
    constructor(props){
        
    }
    render() {
        return (
            <div>
                <Board />
                <KeyBoard />
            </div>
        )
    }
}