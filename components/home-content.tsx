'use client';

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { HighlightCard } from "@/components/highlight-card";
import { PillarGrid } from "@/components/pillar-grid";
import { Timeline } from "@/components/timeline";
import { DataTable } from "@/components/data-table";
import {
  heroStats,
  pillars,
  videoBlueprint,
  seoKeywords,
  launchTimeline,
  monetization,
  toolkit,
  rituals
} from "@/lib/blueprint-data";
import { getChannelNameIdeas } from "@/lib/channel-names";

export function HomeContent() {
  const channelNames = getChannelNameIdeas();

  return (
    <main className="relative pb-32">
      <div className="absolute inset-0 -z-10 bg-gradient-moon blur-3xl opacity-90" />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-4 py-16 md:px-8">
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[48px] border border-primary-500/40 bg-slate-950/70 p-10 shadow-[0_55px_120px_-60px_rgba(84,110,255,0.45)]"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-400/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-accent-200">
                Sleep Story Domination
              </span>
              <h1 className="text-4xl md:text-[52px] font-heading leading-tight text-primary-50">
                Build the #1 Hindi Moral Sleep Story Channel in 120 Days
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                A full-stack audience, content, and monetization system crafted
                for creators who want to own the Hindi bedtime storytelling
                niche. Follow this blueprint to outpace competitors with
                cinematic soundscapes, ritualized community touchpoints, and a
                data-obsessed growth engine.
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-primary-100">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <SectionHeading
            eyebrow="Channel Identity"
            title="Craft a magnetic Hindi sleep storytelling brand."
            subtitle="Blend the warmth of grandparent tales with premium audio design and modern content ops."
          />
          <PillarGrid pillars={pillars} />
        </section>

        <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <HighlightCard title="Signature Sound & Visual Stack" icon="🎧">
            Layer sitar plucks, tanpura drones, and soft rain loops mixed at
            -18dB under a breathable vocal recorded with a low-noise condenser.
            Pair with thumbnail art featuring moonlit blues, gold serif titles,
            and a calm storyteller portrait. Maintain a recognizable waveform
            overlay to boost CTR consistency.
          </HighlightCard>
          <HighlightCard title="Authority-Building Content Mix" icon="🧭" accent="amber">
            Publish three 30-minute flagship stories weekly, four 60-second
            shorts distilling key morals, and a Sunday podcast episode repackaged
            from the long-form script. Anchor everything to a monthly virtue
            theme (e.g., Compassion, Courage, Forgiveness) to create bingeable
            arcs.
          </HighlightCard>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Narrative System"
            title="Story blueprint engineered for retention & relaxation."
            subtitle="Use this modular script framework to generate endless moral tales while signalling safety for sleep."
          />
          <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/70">
            <table className="min-w-full text-sm text-slate-100">
              <thead>
                <tr className="bg-primary-500/10 text-accent-100 uppercase tracking-wide text-xs">
                  <th className="px-4 py-4 text-left">Stage</th>
                  <th className="px-4 py-4 text-left">Intent</th>
                  <th className="px-4 py-4 text-left">Execution Notes</th>
                  <th className="px-4 py-4 text-left">Key Metric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {videoBlueprint.map((row) => (
                  <tr key={row.stage} className="hover:bg-primary-500/5">
                    <td className="px-4 py-4 font-semibold text-primary-100">
                      {row.stage}
                    </td>
                    <td className="px-4 py-4">{row.intent}</td>
                    <td className="px-4 py-4">{row.execution}</td>
                    <td className="px-4 py-4 text-accent-200">{row.metrics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Search & Discovery"
            title="SEO cluster that captures every Hindi sleep intent."
            subtitle="Group titles, descriptions, and playlists around keyword pillars to build topical authority fast."
          />
          <DataTable
            columns={[
              { key: "primary", label: "Primary Keyword" },
              { key: "secondary", label: "Secondary Variations" },
              { key: "intent", label: "Viewer Intent" }
            ]}
            rows={seoKeywords}
          />
          <div className="rounded-3xl border border-primary-500/30 bg-primary-500/5 p-6 text-sm text-primary-100">
            <p>
              Title format:{" "}
              <strong>
                {`"${seoKeywords[0]?.primary} | ${seoKeywords[0]?.secondary.split(",")[0].trim()} | [Moral Lesson]"`}
              </strong>
              . Description top line should echo the primary keyword + emotional
              hook, followed by bullet timestamps and Hindi + English summaries
              to rank bilingually.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Production Ops"
            title="Weekly batching workflow to stay 3 weeks ahead."
            subtitle="Protect deep work blocks, automate revisions, and bring assistants into a clear pipeline."
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 rounded-3xl border border-slate-700/70 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-primary-100">
                5-Stage Production Pipeline
              </h3>
              <ol className="space-y-4 text-sm text-slate-200">
                <li>
                  <strong>Monday · Ideation Lab:</strong> Brainstorm 10 prompts
                  via comment mining, Reddit (r/DesiParents, r/IndiaSpeaks), and
                  archetype cards. Validate with YouTube autosuggest.
                </li>
                <li>
                  <strong>Tuesday · Script Writers&apos; Room:</strong> Draft in
                  Hindi with storyteller voice markers. Run through AI-assisted
                  tone checker (Grammarly/LanguageTool) for softness.
                </li>
                <li>
                  <strong>Wednesday · Recording Ritual:</strong> Record 3 stories
                  in one session using standing desk, pop filter, and humidifier.
                  Capture whispers and fallback takes.
                </li>
                <li>
                  <strong>Thursday · Sound & Edit:</strong> Assistant handles
                  noise cleanup, you layer ambience and master. Export video with
                  animated slowly drifting artwork.
                </li>
                <li>
                  <strong>Friday · Publish & Community:</strong> Schedule all
                  uploads, write companion newsletter, prep live chat prompts for
                  Saturday premiere.
                </li>
              </ol>
            </div>
            <div className="space-y-6 rounded-3xl border border-primary-500/40 bg-primary-500/5 p-6">
              <h3 className="text-lg font-semibold text-primary-50">
                Ritual Touchpoints
              </h3>
              <ul className="space-y-4 text-sm text-primary-100">
                {rituals.map((item) => (
                  <li key={item.name}>
                    <p className="font-semibold uppercase tracking-wide text-xs text-accent-200">
                      {item.name}
                    </p>
                    <p className="mt-1 text-primary-100/90">{item.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="30-Day Launch Plan"
            title="Execute the domination roadmap."
            subtitle="Treat each week as a mini-sprint with focused outcomes, accountability, and review."
          />
          <Timeline items={launchTimeline} />
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Revenue Architecture"
            title="Layer monetization without breaking the sleep experience."
            subtitle="Diversify income streams that feel like a natural extension of your bedtime brand."
          />
          <DataTable
            columns={[
              { key: "stream", label: "Revenue Stream" },
              { key: "approach", label: "Approach" },
              { key: "timeline", label: "Activation Timeline" }
            ]}
            rows={monetization}
          />
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Creator Toolkit"
            title="Best-in-class stack for calm storytelling at scale."
            subtitle="Combine human warmth with smart tooling to keep quality high even while ramping output."
          />
          <DataTable
            columns={[
              { key: "tool", label: "Tool" },
              { key: "category", label: "Category" },
              { key: "purpose", label: "Purpose" }
            ]}
            rows={toolkit}
          />
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Brand Naming"
            title="Channel name ideas with emotional resonance."
            subtitle="Pick a name that signals serenity, tradition, and trustworthy moral guidance."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {channelNames.map((name) => (
              <div
                key={name.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-950/60 p-5"
              >
                <p className="text-lg font-semibold text-primary-100">
                  {name.title}
                </p>
                <p className="mt-2 text-sm text-slate-300">{name.description}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-accent-200">
                  Tagline: {name.tagline}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Analytics Dashboard"
            title="North-star metrics & weekly review cadence."
            subtitle="Plug these into a Looker Studio dashboard fed by YouTube Studio exports."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                metric: "Average View Duration",
                target: "18m+ per flagship story",
                action:
                  "Flag drop-offs; adjust pacing, add scenic loops, tighten scripts."
              },
              {
                metric: "Thumbnail CTR",
                target: "Click-through rate > 7.5%",
                action:
                  "Test color grading, host framing, emotional adjectives in 48-hour cycles."
              },
              {
                metric: "Subscriber Conversion",
                target: "6.5% sub conversion per view",
                action:
                  "Embed soft CTA at 11m mark, add end-screen subscribe animation, pin moral recap comment."
              }
            ].map((item) => (
              <div
                key={item.metric}
                className="rounded-3xl border border-primary-500/40 bg-primary-500/10 p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-accent-200">
                  {item.metric}
                </p>
                <p className="mt-3 text-lg font-semibold text-primary-50">
                  {item.target}
                </p>
                <p className="mt-3 text-sm text-primary-100/90">
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Expansion Plays"
            title="Scale beyond YouTube without diluting the brand."
            subtitle="Build IP, community-owned assets, and cross-platform discoverability in quarter two."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <HighlightCard title="Sleep App Mini-Series" icon="📱">
              Package 5 exclusive stories into an iOS/Android mini-app with
              triggers for bedtime reminders, sleep tracker integration, and
              gratitude journaling prompts. Use as a lead magnet for newsletter
              & membership upsell.
            </HighlightCard>
            <HighlightCard title="Live Retreat Blueprint" icon="🏕️" accent="amber">
              Design a weekend &ldquo;Digital Detox & Storytelling&rdquo; retreat
              featuring meditation coaches, folk musicians, and moral discussion
              circles. Capture content for documentary-style YouTube special.
            </HighlightCard>
          </div>
        </section>

        <footer className="rounded-[32px] border border-slate-700/70 bg-slate-950/60 p-10 text-center text-sm text-slate-300">
          <p>
            Execute relentlessly: review analytics every Monday, refine scripts
            midweek, deepen community rituals on weekends. This playbook keeps
            you three steps ahead of every Hindi moral sleep storyteller.
          </p>
        </footer>
      </div>
    </main>
  );
}
