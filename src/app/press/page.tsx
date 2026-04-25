'use client'

import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'

const kit = [
  {
    id: 'wordmark',
    title: 'Wordmark & lockup (SVG)',
    description: 'Monochrome and full-color on light backgrounds; minimum clear space is 0.5× the “E” cap height on all sides.',
  },
  {
    id: 'favicon',
    title: 'Favicon & app icon (PNG / SVG)',
    description: 'Square 512×512 master with rounded corners; avoid placing text smaller than 12pt equivalent at web scale.',
  },
] as const

const notes = [
  { title: 'Voice', body: 'Prefer direct verbs, present tense, and a confident neutral tone—this is a wire, not a pitch deck.' },
  { title: 'Typography', body: 'Pair display serif headlines with a calm sans for UI elements; never outline the mark for “emphasis”.' },
  { title: 'Color', body: 'Primary: crimson. Accent: tangerine. Do not add gradients to the mark itself.' },
] as const

export default function PressPage() {
  return (
    <PageShell
      title="Press & media kit"
      description="Quick context for partners covering ExpressA News Daily as a newswire distribution surface."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-rose-200/70">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-lg font-display font-bold text-foreground">Brand package</h2>
            <p className="text-sm text-muted-foreground">
              Request official assets (vector + raster) and usage guidance by email—no automated bundle on this static kit page.
            </p>
            <ul className="mt-2 space-y-2">
              {kit.map((k) => (
                <li key={k.id} className="rounded-lg border border-border bg-card px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">{k.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{k.description}</p>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-2 bg-[var(--brand-red)] font-semibold text-white hover:bg-[#7a0214]"
            >
              <a href={`mailto:press@${SITE_CONFIG.domain}`}>Email {SITE_CONFIG.domain} press</a>
            </Button>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {notes.map((n) => (
            <Card key={n.title} className="border-rose-200/60 [transition:transform_0.2s] hover:-translate-y-0.5">
              <CardContent className="p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-rose-400/90">{n.title}</h3>
                <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{n.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <p className="mt-8 text-sm text-center text-muted-foreground">
        Looking for the live catalog? <Link className="font-semibold text-[var(--brand-red)]" href="/updates">Open the press archive</Link>.
      </p>
    </PageShell>
  )
}
