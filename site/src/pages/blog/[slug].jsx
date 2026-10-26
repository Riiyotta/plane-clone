import { useParams } from 'react-router-dom'
import BlogPost from '../../components/collections/BlogPost.jsx'

export default function BlogPostPage() {
  const { slug } = useParams()
  return <BlogPost key={slug} slug={slug} />
}
