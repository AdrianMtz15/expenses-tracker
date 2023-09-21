import {Card, CardHeader, CardBody} from "@nextui-org/react";
import { useAppContext } from "../context/AppContext";

export function Dashboard() {

  const {
    balance
  } = useAppContext()
  
  return(
    <div className="mb-10">
      <Card className="py-4">
        <CardHeader className="flex  pb-0 pt-2 px-4 flex-col items-center justify-center">
          <p className="text-tiny uppercase font-bold text-[1.5rem]">Balance del Mes</p>
          <p className="text-[2rem] font-bold text-[#4a65a3]">${balance.total}</p>
        </CardHeader>
        <CardBody className="flex flex-row w-full justify-between overflow-visible py-2">
          <div>
            <p className=" text-green-800 text-tiny uppercase font-bold text-[1.5rem]">Ingresos</p>
            <p className="font-bold text-[1.5rem] text-green-800">+${balance.ingresos}</p>
          </div>
          <div>
            <p className=" text-red-800 text-tiny uppercase font-bold text-[1.5rem]">Egresos</p>
            <p className="font-bold text-[1.5rem] text-red-800">-${balance.egresos}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}