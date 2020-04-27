import React from 'react'
import {render, cleanup} from '@testing-library/react'
import App from './App'

// Testing CI implementation
afterEach(cleanup)

test('Checks if current rendering matches snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment(<App />)).toMatchSnapshot()
});
