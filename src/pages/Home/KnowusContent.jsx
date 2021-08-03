import googlePlayBtn from 'Assets/images/google-play-btn.png'
import appStoreBtn from 'Assets/images/app-store-btn.png'
import './styles.scss'

export default function KnowusContent() {
  return (
    <div className="knowus-container__video-container">
      <div className="knowus-container__left">
        <h1 className="knowus-container__h1">¡Estás a un clic de la diversión!</h1>
        <h2 className="knowus-container__h2">
          Descarga Joy App y comienza a divertirte con todo lo que tenemos para ti.
        </h2>
        <p className="knowus-container__p">
          <span className="knowus-container__p-span">•</span> 250 puntos de regalo por registrarte
        </p>
        <p className="knowus-container__p">
          <span className="knowus-container__p-span">•</span> Participación en diferentes promos
        </p>
        <p className="knowus-container__p">
          <span className="knowus-container__p-span">•</span> Canje de tus puntos por recompensas exclusivas
        </p>
        <p className="knowus-container__p">
          <span className="knowus-container__p-span">•</span> Contenido exclusivo de tus marcas favs
        </p>
        <div className="knowus-container__stores-btns">
          <a href="#">
            <img src={appStoreBtn} className="knowus-container__store-btn" />
          </a>
          <a href="#">
            <img src={googlePlayBtn} className="knowus-container__store-btn" />
          </a>
        </div>
      </div>
      <div className="knowus-container__right">
        <video src="http://exit109.com/~dnn/clips/RW20seconds_1.mp4" className="knowus-container__right-video" controls>
          No video support in this browser.
        </video>
      </div>
    </div>
  )
}
