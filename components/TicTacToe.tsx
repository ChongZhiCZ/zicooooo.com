'use client'
import { useState, useEffect, memo, useCallback } from 'react'
import { Tab, TabGroup, TabList } from '@headlessui/react'

type GameMode = 'pvp' | 'pvc'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [gameMode, setGameMode] = useState<GameMode>('pvp')

  const calculateWinner = (squares: Array<string | null>) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const computerMove = () => {
    // 智能AI逻辑
    const winningMove = findWinningMove(board, 'O')
    if (winningMove !== null) {
      handleClick(winningMove)
      return
    }

    // 阻止玩家获胜
    const blockingMove = findWinningMove(board, 'X')
    if (blockingMove !== null) {
      handleClick(blockingMove)
      return
    }

    // 如果中间格子空着，优先占据中间
    if (board[4] === null) {
      handleClick(4)
      return
    }

    // 随机走棋
    const emptySquares = board
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null) as number[]

    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length)
      handleClick(emptySquares[randomIndex])
    }
  }

  const findWinningMove = (squares: Array<string | null>, player: string) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const [a, b, c] of lines) {
      const squares_copy = [...squares]
      if (squares[a] === null && squares[b] === player && squares[c] === player) return a
      if (squares[a] === player && squares[b] === null && squares[c] === player) return b
      if (squares[a] === player && squares[b] === player && squares[c] === null) return c
    }
    return null
  }

  useEffect(() => {
    if (gameMode === 'pvc' && !isXNext && !calculateWinner(board)) {
      const timer = setTimeout(() => {
        computerMove()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isXNext, gameMode])

  const handleClick = useCallback(
    (index: number) => {
      if (board[index] || calculateWinner(board)) return

      const newBoard = board.slice()
      newBoard[index] = isXNext ? 'X' : 'O'
      setBoard(newBoard)
      setIsXNext(!isXNext)
    },
    [board, isXNext]
  )

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
  }

  const winner = calculateWinner(board)
  const isDraw = !winner && board.every((square) => square !== null)
  const status = winner
    ? `Player ${winner} wins!`
    : isDraw
      ? `It's a draw!`
      : `Current player: ${isXNext ? 'X' : 'O'}`

  const getStatusColorClass = () => {
    if (winner === 'X') return 'text-blue-500'
    if (winner === 'O') return 'text-green-500'
    if (isDraw) return 'text-gray-500'
    if (isXNext) return 'text-blue-400'
    return 'text-primary-400'
  }

  return (
    <>
      <div className="flex w-full items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex w-full max-w-xl flex-col items-center px-4 py-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Tic Tac Toe </h2>

          <TabGroup defaultIndex={0}>
            <TabList className="mb-6 flex space-x-1 rounded-xl bg-neutral-100 p-1 dark:bg-neutral-800">
              <Tab
                className={({ selected }) =>
                  `w-full rounded-lg px-4 py-3 text-sm leading-5 font-medium whitespace-nowrap focus:outline-none ${
                    selected
                      ? 'text-primary-600 dark:text-primary-400 bg-white shadow dark:bg-neutral-700'
                      : 'text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100'
                  }`
                }
                onClick={() => setGameMode('pvp')}
              >
                Player vs Player
              </Tab>
              <Tab
                className={({ selected }) =>
                  `w-full rounded-lg px-4 py-3 text-sm leading-5 font-medium whitespace-nowrap focus:outline-none ${
                    selected
                      ? 'text-primary-600 dark:text-primary-400 bg-white shadow dark:bg-neutral-700'
                      : 'text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100'
                  }`
                }
                onClick={() => setGameMode('pvc')}
              >
                vs Computer
              </Tab>
            </TabList>
          </TabGroup>

          <div
            className={`mb-3 text-xs transition-colors sm:mb-4 sm:text-sm ${getStatusColorClass()}`}
          >
            {status}
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[min(400px,80vw)]">
            <div className="grid h-full w-full grid-cols-3 gap-2 sm:gap-3">
              {Array(9)
                .fill(null)
                .map((_, index) => (
                  <button
                    key={index}
                    className="relative flex aspect-square cursor-pointer items-center justify-center rounded-lg border-2 border-neutral-200 bg-neutral-50 text-2xl font-bold transition-all duration-200 hover:border-green-500 hover:bg-neutral-100 active:border-green-600 disabled:cursor-not-allowed sm:text-4xl md:text-6xl dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800"
                    onClick={() => handleClick(index)}
                    disabled={!!calculateWinner(board)}
                  >
                    <span
                      className={`absolute transition-all duration-300 ease-out ${
                        board[index] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      } ${board[index] === 'X' ? 'text-blue-500' : 'text-green-500'}`}
                    >
                      {board[index]}
                    </span>
                  </button>
                ))}
            </div>
          </div>

          <button
            className="mt-6 inline-flex rounded-lg bg-green-500 px-6 py-3 text-white hover:bg-green-600"
            onClick={resetGame}
          >
            New Game
          </button>
        </div>
      </div>
    </>
  )
}

export default TicTacToe
