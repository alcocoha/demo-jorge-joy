import { useRef, useEffect, useState } from 'react'
import { isNull } from 'lodash' // VERIFICAR LODASH EN EL BUILD
import { useParams, useHistory } from 'react-router-dom'
import { Header, BigSlide, Rewards, MultipleSlide, CommentsSlide } from 'Components'
import KnowusContent from './KnowusContent'
import RatingContent from './RatingContent'
import btnTop from 'Assets/images/btn-top.svg'
import { postTokenData, getData } from 'Api'
import './styles.scss'

export default function Home() {

  const { section } = useParams()
  const history = useHistory()

  const [bannersData, setBannersData] = useState(null)
  const [rewardsData, setRewardsData] = useState(null)
  const [promosData, setPromosData] = useState(null)
  const [reviewsData, setReviewsData] = useState(null)
  const [dataComplete, setDataComplete] = useState(false)

  const knowus = useRef()
  const rewards = useRef()
  const promos = useRef()
  const rating = useRef()
  const init = useRef()

  const sectionTop = {
    conocejoyapp: knowus?.current?.offsetTop,
    recompensas: rewards?.current?.offsetTop,
    promos: promos?.current?.offsetTop,
    calificanos: rating?.current?.offsetTop,
    inicio: init?.current?.offsetTop,
  }

  const handleScrollFromMenu = () => {
    window.scrollTo({ behavior: 'smooth', top: sectionTop[section] - 90 })
  }

  const handleGoTop = (e) => {
    e.preventDefault()
    if (window.location.pathname === '/inicio') {
      window.scrollTo({ behavior: 'smooth', top: sectionTop['inicio'] - 90 })
    }
    history.push('/inicio')
  }

  const setMainState = async () => {
    if (isNull(bannersData)) {
      const bannersReq = await getData('api/banners')
      setBannersData(bannersReq?.data)
    }
    if (isNull(rewardsData)) {
      const rewardsReq = await getData('api/rewards')
      setRewardsData(rewardsReq?.data)
    }
    if (isNull(promosData)) {
      const promosReq = await getData('api/promos')
      setPromosData(promosReq?.data)
    }
    if (isNull(reviewsData)) {
      const reviewsReq = await getData('api/reviews')
      setReviewsData(reviewsReq?.data)
    }
    setDataComplete(true)
  }

  const getPageData = async () => {
    if (isNull(localStorage.getItem('token'))) {

      /**
       * DESCOMENTAR ESTE CÓDIGO UNA VEZ RESUELTO EL CORS ERROR
      */
      // const token = await postTokenData('oauth/token', {
      //   grant_type: 'client_credentials',
      //   client_id: process.env.REACT_APP_CLIENT_ID,
      //   client_secret: process.env.REACT_APP_CLIENT_SECRET,
      // })
      // localStorage.setItem('token', token)

      /**
       * COMENTAR ESTE CÓDIGO UNA VEZ RESUELTO EL CORS ERROR
      */
      localStorage.setItem(
        'token',
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5M2Y0MmJiMi1lMTZmLTRiMmItYmVhOC0wM2YxODRhZWU0Y2YiLCJqdGkiOiIxOGFlMjI0MzhjZmNlMmU1ZjgxODAyNWVmZGIzNzJlNjQ5YmE2ZWExM2ZkN2RhM2Q4MTU2ZDQ5MGQ4ODUyNWQzYjc5MWFhMTJiODk2MzhmOSIsImlhdCI6MTYyNzE1NjIwNC4xNzIwMjksIm5iZiI6MTYyNzE1NjIwNC4xNzIwMzMsImV4cCI6MTY1ODY5MjIwNC4xNjMyNDgsInN1YiI6IiIsInNjb3BlcyI6W119.A65r-KFoqgBhFWXaQlZCrkqiAHYq2oAwXJyrS0W_V7uzCFmtgX6iJ37IpaPb75smze_8s-85O9nIdMhxy57azFRTF14LbtB7MjoDwGk5WjJF5zHiWSF3nnHxkM8zsexK7JxkzbKIxNQhOSvgCRjRP_v3OpGG6hX7RGc3BWAX1CDHO0PssuEvUQFaCwaZr0OTSqmpvYvFBcjg7_AE2gmJNjaMHTW7imqdNygmLqmA_SL2aKIt-kt4DlsZHvk294ffF2czzeeUDlc5PaM1gogLlm_iXYid0jbLZyZ3HSeND59__liXTEOiZzEPM7EoqzP9BTGyyCvh-BjLHZLZjnfnt2gNseHgXmbiB8xNGK6Rl9lWeMnOY5-ICRIL_5roD6FLWEO66CKsZ07yL_csEifjYGxT6C1RXW5Xh3yAh_sLCu1imkGMA6rtLjfciluP0xjeLbbL6iPGywkRVRDoNn2IG0DDbGLPwi6xJ3XCXbDVaZjPW2XGWL8ryh3VttG0JxEd5ErhMeG6iZIfZ8xl9r6QuUzdn2lwXTiY0wS_0c8JAEIsEKtF_9vKIMgsk5bpBKkxK8Hd9vvMowFe-GOwkr0uZUsiE7v0WnQnew8qR9EKUt3MHT407Hcjt7MWx5JzwXZhGPhenQEO0LKvRGDFdiK7t2vlncBUVsYubdOpEk-_aVc'
      )
    }
    setMainState()
  }

  useEffect(() => {
    if (!dataComplete) {
      getPageData()
    }
    handleScrollFromMenu()
  }, [section, dataComplete])

  return (
    <div>
      <div className="header-container" ref={init}>
        <Header />
      </div>
      <div className="bigslide-container">
        <BigSlide data={bannersData} />
      </div>
      <div className="rewards-container" ref={rewards}>
        <div className="rewards-container__rewards">
          <h1 className="rewards-container__h1">¡Sí! Estas pueden ser tus recompensas 1</h1>
          <Rewards data={rewardsData}/>
        </div>
        <div className="rewards-container__bg"></div>
      </div>
      <div className="knowus-container" ref={knowus}>
        <KnowusContent />
      </div>
      <div className="promos-container" ref={promos}>
        <h1 className="promos-container__h1">¿Alguien dijo promos?</h1>
        <h2 className="promos-container__h2">Tú eliges si quieres participar en una o en todas.</h2>
        <MultipleSlide data={promosData}/>
      </div>
      <div className="comments-container">
        <h1 className="comments-container__h1">Dicen las buenas lenguas que...</h1>
        <CommentsSlide data={reviewsData}/>
      </div>
      <div className="rating-container" ref={rating}>
        <RatingContent />
      </div>
      <div className="btn-top-container">
        <a href="#" onClick={handleGoTop}>
          <img src={btnTop} />
        </a>
      </div>
    </div>
  )
}
