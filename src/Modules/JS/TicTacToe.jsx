import { useState } from 'react';
import '../CSS/TicTacToe.scss';

    function Square(props) {
        return (
            <button className="square" 
            onClick={() => {setSquares('X'); console.log(props.value)}}>
                {props.value}
            </button>
        );
    }
    function renderSquare(props) {
        return <Square value={props} />;
    }
    

    function Board() {
        
        const [squares , setSquares] = useState(Array(9).fill(""));

        const status = 'Next player: X';

    return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
        {renderSquare(squares[0],)}
        {renderSquare(squares[1])}
        {renderSquare(squares[2])}
        </div>
        <div className="board-row">
        {renderSquare(squares[3])}
        {renderSquare(squares[4])}
        {renderSquare(squares[5])}
        </div>
        <div className="board-row">
        {renderSquare(squares[6])}
        {renderSquare(squares[7])}
        {renderSquare(squares[8])}
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
export default Game;