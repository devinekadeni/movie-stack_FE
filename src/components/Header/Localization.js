import React from 'react'
import { LocalButton } from './styles'

const Localization = ({ activeLocale }) => {
  return (
    <div>
      <LocalButton selected={activeLocale === 'en'}>EN</LocalButton>|
      <LocalButton selected={activeLocale === 'id'}>ID</LocalButton>
    </div>
  )
}

export default Localization
