interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "001",
    title: "Discovery",
    description:
      "We dive deep into your goals, audience, and competition. Every decision is rooted in strategy and data.",
  },
  {
    number: "002",
    title: "Design",
    description:
      "Wireframes evolve into polished designs. Every pixel is purposeful, every interaction intentional.",
  },
  {
    number: "003",
    title: "Develop",
    description:
      "Clean, performant code that scales. Built with modern tools, tested thoroughly, optimized relentlessly.",
  },
  {
    number: "004",
    title: "Launch",
    description:
      "Deployment with confidence. Monitoring in place, backups configured, and performance baselines established.",
  },
  {
    number: "005",
    title: "Grow",
    description:
      "Post-launch optimization, content updates, and continuous improvement to keep you ahead.",
  },
];

export function ProcessTimeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
      {steps.map((step, index) => (
        <div key={step.number} className="relative">
          <div className="flex md:flex-col gap-5 md:gap-4">
            <span className="font-serif text-3xl md:text-4xl text-forest/10 leading-none shrink-0">
              {step.number}
            </span>
            <div className="flex-1">
              <h3 className="font-serif text-lg md:text-xl leading-tight mb-2 text-charcoal">
                {step.title}
              </h3>
              <p className="text-sm text-charcoal/50 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-stone/60 -z-10" />
          )}
        </div>
      ))}
    </div>
  );
}
