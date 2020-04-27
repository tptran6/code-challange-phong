import React from 'react'
import {render, cleanup} from '@testing-library/react'
import App from './App'

// Testing CI implementation
afterEach(cleanup)

test('snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment(<App />)).toMatchSnapshot()
});
