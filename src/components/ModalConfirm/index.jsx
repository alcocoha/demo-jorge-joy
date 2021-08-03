import PropTypes from 'prop-types'
import './styles.scss'

export default function ModalConfirm(props) {
  const { title, text, handleOk, visibleButton } = props
  return (
    <div className="modal-confirm">
      <div className="modal-confirm__container">
        <h1 className="modal-confirm__h1">{title}</h1>
        <p className="modal-confirm__p">{text}</p>
        {visibleButton && (
          <button onClick={handleOk} className="modal-confirm__button">
            OK
          </button>
        )}
      </div>
    </div>
  )
}

ModalConfirm.propTypes = {
  visibleButton: PropTypes.bool,
}

ModalConfirm.defaultProps = {
  visibleButton: false,
}
