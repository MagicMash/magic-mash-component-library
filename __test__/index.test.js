import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render( <Home /> )

    const heading = screen.getByRole('heading', {
      name: 'Magic Mash ui-library is on the way mf!!',
    })

    expect(heading).toBeInTheDocument()
  })
})