import Container from 'components/Container'

const Hero: React.FC<{ title: string; background: string; subheader?: string }> = ({
  title,
  background,
  subheader,
}) => {
  return (
    <section className={`bg-${background} bg-no-repeat bg-cover bg-center`}>
      <div className="bg-gradient-to-r from-black via-transparent to-black pb-20 pt-20">
        <Container className="text-center pb-64 pt-40">
          <h1 className="text-5xl font-semibold text-center text-white">{title}</h1>
          {subheader && <h2 className="text-white text-xl font-thin">{subheader}</h2>}
        </Container>
      </div>
    </section>
  )
}

export default Hero
