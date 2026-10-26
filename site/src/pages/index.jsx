import Hero from '../components/Hero.jsx'
import Products from '../components/Products.jsx'
import Customers from '../components/Customers.jsx'
import Insight from '../components/Insight.jsx'
import Stories from '../components/Stories.jsx'
import Migrate from '../components/Migrate.jsx'
import Capabilities from '../components/Capabilities.jsx'
import SelfHosted from '../components/SelfHosted.jsx'
import Download from '../components/Download.jsx'
import Apps from '../components/Apps.jsx'
import Enterprise from '../components/Enterprise.jsx'
import Developers from '../components/Developers.jsx'
import Cta from '../components/Cta.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Customers />
      <Insight />
      <Stories />
      <Migrate />
      <Capabilities />
      <SelfHosted />
      <Download />
      <Apps />
      <Enterprise />
      <Developers />
      <Cta />
    </>
  )
}
