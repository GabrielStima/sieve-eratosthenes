import './styles.css'

export default function Title({ children, isPrincipal = false }) {
  return (
    <>
     { isPrincipal ? (<h1>{children}</h1>) : (<h2>{children}</h2>)}
    </>
  )
}
