import Layout from 'components/Layout';
import CardContainer from 'components/CardContainer';
import Hero from 'components/Hero';

const HyraUtrustning: React.FC = () => {
  return (
    <Layout preview={false} pageTitle="Hyra utrustning">
      <Hero title="Hyra utrustning" background="contact-background" />
      <CardContainer offset>
        <h2 className="text-xl mb-20">
          Som distrubutör samlar man på sig en hel del demoutrustning och annat smått och gott som
          inte används dagligen. Vi erbjuder dig proffesionell utrustning till ett förmånligt
          hyrpris. Lägsta hyresavgift är 600 kr exkl.moms för ett dygn.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <strong className="block mb-4 text-xl">Reverb – Effektenhet</strong>
            <p className="text-lg">
              Reverb – Effektenhet TC-M3000, Quantec Yardstick, Lexicon 300 / PCM91, Eventide
              ECLIPSE
            </p>
          </div>
          <div>
            <strong className="block mb-4 text-xl">Dynamikprocessorer / EQ</strong>
            <p className="text-lg">
              Manley Slam mastering limiter Manley mastering VARIMU komp/limiter Massenburg
              mastering 5bands EQ, Massenburg mastering kompressor Gem Audio Preceptor Model-T
              komp/limiter BAE 1028 Dave Hill Design Titan komp/limiter CraneSong mastering EQ
            </p>
          </div>
          <div>
            <strong className="block mb-4 text-xl">Mikrofonförstärkare/ Mikrofoner</strong>
            <p className="text-lg">
              Tillverkare: GML, Lipinski, BAE, CraneSong, Manley, Josephson, Brauner, CLOUD
            </p>
          </div>
        </div>
      </CardContainer>
    </Layout>
  );
};

export default HyraUtrustning;
