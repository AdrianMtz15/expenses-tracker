import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type AppContext = {
  moves: MoveData[],
  balance: {
    total: number,
    ingresos: number,
    egresos: number
  },
  modalActive: boolean,
  title: string,
  monto: string,
  montoType: 'ingreso' | 'egreso' | string,
  setModalActive: (isActive: boolean) => void,
  setMoves: (moves: MoveData[]) => void,
  setTitle: (title: string) => void,
  setMonto: (monto: string) => void,
  setMontoType: (montoType: 'ingreso' | 'egreso' | string) => void,
};


type AppContextProvider = {
  children: ReactNode;
};

type MoveData = {
  id: number,
  title: string,
  monto: string,
  type: string
}

const AppContext = createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProvider) => {
  const [moves, setMoves] = useState<MoveData[]>([])
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('');
  const [monto, setMonto] = useState<string>('');
  const [montoType, setMontoType] = useState<'ingreso' | 'egreso' | string>('');
  const [balance, setBalance] = useState({
    total: 0,
    ingresos: 0,
    egresos: 0
  });

  const getBalance = () => {
    let total = 0;
    let ingresos = 0;
    let egresos = 0;

    moves.map(item => {
      if(item.type === 'ingreso') {
        total += parseFloat(item.monto);
        ingresos += parseFloat(item.monto);
      } else {
        total -= parseFloat(item.monto);
        egresos += parseFloat(item.monto);
      }
    });



    setBalance({
      total,
      ingresos,
      egresos
    });
  }


  useEffect(() => {
    getBalance();
  }, [moves])

  return (
    <AppContext.Provider value={{
      moves,
      balance,
      setMoves,
      modalActive,
      setModalActive,
      title,
      setTitle,
      monto,
      setMonto,
      montoType,
      setMontoType
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useMyContext debe ser utilizado dentro de un MyContextProvider');
  }
  return context;
};