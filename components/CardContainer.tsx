import Container from 'components/Container'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ offset: boolean }>

export default function CardContainer({ children, offset }: Props) {
  return (
    <Container className={`sm:shadow-xl bg-white rounded-md ${offset ? '-mt-32' : ''} `}>
      <div className="px-0 py-10 sm:px-20 sm:py-20 sm:mb-20">{children}</div>
    </Container>
  )
}
