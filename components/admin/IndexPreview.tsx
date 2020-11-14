import Index from '../../pages'

export const IndexPreview = ({ entry }) => {
  console.log(entry)
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return <Index test={data.hero} />
  } else {
    return <div>Loading...</div>
  }
}
