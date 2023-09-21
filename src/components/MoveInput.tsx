import {Input} from "@nextui-org/react";

import type { InputProps } from "@nextui-org/react";


type Props = {
  label: string,
  placeholder: string,
  type: string
}

export function MoveInput({label, placeholder, type, ...inputProps}: Props & InputProps) {
  return(
    <Input
      classNames={{
        label: 'text-[2rem]',
        input: 'text-[2rem]'
      }}
      placeholder={placeholder}
      labelPlacement='outside'
      type={type}
      label={label}
      variant="bordered"
      size='lg'
      className="max-w-xs mb-7"
      {...inputProps}
    />
  )
}