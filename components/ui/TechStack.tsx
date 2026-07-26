interface TechStackProps {
  skills: readonly string[];
}

export function TechStack({ skills }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="text-sm px-4 py-2 border border-neutral-200 text-neutral-600"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
