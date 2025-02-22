import './styles.css'

export default function Button({ children, isOtherColor }) {
  return (
    <button className={`button ${isOtherColor && 'other-color'}`}>{children}</button>
  )
}
