import googlePlayBtn from 'Assets/images/google-play-btn.png'
import appStoreBtn from 'Assets/images/app-store-btn.png'
import stars from 'Assets/images/stars.svg'
import './styles.scss'

export default function RatingContent() {
  return (
    <>
      <h1 className="rating-container__h1">Califícanos</h1>
      <h2 className="rating-container__h2">¡Venga, hagamos brillar esas 5 estrellas!</h2>
      <div className="rating-container__stars">
        <img src={stars} alt=""  className="rating-container__stars-img"/>
      </div>
      <h1 className="rating-container__h1">Disponible en:</h1>
      <div className="rating-container__stores-btns">
        <a href="#">
          <img src={appStoreBtn} className="rating-container__store-btn" />
        </a>
        <a href="#">
          <img src={googlePlayBtn} className="rating-container__store-btn" />
        </a>
      </div>
    </>
  )
}
