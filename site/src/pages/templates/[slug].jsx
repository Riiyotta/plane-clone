import { useParams } from 'react-router-dom'
import { CatalogDetail } from '../../components/collections/Catalog.jsx'

export default function Page() {
  const { slug } = useParams()
  return <CatalogDetail key={slug} kind="templates" slug={slug} />
}
