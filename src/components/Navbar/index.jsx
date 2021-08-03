import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useWindowSize } from 'Hooks/useWindowResize'
import HamburguerBtn from 'Assets/images/hamburguesa-btn.png'
import './styles.scss'

export default function Navbar() {
  const [expand, setExpand] = useState(false)
  const [width, height] = useWindowSize()
  const [menuActive, setMenuActive] = useState('')

  const history = useHistory()

  const classLink = (btn) => `
    ${width < 768 ? 'mobile-menu-btn' : 'menu-btn'}
    ${menuActive === btn && width < 768 && 'mobile-menu-btn__active'}
    ${menuActive === btn && 'menu-btn__active'}
  `

  const dinamicHeight = width < 768 ? '50px' : 'auto'

  useEffect(() => {
    const path = {
      "/inicio/conocejoyapp": 'conocejoyapp',
      "/inicio/recompensas": 'recompensas',
      "/inicio/promos": 'promos',
      "/inicio/calificanos": 'calificanos',
      "/preguntas": 'preguntas',
      "/contacto": 'contacto',
    }
    setMenuActive(path[window.location.pathname])
  }, [])

  return (
    <div className={width < 768 ? 'mobile-menu' : 'menu'} style={{ height: expand ? '100vh' : dinamicHeight }}>
      {width < 768 && (
        <div className="mobile-menu__hamburguer-container">
          <button onClick={() => setExpand(!expand)} className="mobile-menu__hamburguer-btn">
            <img src={HamburguerBtn} className="mobile-menu__hamburguer-img" />
          </button>
        </div>
      )}

      <button
        className={classLink('conocejoyapp')}
        onClick={() => {
          history.push('/inicio/conocejoyapp')
          setExpand(false)
          setMenuActive('conocejoyapp')
        }}
      >
        Conoce Joy App
      </button>
      <button
        className={classLink('recompensas')}
        onClick={() => {
          history.push('/inicio/recompensas')
          setExpand(false)
          setMenuActive('recompensas')
        }}
      >
        Recompensas
      </button>
      <button
        className={classLink('promos')}
        onClick={() => {
          history.push('/inicio/promos')
          setExpand(false)
          setMenuActive('promos')
        }}
      >
        Promos
      </button>
      <button
        className={classLink('calificanos')}
        onClick={() => {
          history.push('/inicio/calificanos')
          setExpand(false)
          setMenuActive('calificanos')
        }}
      >
        Califícanos
      </button>
      <button
        className={classLink('preguntas')}
        onClick={() => {
          history.push('/preguntas')
          setExpand(false)
          setMenuActive('preguntas')
        }}
      >
        Preguntas
      </button>
      <button
        className={classLink('contacto')}
        onClick={() => {
          history.push('/contacto')
          setExpand(false)
          setMenuActive('contacto')
        }}
      >
        Contacto
      </button>
    </div>
  )
}
