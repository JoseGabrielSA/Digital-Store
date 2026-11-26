function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <section className="section">
      <div className={`section-heading ${titleAlign}`}>
        <h2>{title}</h2>
        {link && <a href={link.href}>{link.text}</a>}
      </div>

      {children}
    </section>
  );
}

export default Section;