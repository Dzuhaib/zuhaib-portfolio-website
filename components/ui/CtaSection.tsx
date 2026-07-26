import { Button } from "./Button";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function CtaSection({
  title,
  description,
  buttonText,
  buttonHref,
}: CtaSectionProps) {
  return (
    <section className="section-padding bg-black">
      <div className="container-main text-center max-w-2xl mx-auto">
        <h2 className="heading-lg text-white mb-5">{title}</h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          {description}
        </p>
        <Button href={buttonHref} size="lg">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
