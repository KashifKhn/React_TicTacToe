import React, { useEffect, useState } from 'react'
import Board from './components/Board'

import xIcon from './assets/x-icon.png'
import oIcon from './assets/o-icon.png'

const App = () => {
  const [winner, setWinner] = useState(null);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);


  useEffect(() => {
    if (winner === 'X') {
      setPlayerOneScore(oldScore => oldScore + 1);
    }
    if (winner === 'O') {
      setPlayerTwoScore(oldScore => oldScore + 1);
    }
  }, [winner]);

  let winingMsg
  if (winner === 'X')
    winingMsg = "The Winner is X"
  else if (winner === 'O')
    winingMsg = "The Winner is O"
  else
    winingMsg = "The The Game Draw"

  return (
    <div className='flex flex-col mx-auto w-full h-screen items-center  justify-center overflow-hidden pt-8 bg-gray-200'>
      <div className="flex justify-around mb-4 gap-4">
        <h1
          className="text-2xl font-semibold font-mono bg-gray-400 rounded-md px-3 py-2 text-white flex items-center justify-center gap-2 text-center"
        >Player
          <span className='flex'>
            <img className='w-4 h-4' src={xIcon} alt="X" />
          </span>: {playerOneScore}
        </h1>
        <h1
          className="text-2xl font-semibold font-mono bg-gray-400 rounded-md px-3 py-2 text-white flex items-center justify-center gap-2 text-center"
        >Player
          <span className='flex'>
            <img className='w-4 h-4' src={oIcon} alt="X" />
          </span>: {playerTwoScore}
        </h1>
      </div>
      <div className="w-[400px] h-[450px] bg-white rounded-md flex items-center justify-center">
        <Board
          winner={winner}
          setWinner={setWinner}
        />
      </div>
      {
        winner &&
        <h4 className='bg-blue-200 my-20 px-8 py-4 rounded-xl  text-blue-950 text-[1rem] font-bold italic empty:bg-'>
          {winingMsg}
        </h4>
      }
    </div>
  )
}

export default App
