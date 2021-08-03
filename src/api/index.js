import { GET, POST, POST_TOKEN } from './config'

/**
 * Descripción: Método global para peticiones rest a través de fetch
 * @ endPoint: Es el end point del api a solicitar
 * @ verb: Es el verbo HTTP a utilizar
 */
const REST_API = async (endPoint, verb) => {
  try {
    const respond = await fetch(`${process.env.REACT_APP_API_URL}/${endPoint}`, verb)
    if (respond.status === 404 || respond.status === 500) throw new Error('Not 200 response')
    return respond.json()
  } catch (error) {
    console.error('REST API ERROR: ', error)
  }
}

/**
 * Descripción: Método GET para peticiones
 */
export const getData = (endPoint, params) => REST_API(endPoint, GET(params))

/**
 * Descripción: Método POST para peticiones
 */
export const postData = (endPoint, params) => REST_API(endPoint, POST(params))

/**
 * Descripción: Método POST para peticion del token
 */
 export const postTokenData = (endPoint, params) => REST_API(endPoint, POST_TOKEN(params))
