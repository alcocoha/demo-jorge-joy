import logo from 'Assets/images/logo-header.png'
import shapesHeaderLeft from 'Assets/images/shapes-header-left.svg'
import shapesHeaderRight from 'Assets/images/shapes-header-right.svg'
import './styles.scss'

export default function Header() {
  return (
    <div className="header">
      <div className="header__shape-top">
        <div className="header__curve-bottom"></div>
        <div className="header__curve-top"></div>
        <img src={logo} alt="logo" className="header__logo" />
        <img src={shapesHeaderLeft} alt="" className="header__shapes-left" />
        <img src={shapesHeaderRight} alt="" className="header__shapes-right" />
      </div>
    </div>
  )
}
