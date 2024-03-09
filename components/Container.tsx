import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ className?: string }>

export default function Container({ children, className }: Props) {
  return <div className={`container px-5 sm:px-1 mx-auto ${className}`}>{children}</div>
}
