import { motion, useReducedMotion } from "framer-motion";
import type { TimelineMilestone } from "@/data/timeline";

type Props = {
  items: TimelineMilestone[];
};

const statusLabels: Record<TimelineMilestone["status"], string> = {
  approximate: "Narrated",
  "repo-evidenced": "Repo evidence",
  current: "Current"
};

const statusClasses: Record<TimelineMilestone["status"], string> = {
  approximate: "border-slate/25 bg-paper text-slate",
  "repo-evidenced": "border-copper/25 bg-copper/10 text-copper",
  current: "border-ink bg-ink text-paper"
};

const articleClasses: Record<TimelineMilestone["status"], string> = {
  approximate: "border-ink/10 bg-white/76",
  "repo-evidenced": "border-copper/24 bg-white/86",
  current: "border-ink/28 bg-field/82"
};

export default function AnimatedTimeline({ items }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      <div className="absolute left-[1.1rem] top-0 hidden h-full w-px bg-copper/30 md:block" />
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.22) }}
            className={`relative grid gap-4 rounded-md border p-5 shadow-sm backdrop-blur transition-colors hover:border-copper/35 md:grid-cols-[10rem_1fr] md:gap-8 md:p-6 ${articleClasses[item.status]}`}
          >
            <div className="flex items-start gap-3 md:block">
              <span className="mt-1 hidden size-9 rounded-md border border-copper/35 bg-paper shadow-sm md:block" />
              <div>
                <p className="text-sm font-semibold text-copper">{item.period}</p>
                <p className={`mt-2 inline-flex rounded-full border px-2 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${statusClasses[item.status]}`}>
                  {statusLabels[item.status]}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-ink-soft">{item.summary}</p>
              <div className="mt-4 border-l-2 border-copper/40 bg-paper/70 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-copper">Evidence basis</p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">{item.evidence}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink/10 bg-field/70 px-3 py-1 text-xs font-medium text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
