import Container from 'components/Container'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <Container className="pt-10 pb-10">
        <h2 className="text-lg font-semibold text-white mb-5">Zima Produktion</h2>
        <ul className="text-gray-500 text-sm font-thin border-b pb-10">
          <li>
            <strong className="font-semibold">Adress: </strong>
            <address className="inline-block not-italic	">
              Industrigatan 4A, 112 46 Stockholm
            </address>
          </li>
          <li>
            <strong className="font-semibold">Telefon: </strong>
            <a href="tel:086535710">08-653-5710</a>
          </li>
          <li>
            <strong className="font-semibold">E-post: </strong>
            <a href="mailto: zima@zima.se">zima@zima.se</a>
          </li>
          <li className="mt-3">
            <strong className="mb-1 block font-semibold">Öppettider</strong>
            <p>Mån-Fre: kl. 13:00-18:00</p>
            <p>Lör-Sön: stängt</p>
          </li>
        </ul>
        <p className="pt-5 text-right text-white text-sm font-thin">
          &copy; {new Date().getFullYear()} | Zima Produktion
        </p>
      </Container>
    </footer>
  )
}

export default Footer
