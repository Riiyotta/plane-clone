// /launch-week — live plane.so redirects to the current edition (/launch-week/q2-2026).
import { Navigate } from 'react-router-dom'

export default function LaunchWeek() {
  return <Navigate to="/launch-week/q2-2026" replace />
}
