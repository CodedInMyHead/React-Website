import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Game from './Modules/JS/TicTacToe.jsx'

function reDraw(){
  ReactDOM.render(
    <>
    <Game />
    </>,
    document.getElementById('root')
  );
}

setInterval(reDraw, 100);