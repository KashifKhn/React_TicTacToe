import React, { useEffect, useState } from 'react'
import Icon from './Icon'
import xIcon from '../assets/x-icon.png'
import oIcon from '../assets/o-icon.png'
import { nanoid } from 'nanoid'

const Board = (props) => {
    const { winner, setWinner } = props;
    const [playerTurn, setPlayerTurn] = useState(true);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [hoveredCell, setHoveredCell] = useState(null);
    const [notAllowed, setNotAllowed] = useState(false);
    


    useEffect(() => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        let isDraw = true;

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                isDraw = false;
                break;
            }
        }

        if (isDraw && !board.includes(null))
            setWinner('Draw');
        if(winner)
            setNotAllowed(true);

    }, [board]);


    function resetBoard() {
        setBoard(Array(9).fill(null));
        setHoveredCell(null);
        setPlayerTurn(oldTurn => !oldTurn);
        setWinner(null);
    }


    const handleOnClick = (index) => {
        if (board[index] === null && !winner) {
            const newBoard = [...board];
            newBoard[index] = playerTurn ? 'X' : 'O';
            setBoard(newBoard);
            setPlayerTurn(oldTurn => !oldTurn);
        }
    }

    const handleCellHover = (index) => {
        if (board[index] === null && !winner) {
            setHoveredCell(index);
        }

        if(board[index] !== null || winner)
            setNotAllowed(true);
    }
    const handleCellLeave = () => {
        setHoveredCell(null);
        setNotAllowed(false);
    }

    return (
        <div className='flex flex-col items-center justify-center' >
            <div className='w-[420px] h-[420px] max-sm:w-[320px] max-sm:h-[320px] flex items-center justify-center bg-white rounded-md'>
                <section className='grid grid-cols-3 gap-4 '>
                    {board.map((cell, index) => (
                        <div
                            key={nanoid()}
                            onClick={() => handleOnClick(index)}
                            onMouseEnter={() => handleCellHover(index)}
                            onMouseLeave={handleCellLeave}
                            className={`bg-gray-200 w-[7rem] h-[7rem] max-sm:w-[5rem] max-sm:h-[5rem] rounded-lg flex items-center justify-center shadow-3xl shadow-slate-950 ${notAllowed ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            {cell === 'X' && <Icon notAllowed={notAllowed} icon={xIcon} />}
                            {cell === 'O' && <Icon notAllowed={notAllowed} icon={oIcon} />}
                            {hoveredCell === index && !cell && (
                                <img
                                    className='w-[5rem] h-[5rem] transition-opacity opacity-30 duration-700 ease-in-out'
                                    src={playerTurn ? xIcon : oIcon}
                                    alt={`Player ${playerTurn ? 'X' : 'O'}`}
                                />
                            )}
                        </div>
                    ))}
                </section>
            </div>
            {
                winner &&
                <button className='bg-blue-600 px-8 py-2  my-2 rounded-lg text-white ' onClick={resetBoard}>Reset</button>
            }
        </div >
    )
}

export default Board
