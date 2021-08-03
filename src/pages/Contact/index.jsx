import { useState, useEffect, useRef } from 'react'
import { postData } from 'Api'
import { ModalConfirm } from 'Components'
import ReCAPTCHA from 'react-google-recaptcha'
import './styles.scss'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [sendMessageTitle, setSendMessageTitle] = useState('')
  const [sendMessageText, setSendMessageText] = useState('')
  const [sendMessageButton, setSendMessageButton] = useState(false)
  const [validateCaptcha, setValidateCaptcha] = useState(false)
  const [recaptchaVisible, setRecaptchaVisible] = useState(true)

  const captcha = useRef(null)

  const sendMessage = async () => {
    if (name === '') {
      setError('Debes ingresar tu nombre')
      return
    }
    if (email === '') {
      setError('Debes ingresar tu correo')
      return
    }
    if (email !== '') {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const validateEmail = re.test(String(email).toLowerCase())
      if (!validateEmail) {
        setError('Debes ingresar un correo valido')
        return
      }
    }
    if (message === '') {
      setError('Debes ingresar un mensaje')
      return
    }
    if (!validateCaptcha) {
      setError('Debes aceptar el reCAPTCHA')
      return
    }

    setSendMessageTitle('Enviando...')
    setSendMessageText('Se esta haciendo el envio de tu correo, espera un momento.')
    setSendMessageButton(false)
    setError('')
    setOpenModal(true)
    setRecaptchaVisible(false)

    const bannersReq = await postData('api/contact', {
      name: name,
      email: email,
      msj: message,
    })
    setRecaptchaVisible(true)

    if (bannersReq.success) {
      setSendMessageTitle('¡Yeeey!')
      setSendMessageText('Recibimos tu comentario, muy pronto te contestaremos.')
      setSendMessageButton(true)
      setName('')
      setEmail('')
      setMessage('')
      setValidateCaptcha(false)
    } else {
      setSendMessageTitle('¡Ups! Algo falló.')
      setSendMessageText('Revisa que todas las casillas tengan la información completa.')
      setSendMessageButton(true)
      setValidateCaptcha(false)
    }
  }

  const handleSendData = (e) => {
    e.preventDefault()
    sendMessage()
  }

  const onChangeRecaptcha = () => {
    if (captcha.current.getValue()) {
      setValidateCaptcha(true)
    } else {
      setValidateCaptcha(false)
    }
  }

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: -90 })
  }, [])

  return (
    <>
      {openModal && (
        <ModalConfirm
          title={sendMessageTitle}
          text={sendMessageText}
          visibleButton={sendMessageButton}
          handleOk={() => setOpenModal(false)}
        />
      )}
      <div className="contact-form">
        <h1 className="contact-form__h1">Contacto</h1>
        <h2 className="contact-form__h2">¿Tienes algún comentario o sugerencia de la app?</h2>
        {error !== '' && <p className="contact-form__error">{error}</p>}
        <form className="form" onSubmit={handleSendData}>
          <div className="form-controller">
            <label className="form-label">Nombre(s)</label>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              className="form-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-controller">
            <label className="form-label">Correo electrónico</label>
            <input
              type="text"
              placeholder="Nombre@correo.com"
              value={email}
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-controller">
            <label className="form-label">Tu mensaje</label>
            <textarea
              className="form-input"
              placeholder="Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-controller form-controller__button">
            <div className="form-controller__recaptcha-container">
              {recaptchaVisible && (
                <ReCAPTCHA
                  ref={captcha}
                  sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                  onChange={onChangeRecaptcha}
                />
              )}
            </div>
            <button type="submit" className="form-button">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
