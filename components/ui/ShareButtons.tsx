"use client";

export function ShareButtons() {
  const actions = [
    {
      label: "Twitter",
      onClick: () =>
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`,
          "_blank"
        ),
    },
    {
      label: "LinkedIn",
      onClick: () =>
        window.open(
          `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
          "_blank"
        ),
    },
    {
      label: "Copy Link",
      onClick: () => navigator.clipboard.writeText(window.location.href),
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-stone/50">
      <span className="text-sm text-charcoal/40">Share this article:</span>
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={action.onClick}
          className="text-xs font-medium text-forest hover:text-forest-light transition-colors px-3 py-1.5 rounded-lg bg-forest/5 hover:bg-forest/10"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}
