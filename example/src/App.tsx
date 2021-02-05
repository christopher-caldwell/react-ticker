import React from 'react'

import { Ticker, TickerItem } from '@caldwell619/react-ticker'
import '@caldwell619/react-ticker/dist/index.css'

const tickerItems: TickerItem[] = [
  {
    id: '123',
    text: 'Something notable'
  },
  {
    id: '1234',
    text: 'Something notable'
  }
]
const App = () => {
  return <Ticker slideSpeed='30s' items={tickerItems} />
}

export default App
