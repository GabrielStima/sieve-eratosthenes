import './styles.css'

export default function Section({ children, isOtherColor, id }) {
  return (
    <section className={`section-container ${isOtherColor && 'other-color'}`} id={id}>
        {children}
    </section>
  )
}
