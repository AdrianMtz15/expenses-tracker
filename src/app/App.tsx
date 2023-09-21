import { useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { Dashboard } from '../components/Dashboard'
import { MoveCard } from '../components/MoveCard'
import { useAppContext } from '../context/AppContext'
import { Form } from '../components/Form'

function App() {
  const url = 'http://localhost:3000/movimientos';

  const {
    setModalActive,
    moves,
    setMoves
  } = useAppContext()

  useEffect(() => {
    const getData = async () => {
      fetch(url)
      .then(res => res.json())
      .then(data => setMoves(data))
    }

    getData();
  }, [])



  return (
    <section className='h-100vw'>
      <header>
        <NavBar/>
      </header>

      <main className='p-10 mb-20'>
        <Dashboard/>

        <section>
          {
            moves.map(item => {
              return(
                <MoveCard
                  key={item.id}
                  title={item.title}
                  monto={item.monto}
                  type={item.type}
                />
              )
            })
          }
        </section>

        <Form/>

        <button onClick={() => {
          setModalActive(true)
        }} className='bg-blue-500 py-3 rounded-md text-[2rem] font-bold w-[70vw] m-auto text-white fixed bottom-5 left-0 right-0 text-'>
          Agregar Movimiento
        </button>
      </main>
    </section>
  )
}

export default App
