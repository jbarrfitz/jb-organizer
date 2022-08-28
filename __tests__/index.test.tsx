import { render, screen, getByText } from '@testing-library/react'
import Index from '../pages/index'

describe('Index', () => {
  it('renders a heading', () => {
    render(<Index />)

    const heading = screen.getByRole('heading', {
        name: "Welcome to Next.js!"
    })

    expect(heading).toBeInTheDocument()
  })
})
