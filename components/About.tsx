import Image from 'next/image'
import CardContainer from 'components/CardContainer'

const About: React.FC = () => {
  return (
    <CardContainer offset={false}>
      <div className="text-center px-10 sm:px-24">
        <h2 className="text-3xl mb-2">Om oss</h2>
        <p className="text-lg font-thin">
          Företaget grundades 1985 med ljudinspelning som huvudnäring.
          <span className="lg:block">
            1988 utökades verksamheten med import av ljud- och datautrustning.
          </span>
          <span className="md:block"> Allt vi säljer är av hög kvalité.</span>
        </p>
        <div className="mt-12">
          <div className="flex justify-center">
            <Image src="/images/svg/support.svg" alt="Support" width="60" height="60" />
          </div>
          <h3 className="text-xl mb-2">Support</h3>
          <p className="text-lg  font-thin">
            Vi svarar alltid på förfrågningar och supportärenden inom 24 timmar.
          </p>
        </div>
      </div>
    </CardContainer>
  )
}

export default About
