# @caldwell619/react-ticker

[![NPM](https://img.shields.io/npm/v/@caldwell619/react-ticker.svg)](https://www.npmjs.com/package/@caldwell619/react-ticker) [![NPM](https://img.shields.io/bundlephobia/min/@caldwell619/react-ticker)](https://www.npmjs.com/package/@caldwell619/react-ticker) [![](https://img.shields.io/github/last-commit/christopher-caldwell/react-ticker)]() [![](https://img.shields.io/npm/types/typescript)]()

A tiny utility to show continually horizontal scrolling text in React web apps

## Install

```bash
yarn add @caldwell619/react-ticker

npm install --save @caldwell619/react-ticker
```

## Usage

It's supposed to be easy. 

For the bare bones use. This will expand to it's container, and scroll one item across the small box.

```tsx
import React from 'react'
import { Ticker, TickerItem } from '@caldwell619/react-ticker'
// Must import the styles
import '@caldwell619/react-ticker/dist/index.css'

const itemsToScroll: TickerItem[] = [
  {
    id: '123',
    text: 'Something you wish to scroll indefinitely across the screen'
  }
]

const App = () => (
  <Ticker items={itemsToScroll} />
)
```

## License

ISC © [christopher-caldwell](https://github.com/christopher-caldwell)
