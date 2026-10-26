import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

// File-based routes: src/pages/foo/bar.jsx → /foo/bar, index.jsx → folder root, [slug].jsx → :slug
const pageModules = import.meta.glob('./pages/**/*.jsx')
const routes = Object.entries(pageModules)
  .filter(([file]) => !file.split('/').some((seg) => seg.startsWith('_')))
  .map(([file, load]) => {
    const path = file
      .replace(/^\.\/pages/, '')
      .replace(/\.jsx$/, '')
      .replace(/\/index$/, '')
      .replace(/\[(\w+)\]/g, ':$1')
    return { path: path || '/', Component: lazy(load) }
  })

// Route plane.so / same-origin links through the client router when a local page exists
function LinkInterceptor() {
  const navigate = useNavigate()
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest('a[href]')
      if (!a || a.target === '_blank') return
      const url = new URL(a.getAttribute('href'), window.location.href)
      const internal = url.origin === window.location.origin || url.hostname === 'plane.so' || url.hostname === 'www.plane.so'
      if (!internal) return
      e.preventDefault()
      navigate(url.pathname + url.search + url.hash)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])
  return null
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function NotFound() {
  return (
    <section className="container-page py-40 text-center">
      <h1 className="h1">Page not found</h1>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LinkInterceptor />
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
