import { Slide } from 'react-slideshow-image'
import PropTypes from 'prop-types'
import ArrowPrev from 'Assets/images/arrow-left-white.svg'
import ArrowNext from 'Assets/images/arrow-right-white.svg'
import { useWindowSize } from 'Hooks/useWindowResize'
import './styles.scss'
export default function MultipleSlide({ data }) {
  const [width] = useWindowSize()

  const properties = {
    duration: 3000,
    slidesToShow: width < 992 ? 1 : 2,
    slidesToScroll: width < 992 ? 1 : 2,
    autoplay: false,
    prevArrow: (
      <div className="btn-left-container">
        <img src={ArrowPrev} alt="preview" className="btn-left-container__btn"/>
      </div>
    ),
    nextArrow: (
      <div className="btn-right-container">
        <img src={ArrowNext} alt="next" className="btn-right-container__btn"/>
      </div>
    ),
  }

  const buildSliders = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => (
        <div className="multiple-slide__item" key={index}>
          <div className="multiple-slide__container">
            <div className="multiple-slide__container-left">
              <h1 className="multiple-slide__container-h1">
                {item.title} {item.isBrand && <span>&reg;</span>}
              </h1>
              <p className="multiple-slide__container-description">{item.description}</p>
              <a href={item.urlPromo} className="multiple-slide__container-btn" target="_blank">
                Ver promo
              </a>
              <p className="multiple-slide__container-period">{item.expiration_date_promo}</p>
            </div>
            <div className="multiple-slide__container-right">
              <div className="multiple-slide__container-right-bg"></div>
              <img
                src={`${process.env.REACT_APP_IMAGES_URL}${item.urlImg}`}
                alt={item.title}
                className="multiple-slide__container-img"
              />
            </div>
          </div>
        </div>
      ))
    }
    return <></>
  }
  return (
    <div className="multiple-slide">
      <Slide {...properties}>{buildSliders()}</Slide>
    </div>
  )
}

MultipleSlide.propTypes = {
  data: PropTypes.array,
}

MultipleSlide.defaultProps = {
  data: [],
}
