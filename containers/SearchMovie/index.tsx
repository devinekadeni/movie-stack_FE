import { useState, useRef } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import { Wrapper, StyledSearchIcon, Input } from './styles'

const SearchMovie: React.FC = () => {
  const [isSearchMode, setIsSearchMode] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  return (
    <Wrapper>
      <StyledSearchIcon
        $isHidden={isSearchMode}
        onClick={() => {
          setIsSearchMode(true)
          inputRef.current?.focus()
        }}
      />
      <Input
        $isHidden={!isSearchMode}
        inputRef={inputRef}
        value={searchKeyword}
        onChange={handleSearch}
        onBlur={() => {
          if (!inputRef.current?.value) {
            setIsSearchMode(false)
          }
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon size="1.8rem" />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="start">
            {searchKeyword && (
              <CloseIcon
                size="1.8rem"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setSearchKeyword('')
                  setIsSearchMode(false)
                }}
              />
            )}
          </InputAdornment>
        }
      />
    </Wrapper>
  )
}

export default SearchMovie
