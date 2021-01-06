import Layout from 'components/Layout'
import { GetStaticProps } from 'next'
import { getAllSuppliersWithSlug, getAllRentObjects } from 'lib/api'
import CardContainer from 'components/CardContainer'
import Hero from 'components/Hero'
import { SupplierType, RentType } from 'types/allTypes'

const HyraUtrustning: React.FC<{ suppliers: SupplierType[]; rentObjects: RentType[] }> = ({
  suppliers,
  rentObjects,
}) => {
  return (
    <Layout preview={false} pageTitle="Hyra utrustning" suppliers={suppliers}>
      <Hero title="Hyra utrustning" background="contact-background" />
      <CardContainer offset>
        <h2 className="text-xl mb-20">
          Som distrubutör samlar man på sig en hel del demoutrustning och annat smått och gott som
          inte används dagligen. Vi erbjuder dig proffesionell utrustning till ett förmånligt
          hyrpris. Lägsta hyresavgift är 600 kr exkl.moms för ett dygn.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {rentObjects &&
            rentObjects.map((item, index) => (
              <div key={index}>
                <strong className="block mb-4 text-xl">{item.title}</strong>
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </div>
            ))}
        </div>
      </CardContainer>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const suppliers = (await getAllSuppliersWithSlug()) || []
  const rentObjects = (await getAllRentObjects(preview)) || []

  return {
    props: {
      preview,
      suppliers,
      rentObjects,
    },
  }
}

export default HyraUtrustning
