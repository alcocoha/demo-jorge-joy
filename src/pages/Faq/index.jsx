import { useState, useEffect } from 'react'
import { Collapse } from 'Components'
import { getData } from 'Api'
import { isUndefined } from 'lodash'
import './styles.scss'

export default function Faq() {
  const [faqsList, setFaqList] = useState([])
  const [dataComplete, setDataComplete] = useState(false)

  const getFaqs = async () => {
    const faqsReq = await getData('api/faqs')
    if (!isUndefined(faqsReq)) {
      const faqsFormatter = faqsReq?.data?.map((item) => ({
        id: item.order,
        open: false,
        title: item.question_faqs,
        content: <p>{item.answer_faqs}</p>,
      }))
      setFaqList(faqsFormatter)
    }
    setDataComplete(true)
  }

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: -90 })
    if (!dataComplete) {
      getFaqs()
    }
  }, [dataComplete])

  return (
    <div className="faq-collapse">
      <h1 className="faq-collapse__h1">Tú preguntas, nosotros respondemos.</h1>
      <Collapse elements={faqsList} />
    </div>
  )
}
