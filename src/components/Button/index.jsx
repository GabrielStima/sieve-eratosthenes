import './styles.css'

export default function Button({ children, isOtherColor, onClick, disabled }) {
  return (
    <button disabled={disabled} onClick={onClick} className={`button ${isOtherColor && 'other-color'}`}>{children}</button>
  )
}
