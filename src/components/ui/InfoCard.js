export function InfoCard({ icon: Icon, title, copy, children, className = "" }) {
  return (
    <article className={`panel gradient-border h-full p-6 transition duration-200 hover:-translate-y-1 hover:shadow-glow ${className}`}>
      {Icon ? (
        <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-ice text-teal">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      ) : null}
      <h3 className="mt-5 font-display text-xl font-extrabold text-ink">{title}</h3>
      {copy ? <p className="mt-3 text-sm leading-7 text-slate">{copy}</p> : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
