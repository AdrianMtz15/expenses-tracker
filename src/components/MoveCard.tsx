import {Card, CardBody} from "@nextui-org/react";

export function MoveCard({ title, monto, type }: { title: string, monto: string, type: string }) {
  return(
    <Card className="mb-2">
      <CardBody className="flex flex-row justify-between items-center">
        <p className="text-[1.8rem] font-bold">{title}</p>
        <p className={`${type === 'ingreso' ? 'text-green-800' : 'text-red-800'} text-[1.4rem] font-bold `}>{`${type === 'ingreso' ? '+': '-'}`}${monto}</p>
      </CardBody>
    </Card>
  )
}