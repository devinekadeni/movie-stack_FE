import React, { useState } from 'react'
import DropDown from '@/components/DropDown'
import DropDownMenu from '@/components/DropDown/Menu'

import { SORT_ITEMS } from './helper'
import { Wrapper, HeaderSide, ChevronDownIcon } from './styles'

const SearchPage: React.FC = () => {
  const [sortValue, setSortValue] = useState('popularity.desc')

  return (
    <Wrapper>
      <HeaderSide>
        <h1>MOVIES</h1>
        <DropDown
          variant="outlined"
          label="Sort by"
          value={sortValue}
          onChange={(e) => {
            setSortValue(e.target.value as string)
          }}
          IconComponent={() => <ChevronDownIcon />}
        >
          {SORT_ITEMS.map((sortItem) => (
            <DropDownMenu key={sortItem.value} value={sortItem.value}>
              {sortItem.name}
            </DropDownMenu>
          ))}
        </DropDown>
      </HeaderSide>
    </Wrapper>
  )
}

export default SearchPage
