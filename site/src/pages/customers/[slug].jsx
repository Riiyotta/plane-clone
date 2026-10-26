import { useParams } from 'react-router-dom'
import { CustomerStory } from '../../components/collections/Customers.jsx'

export default function CustomerStoryPage() {
  const { slug } = useParams()
  return <CustomerStory key={slug} slug={slug} />
}
