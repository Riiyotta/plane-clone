import { useParams } from 'react-router-dom'
import { JobPage } from '../../components/collections/Careers.jsx'

export default function CareerRole() {
  const { slug } = useParams()
  return <JobPage key={slug} id={slug} />
}
