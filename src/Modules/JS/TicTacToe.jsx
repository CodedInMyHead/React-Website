import { useState } from 'react';
import '../CSS/TicTacToe.scss';

let gameState = true;
let dead = false;
let showWinner = false;

function Square(props) {
    return ( 
        <button className="square" 
        onClick={() => {
            let temp = props.obj;

            if(!(temp[props.val] === 'O' || temp[props.val] === 'X')) {

                gameState ? temp[props.val] = 'X' : temp[props.val] = 'O' ;
                gameState ? gameState = false : gameState = true;
                props.set.t = temp;

                checkOver(temp);
            }
        }
        }>
            { props.obj[props.val] }
        </button>
    );
}
function renderSquare(arr, props, setter) {
    return <Square obj={arr} val={props} set={(t) => setter(t)}/>;
}

function getState(){
    if(showWinner){
        
        if(dead){
            buttonsON(false);
            if(!gameState){
                return 'Player 1 Won';
            } else 
                return 'Player 2 Won';
        } else {
            return 'Draw';
        }
    } else {
        if(gameState){
            return 'Next player: 1 (X)'
        } else {
            return 'Next player: 2 (O)'
        }
    }
}


function Board({arr, setSquares}) {
return (
    <div>
        <div className="status">{getState()}</div>
        <div className="board-row">
        {renderSquare(arr, 0, setSquares)}
        {renderSquare(arr, 1, setSquares)}
        {renderSquare(arr, 2, setSquares)}
        </div>
        <div className="board-row">
        {renderSquare(arr, 3, setSquares)}
        {renderSquare(arr, 4, setSquares)}
        {renderSquare(arr, 5, setSquares)}
        </div>
        <div className="board-row">
        {renderSquare(arr, 6, setSquares)}
        {renderSquare(arr, 7, setSquares)}
        {renderSquare(arr, 8, setSquares)}
        </div>
    </div>
    );
}
  
const Game = () => {

    const [squares , setSquares] = useState(Array(9).fill(""));

    function removeData() {
        gameState = true;
        dead = false;
        showWinner = false;
        setSquares(Array(9).fill(""))
        buttonsON(true);
    }

    return (
        <div className="game">
            <div className="game-board">
            <Board arr={squares} setter={setSquares}/>
            </div>
            <div className="game-info">
            <div>
                {
                    showWinner ? <ResetButton onChange={removeData} /> : <></>
                }
            </div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

function checkOver(arr){ 
    if(checkThree(arr)){

    };
    if(checkAllNine(arr)){

    }
}

function checkThree(arr){
    let z = 'O';
    for(let i = 0;i<7;i+=3){
        if((arr[i] === z ) && (arr[i+1] === z) && (arr[i+2] === z)){
            dead = true;
        }
    }
    for(let i = 0;i<3;i++){
        if((arr[i] === z ) && (arr[i+3] === z) && (arr[i+6] === z )){
            dead = true;
        }
    }
    if((arr[0] === z) && (arr[4] === z) && (arr[8] === z)){
        dead = true;
    }
    if((arr[2] === z) && (arr[4] === z) && (arr[6] === z)){
        dead = true;
    }
    z = 'X';
    for(let i = 0;i<7;i+=3){
        if((arr[i] === z ) && (arr[i+1] === z) && (arr[i+2] === z)){
            dead = true;
        }
    }
    for(let i = 0;i<3;i++){
        if((arr[i] === z ) && (arr[i+3] === z) && (arr[i+6] === z )){
            dead = true;
        }
    }
    if((arr[0] === z) && (arr[4] === z) && (arr[8] === z)){
        dead = true;
    }
    if((arr[2] === z) && (arr[4] === z) && (arr[6] === z)){
        dead = true;
    }
    if(dead){
        showWinner = true;
        return true;
    } else {
        return false;
    }
}

function checkAllNine(arr){
    var c = 0;
    for(let i = 0; i <= 8;i++){
        if(arr[i] === 'X')
            c++;
        if(arr[i] === 'O')
            c++;
    }
    if(c === 9){     
        showWinner = true;
        return true;
    } else {
        return false;
    }
}

const ResetButton = ({onChange}) => {
    return(
        <button type="submit" onClick={() => onChange()}>Reset</button>
    ); 
}

const buttonsON = (p) => {
    let buttons = document.getElementsByClassName('square');
    for(let button of buttons) {
        p ? button.removeAttribute('disabled'): button.setAttribute('disabled', 'true');
    }
}

export default Game;