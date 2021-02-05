import React, { useMemo, CSSProperties } from 'react'
import styles from './styles.module.sass'

const sharedPositionProps = {
  position: 'fixed',
}

export const Ticker = ({ position, items, slideSpeed }: TickerProps) => {
  const positionToApply = useMemo(() => {
    if (!position) return {}
    if (position === 'top') {
      return {
        ...sharedPositionProps,
        top: 0,
      }
    }
    return {
      ...sharedPositionProps,
      bottom: 0,
    }
  }, [position])

  const animationDuration = useMemo(() => (slideSpeed ? { animationDuration: slideSpeed } : {}), [slideSpeed])

  return (
    <div style={positionToApply} className={styles.ticker}>
      <div className={styles.tickerList} style={animationDuration}>
        {items.map(({ id, text }, index) => (
          <div className={`${styles.newsticker} ${styles.tickerItem}`} key={id || index}>
            <div className={styles.tickerItem}>
              <div className={styles.title}>{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export interface TickerProps {
  /** Positions the ticker at the top or bottom of the viewport, if left out, will not position at all */
  position?: 'top' | 'bottom'
  items: TickerItem[]
  /** Must be a CSS readable duration
   * @default 10s
   * @example '15s'
   * @example '1s'
   * @example '200ms'
   */
  slideSpeed?: CSSProperties['animationDuration']
}

export interface TickerItem {
  text: string
  /** If present, this will be used as the key, defaults to index */
  id?: string
}
