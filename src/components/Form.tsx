import { MoveInput } from '../components/MoveInput'
import { useAppContext } from '../context/AppContext';
import axios from 'axios'

export function Form() {
  const url = 'http://localhost:3000/movimientos';

  const {
    setMoves,
    modalActive,
    setModalActive,
    title,
    setTitle,
    monto,
    setMonto,
    montoType,
    setMontoType,
  } = useAppContext()

  const postMove = () => {
    const data = {
      title,
      monto,
      type: montoType
    }

    axios.post(url, data)
    .then(response => {
      console.log('Respuesta del servidor:', response.data);
    })
    .then(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setMoves(data))
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
  }

  const clearInputs = () => {
    setTitle('');
    setMonto('');
    setMontoType('');
  }

  return(
    <section className={` ${modalActive ? 'flex' : 'hidden'} py-5 bg-white shadow-large z-20 border border-black border-solid rounded-lg  flex-col justify-around items-center fixed top-[20vh] left-0 right-0 m-auto w-[90vw] min-h-[350px] h-max`}>

      <MoveInput
        label='Titulo'
        placeholder='Nombre del movimiento'
        type='text'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />

      <MoveInput
        label='Monto'
        placeholder='Cantidad del Monto'
        type='number'
        value={monto}
        onChange={(e) => {
          setMonto(e.target.value)
        }}
      />

      <div className=' w-full flex flex-row justify-around mb-5'>
        <div className='flex '>
          <input
            onChange={(e) => {
              e.target.checked ? setMontoType('ingreso'): setMontoType('egreso')
              
            }}
          type="checkbox" className='mr-2 w-10' />
          <p className='text-[1.5rem]'>Ingreso</p>
        </div>

        <div className='flex '>
          <input 
          onChange={(e) => {
            e.target.checked ? setMontoType('egreso'): setMontoType('ingreso')
            
          }}
          type="checkbox" className='mr-2  w-10' />
          <p className='text-[1.5rem]'>Egreso</p>
        </div>
      </div>


      <button
        onClick={() => {
          setModalActive(false);
          postMove()
          clearInputs()
        }}
      className='bg-blue-500 py-2 rounded-md text-[1.8rem] font-bold w-[70vw] m-auto text-white'>
        Agregar
      </button>

      <button
        onClick={() => {
          setModalActive(false);
          clearInputs()
        }}
      className='bg-blue-500 py-2 rounded-md text-[1.8rem] font-bold w-[70vw] m-auto text-white'>
        Cancelar
      </button>
    </section>
  )
}