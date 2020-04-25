import React from 'react'
import {render, cleanup} from '@testing-library/react'
import App from './App'

afterEach(cleanup)

test('snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment(<App />)).toMatchSnapshot()
});
