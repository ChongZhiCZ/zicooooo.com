import { genPageMetadata } from 'app/seo'
import TicTacToe from '@/components/TicTacToe'

export const metadata = genPageMetadata({ title: 'Fun' })

export default function Fun() {
  return (
    <>
      <h1 className="mt-10 mb-8 text-2xl font-bold md:text-4xl">Creative Programming</h1>
      <TicTacToe></TicTacToe>
    </>
  )
}
