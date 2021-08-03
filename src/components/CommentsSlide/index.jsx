import { Zoom } from 'react-slideshow-image'
import PropTypes from 'prop-types'
import './styles.scss'

const zoomOutProperties = {
  indicators: true,
  scale: 0.4,
  arrows: false,
}

export default function CommentsSlide({ data }) {
  const buildNews = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => (
        <div key={index} className="comment-slide__item" key={index}>
          <div className="comment-slide__comment">
            <h1 className="comment-slide__comment-h1">{item.title}</h1>
            <p className="comment-slide__comment-p">{item.description}</p>
          </div>
        </div>
      ))
    }
    return <></>
  }

  return (
    <div className="comment-slide">
      <Zoom {...zoomOutProperties}>{buildNews()}</Zoom>
    </div>
  )
}

CommentsSlide.propTypes = {
  data: PropTypes.array,
}

CommentsSlide.defaultProps = {
  data: [],
}
