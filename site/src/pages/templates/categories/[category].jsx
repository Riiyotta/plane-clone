import { useParams } from 'react-router-dom'
import { CatalogListing } from '../../../components/collections/Catalog.jsx'

export default function Page() {
  const { category } = useParams()
  return <CatalogListing key={category} kind="templates" category={category} />
}
