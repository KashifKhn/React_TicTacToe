import React, { useEffect, useState } from 'react'
import Board from './components/Board'

const App = () => {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (winner) {
      alert(`Player ${winner} has won!`);
    }
  }, [winner]);
  
  
  return (
    <div className='flex mx-auto w-full h-screen items-center justify-center'>
      <div className="w-[400px] h-[450px]">
        <Board
          winner={winner}
          setWinner={setWinner}
         />
      </div>
    </div>
  )
}

export default App
