import styled from 'styled-components'

interface Props {
  title: string
  value: string
}

const Wrapper = styled.div`
  display: grid;
  row-gap: 8px;

  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 18px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #8d96aa;
    margin: 0;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 21px;
    color: #212121;
    margin: 0;
  }
`

const TextInfo: React.FC<Props> = ({ title, value }) => {
  return (
    <Wrapper>
      <h5>{title}</h5>
      <p>{value}</p>
    </Wrapper>
  )
}

export default TextInfo
