import Container from 'components/Container'

const Hero: React.FC<{ title: string; background: string }> = ({ title, background }) => {
  return (
    <section className={`bg-${background} bg-no-repeat bg-cover`}>
      <div className="bg-gradient-to-r from-black via-transparent to-black">
        <Container className="pb-48 pt-20">
          <h1 className="text-5xl font-semibold text-center text-white">{title}</h1>
        </Container>
      </div>
    </section>
  )
}

export default Hero
