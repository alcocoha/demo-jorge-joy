import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Collapse from './'

beforeEach(() => {
  const mockData = [
    {
      id: 1,
      open: false,
      title: 'Doloremque placeat.',
      content: <p>foo</p>,
    },
    {
      id: 1,
      open: false,
      title: 'Dicta consequuntur',
      content: <p>bar</p>,
    },
  ]
  render(<Collapse elements={mockData} />)
})

test('render collapse with data', () => {
  expect(screen.getByText(/Doloremque placeat./i)).toBeInTheDocument()
  expect(screen.getByText(/foo/i)).toBeInTheDocument()
})

test('click item', () => {
  fireEvent.click(screen.getByText(/Doloremque placeat./i))
  expect(screen.getByAltText('first')).toBeInTheDocument()
})
