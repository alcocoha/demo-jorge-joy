const token = localStorage.getItem('token')

const HEADERS = {
  Accept: 'application/json',
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
}

export const GET = () => {
  return {
    method: 'GET',
    headers: new Headers(HEADERS),
    mode: 'cors',
  }
}

export const POST = (body = {}) => ({
  method: 'POST',
  headers: new Headers(HEADERS),
  mode: 'cors',
  body: JSON.stringify(body),
})

export const POST_TOKEN = (body = {}) => ({
  method: 'POST',
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
  mode: 'cors',
  body: JSON.stringify(body),
})
