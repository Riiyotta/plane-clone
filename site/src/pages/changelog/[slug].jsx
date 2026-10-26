import { useParams } from 'react-router-dom'
import { ChangelogDetail } from '../../components/collections/Changelog.jsx'

export default function ChangelogEntry() {
  const { slug } = useParams()
  return <ChangelogDetail key={slug} slug={slug} />
}
