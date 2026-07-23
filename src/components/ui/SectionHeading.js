export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  action,
  className = ""
}) {
  const centered = align === "center";

  return (
    <div
      className={`mb-10 flex flex-col gap-4 ${
        centered ? "mx-auto max-w-3xl items-center text-center" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="heading-lg font-extrabold text-ink">{title}</h2>
          {copy ? <p className="copy-lg mt-4">{copy}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}
