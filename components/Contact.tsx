import Image from 'next/image'
import ContactForm from 'components/ContactForm'
import Container from 'components/Container'

const Contact: React.FC = () => {
  return (
    <section className="bg-contact-background bg-no-repeat bg-cover">
      <div className="bg-gradient-to-r from-black via-transparent to-black">
        <Container className="pt-20 pb-20">
          <div className="flex flex-wrap sm:flex-no-wrap md:space-x-10 xl:space-x-64 justify-center">
            <ul className="font-thin pb-10">
              <h2 className="text-5xl font-semibold text-white mb-12">Hitta oss</h2>
              <li className="mb-10 flex items-start">
                <div className="pt-2">
                  <Image src="/images/svg/pin.svg" alt="Location pin" width="35" height="35" />
                </div>
                <div className="pl-5">
                  <strong className="text-white font-semibold text-2xl mb-1 block">
                    Industrigatan 4C
                  </strong>
                  <p className="text-white text-opacity-75">112 46 Stockholm</p>
                </div>
              </li>
              <li className="mb-10  flex items-start">
                <div className="pt-2">
                  <Image src="/images/svg/phone.svg" alt="Contact" width="35" height="35" />
                </div>
                <div className="pl-5">
                  <strong className="text-white font-semibold text-2xl mb-1 block">
                    Telefon/Email
                  </strong>
                  <p className="text-white text-opacity-75">
                    Email: <a href="mailto: zima@zima.se">zima@zima.se</a>
                  </p>
                  <p className="text-white text-opacity-75">
                    Telefon: <a href="tel:086535710">08-653-5710</a>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="pt-2">
                  <Image src="/images/svg/clock.svg" alt="Opening times" width="35" height="35" />
                </div>
                <div className="pl-5">
                  <strong className="font-semibold text-white text-2xl mb-1 block">
                    Öppettider
                  </strong>
                  <p className="text-white text-opacity-75">Mån-Fre: kl. 13:00-18:00</p>
                  <p className="text-white text-opacity-75">Lör-Sön: stängt</p>
                </div>
              </li>
            </ul>
            <div />
            <ContactForm />
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Contact
