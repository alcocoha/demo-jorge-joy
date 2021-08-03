import React from 'react'
import { render, screen } from '@testing-library/react'
import BigSlide from './'

const mockData = [
  {
    id: 1,
    title: 'Elnora Brown',
    description: 'Eos dolores et quis cum.',
    urlButton: 'http://king.info/est-voluptates-suscipit-est-quasi.html',
    urlImg: '/home/ubuntu/joy-backend-test/html/storage/images/6ee8c08cc6b8968d1b5397a129ca3eec.png',
    order: 1,
    status: true,
  },
  {
    id: 2,
    title: 'Amari Kilback',
    description: 'Rem dolores mollitia sed repudiandae illo.',
    urlButton: 'http://hills.com/eum-et-et-facilis-autem-possimus-pariatur-atque',
    urlImg: '/home/ubuntu/joy-backend-test/html/storage/images/8720b5c7f0a15449e8a848518bb2e70c.png',
    order: 1,
    status: true,
  },
]

beforeEach(() => {
  render(<BigSlide data={mockData} />)
})

test('render bigslide with data', () => {
  expect(screen.getByRole('heading')).toHaveTextContent('Elnora Brown')
  expect(screen.getByRole('link')).toHaveTextContent('Descargar Joy App')
  expect(screen.getByAltText('preview')).toBeInTheDocument()
})
