import { useState } from 'react'
import PropTypes from 'prop-types'
import Masicon from 'Assets/images/masicon.png'
import Menosicon from 'Assets/images/menosicon.png'
import './styles.scss'

export default function Collapse({ elements }) {
  const [itemsOpen, setItemsOpen] = useState(null)
  const [openHeight, setOpenHeight] = useState(0)

  const handleOpen = (index) => {
    if (itemsOpen === index) {
      setItemsOpen(null)
      return
    }

    const heightItem = document.getElementById(`collapse__item-${index}`).clientHeight
    setOpenHeight(heightItem + 40)
    setItemsOpen(index)
  }

  const buildItems = () => {
    return elements.map((element, index) => (
      <div className="collapse__item" key={index}>
        <button className={`collapse__item-button `} onClick={() => handleOpen(index)}>
          {
            itemsOpen === index ? <img src={Menosicon} alt="first"/> : <img src={Masicon} alt="second"/>
          }
          <span className="collapse__item-span">{element.title}</span>
        </button>
        <div className="collapse__item-container" style={{ height: itemsOpen === index ? openHeight : 0 }}>
          <div id={`collapse__item-${index}`} className="collapse__item-content">
            {element.content}
          </div>
        </div>
      </div>
    ))
  }

  return <div className="collapse">{buildItems()}</div>
}

Collapse.propTypes = {
  elements: PropTypes.array,
}

Collapse.defaultProps = {
  elements: [],
}
