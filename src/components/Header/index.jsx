import logoImg from '../../assets/images/logo.png'
import './styles.css'

export default function Header() {
  return (
    <header className='header-img'>
        <img src={logoImg} alt='Logo do site' />
    </header>
  )
}
