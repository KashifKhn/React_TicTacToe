import React, { useEffect, useState } from 'react'
import Button from './Button'
import xIcon from '../assets/x-icon.png'
import oIcon from '../assets/o-icon.png'

const Board = (props) => {
    const { winner, setWinner } = props;
    const [player, setPlayer] = useState(0);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [hoveredCell, setHoveredCell] = useState(null);


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
    
        if (isDraw && !board.includes(null)) {
            setWinner('Draw');
        }
    }, [board]);
    

    function resetBoard() {
        setBoard(Array(9).fill(null));
        setPlayer(0);
        setWinner(null);
    }


    const handleOnClick = (index) => {
        if (board[index] === null && !winner) {
            const newBoard = [...board];
            newBoard[index] = player === 0 ? 'X' : 'O';
            setBoard(newBoard);
            setPlayer(player === 0 ? 1 : 0);
        }
    }

    const handleCellHover = (index) => {
        if (board[index] === null && !winner) {
            setHoveredCell(index);
        }
    }
    const handleCellLeave = () => {
        setHoveredCell(null);
    }

    return (
        <div className='flex flex-col items-center justify-center' >
            <section className='grid grid-cols-3 gap-4'>
                {board.map((cell, index) => (
                    <div
                        key={index}
                        onClick={() => handleOnClick(index)}
                        onMouseEnter={() => handleCellHover(index)}
                        onMouseLeave={handleCellLeave}
                        className='bg-gray-200 w-[7rem] h-[7rem] rounded-lg flex items-center justify-center shadow-2xl shadow-slate-950'
                    >
                        {cell === 'X' && <Button icon={xIcon} />}
                        {cell === 'O' && <Button icon={oIcon} />}
                        {hoveredCell === index && !cell && (
                            <img
                                className='w-[5rem] h-[5rem]'
                                src={player === 0 ? xIcon : oIcon}
                                alt={`Player ${player === 0 ? 'X' : 'O'}`}
                                style={{ opacity: 0.3 }}
                            />
                        )}
                    </div>
                ))}
            </section>
            <button className='bg-blue-600 px-4 py-2 mt-8 rounded-lg text-white ' onClick={resetBoard}>Reset</button>
        </div >
    )
}

export default Board
