# @caldwell619/react-ticker

[![NPM](https://img.shields.io/npm/v/@caldwell619/react-ticker.svg)](https://www.npmjs.com/package/@caldwell619/react-ticker) [![NPM](https://img.shields.io/bundlephobia/min/@caldwell619/react-ticker)](https://www.npmjs.com/package/@caldwell619/react-ticker) [![](https://img.shields.io/github/last-commit/christopher-caldwell/react-ticker)]() [![](https://img.shields.io/npm/types/typescript)]()

A tiny utility to show continually horizontal scrolling text in React web apps

## Install

```bash
yarn add @caldwell619/react-ticker

npm install --save @caldwell619/react-ticker
```

## Usage

It's supposed to be easy. Please submit an issue if it's not.

### Base Bones

This example will expand to it's container, and scroll one item across the small box.

```tsx
import React from 'react'
import { Ticker, TickerItem } from '@caldwell619/react-ticker'
// Must import the styles
import '@caldwell619/react-ticker/dist/index.css'

const itemsToScroll: TickerItem[] = [
  {
    id: '123',
    text: 'Something you wish to scroll indefinitely across the screen',
  },
]

const App = () => <Ticker items={itemsToScroll} />
```

## Props

The `TickerProps` and `TickerItem` interfaces are exported for convenience.

### TickerProps

These are the props given to the main export.

| Name         | Type                                 |      Required      | Purpose                                                                                                          |
| ------------ | ------------------------------------ | :----------------: | ---------------------------------------------------------------------------------------------------------------- |
| `items`      | `TickerItem[]`                       | :white_check_mark: | All of the items that will scroll across the element.                                                                                                                |
| `position`   | `top` or `bottom`                    |        :x:         | If provided, will glue the ticker to either the top or the bottom of the viewport                                |
| `slideSpeed` | `CSSProperties['animationDuration']` |        :x:         | The duration the **entire** animation will take. This takes some tweaking, especially with various screen sizes. |

### TickerItem

Each individual item that will represent a block of text scrolling across the screen

| Name   | Type     |      Required      | Purpose                                          |
| ------ | -------- | :----------------: | ------------------------------------------------ |
| `text` | `string` | :white_check_mark: | The text that gets scrolled                      |
| `id`   | `string` |        :x:         | If provided, this is used as the `key` for React |

## License

ISC © [christopher-caldwell](https://github.com/christopher-caldwell)
