import { Slide } from 'react-slideshow-image'
import PropTypes from 'prop-types'
import ArrowPrev from 'Assets/images/arrow-left.svg'
import ArrowNext from 'Assets/images/arrow-right.svg'
import ScrollIcon from 'Assets/images/scroll.svg'
import './styles.scss'

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  prevArrow: (
    <div style={{ width: '30px', marginRight: '-30px' }}>
      <img src={ArrowPrev} alt="preview" style={{ width: 25 }} />
    </div>
  ),
  nextArrow: (
    <div style={{ width: '30px', marginLeft: '-30px' }}>
      <img src={ArrowNext} alt="next" style={{ width: 25 }} />
    </div>
  ),
}

export default function BigSlide({ data }) {
  const buildSliders = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => (
        <div className="big-slide__item" key={index}>
          <div className="each-slide each-slide__container">
            <div className="each-slide__left-content">
              <h1 className="each-slide__left-content-h1">{item.title}</h1>
              <p className="each-slide__left-content-p">{item.description}</p>
              <a href={item.urlButton} className="each-slide__left-content-link-btn" target="_blank">
                Descargar Joy App
              </a>
            </div>
            <div className="each-slide__right-content">
              <img
                src={`${process.env.REACT_APP_IMAGES_URL}${item.urlImg}`}
                alt={item.title}
                className="each-slide__right-content-img"
              />
            </div>
          </div>
        </div>
      ))
    }
    return <></>
  }
  return (
    <div className="big-slide">
      <Slide {...properties} autoplay={false} >
        {buildSliders()}
      </Slide>
      <img src={ScrollIcon} alt="scroll" className="scroll-icon" style={{ width: 30 }} />
    </div>
  )
}

BigSlide.propTypes = {
  data: PropTypes.array,
}

BigSlide.defaultProps = {
  data: [],
}
