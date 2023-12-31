import React from 'react'
import { NavButton } from './Button'
import styles from './Header.module.css'

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <NavButton variant="ghost" className={styles.logo} to="/">
            <img src="/logo.png"/>
          </NavButton>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
