import iconsFooter from 'Assets/images/icons-footer.svg'
import { NavLink } from 'react-router-dom'
import Logo from 'Assets/images/logo.png'
import './styles.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={iconsFooter} alt="" className="footer__icon" />
      <div className="footer__info">
        <div className="footer__info-img">
          <img src={Logo} alt="pepsico" />
        </div>
        <div className="footer__info-copy">&copy; Copyright 2021 PepsiCo. Todos los derechos reservados</div>
        <div className="footer__info-links">
          <NavLink exact to="/contacto" className="footer__info-link">
            Contacto
          </NavLink>
          |
          <NavLink exact to="/aviso-de-privacidad" className="footer__info-link">
            Aviso de privacidad
          </NavLink>
          |
          <NavLink exact to="/terminos-y-condiciones" className="footer__info-link">
            Terminos y condiciones
          </NavLink>
          |
          <a href="#" className="footer__info-link-comebien">
            COME BIEN
          </a>
        </div>
      </div>
      <img src={iconsFooter} alt="" className="footer__icon" />
    </footer>
  )
}
