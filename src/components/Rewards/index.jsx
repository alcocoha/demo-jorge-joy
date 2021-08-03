import PropTypes from 'prop-types'
import './styles.scss'

export default function Rewards({ data }) {
  const buildRewards = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => (
        <div className="rewards__img-container">
          <img
            className="rewards__img"
            src={`${process.env.REACT_APP_IMAGES_URL}${item.urlImg}`}
            key={index}
          />
        </div>
      ))
    }
    return <></>
  }

  return (
    <div className="rewards">
      <div className="rewards__scroll">
        {buildRewards()}
      </div>
    </div>
  )
}

Rewards.propTypes = {
  data: PropTypes.array,
}

Rewards.defaultProps = {
  data: [],
}
