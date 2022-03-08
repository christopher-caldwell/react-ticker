import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Ticker, TickerItem } from '@caldwell619/react-ticker'
import '@caldwell619/react-ticker/dist/index.css'

import styles from './App.module.css'

const tickerItems: TickerItem[] = [
  {
    id: uuid(),
    text: 'Something notable',
  },
  {
    id: uuid(),
    text: 'Something notable',
  },
]
const App = () => {
  const [itemText, setItemText] = useState('')

  const [mutableTickerItems, setMutableTickerItems] = useState([...tickerItems])

  const addToList = () => {
    if (itemText === '') return
    setMutableTickerItems(currentItems => [...currentItems, { id: uuid(), text: itemText }])
    setItemText('')
  }

  return (
    <>
      <Ticker slideSpeed='30s' items={mutableTickerItems} />
      <main className={styles.main}>
        <h1>React Ticker</h1>
        <p>Light, simple component for creating news room like tickers.</p>
        <div className={styles.container}>
          <h2>Add to ticker</h2>
          <div className={styles.actionContainer}>
            <input className={styles.textInput} value={itemText} onChange={e => setItemText(e.target.value)} />
            <button className={styles.addButton} onClick={addToList}>
              Add
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
