import styled from 'styled-components'
import Image from 'next/image'

const Poster = styled(Image).attrs({ layout: 'fill' })`
  background-color: #f0f0f0;
  object-fit: contain;
  border-radius: 0.75em 0.75em 3em;
  border: 1px solid #f4f4f4;
`

export default Poster
