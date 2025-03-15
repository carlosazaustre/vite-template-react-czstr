import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('<Home />', () => {
  it('renders the Home component', () => {
    render(<Home />)
    const headingElement = screen.getByText(/Home Page/i)
    expect(headingElement).toBeInTheDocument()
  })
})
