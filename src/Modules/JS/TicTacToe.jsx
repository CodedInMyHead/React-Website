import { useState } from 'react';
import '../CSS/TicTacToe.scss';

    let gameState = true;

    function Square(props) {
        return (
            <button className="square" 
            onClick={() => {
                let temp = props.obj;

                if(!(temp[props.val] === 'O' || temp[props.val] === 'X')) {
                    gameState ? temp[props.val] = 'X' : temp[props.val] = 'O' ;
                    gameState ? gameState = false : gameState = true;
                    props.set(temp);

                    checkOver(temp);
                }
            }
            }>
                { props.obj[props.val] }
            </button>
        );
    }
    function renderSquare(squares, props,setter) {
        return <Square obj={squares} val={props} set={setter}/>;
    }
    
    function getState(){
        if(gameState){
            return 'X'
        } else {
            return 'Y'
        }
    }
    

    function Board() {
        
        const [squares , setSquares] = useState(Array(9).fill(""));


        

        const status = 'Next player: '+{ getState };

    return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
        {renderSquare(squares, 0, setSquares)}
        {renderSquare(squares, 1, setSquares)}
        {renderSquare(squares, 2, setSquares)}
        </div>
        <div className="board-row">
        {renderSquare(squares, 3, setSquares)}
        {renderSquare(squares, 4, setSquares)}
        {renderSquare(squares, 5, setSquares)}
        </div>
        <div className="board-row">
        {renderSquare(squares, 6, setSquares)}
        {renderSquare(squares, 7, setSquares)}
        {renderSquare(squares, 8, setSquares)}
        </div>
    </div>
    );
}
  
function Game() {
    return (
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

    function checkOver(arr){
        checkAllNine(arr);
        if(checkThree(arr)){
            console.log('won');
        };
    }

    function checkThree(arr){
        let dead = false;
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
            console.log('Over'); // Working!
        }
    }


export default Game;