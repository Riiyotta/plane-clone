import { Fragment } from 'react'
import './Hero.css'

// CLONE_SPEC §2 — h1 lines; break after "knowledge" is a pre-line newline at ≥md
const LINES = [
  ['Project', 'management', 'and', 'knowledge'],
  ['management', 'for', 'teams', 'and', 'agents'],
]

function Title() {
  let i = 0
  return (
    <h1 className="h1 text-txt-primary md:whitespace-pre-line">
      {LINES.map((words, li) => (
        <Fragment key={li}>
          {li > 0 && '\n'}
          {words.map((w, wi) => {
            const delay = 80 + 70 * i++
            return (
              <Fragment key={wi}>
                {wi > 0 && ' '}
                <span className="hero-word" style={{ animationDelay: `${delay}ms` }}>{w}</span>
              </Fragment>
            )
          })}
        </Fragment>
      ))}
    </h1>
  )
}

export default function Hero() {
  return (
    <section aria-label="Hero section" id="hero" className="bg-white">
      <div className="container-page">
        <div className="flex flex-col items-start gap-6 pt-16 pb-12 text-left md:items-center md:gap-10 md:pb-20 md:text-center">
          <div className="space-y-4">
            <div className="text-500 font-430">
              <span className="text-400 font-430 uppercase text-txt-accent">Cloud, self-hosted and air-gapped ready</span>
            </div>
            <div className="flex flex-col gap-3 md:gap-6">
              <Title />
              <div className="hero-fade" style={{ animationDelay: '720ms' }}>
                <div className="text-600 font-430 text-txt-secondary md:whitespace-pre-line">
                  {'Plane brings projects, docs, and AI-powered workflows into one unified\nworkspace so teams and agents can plan, execute, and stay aligned.'}
                </div>
              </div>
            </div>
          </div>
          <div
            className="hero-fade flex flex-wrap items-center justify-start gap-4 md:justify-center"
            style={{ animationDelay: '840ms' }}
          >
            <a className="btn-primary" href="https://app.plane.so/sign-up/">Try Plane Business for 14 days</a>
            <a className="btn-secondary" href="/talk-to-sales">Talk to a human →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
