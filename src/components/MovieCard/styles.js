import styled from 'styled-components'

//Rating
export const RatingWrapper = styled.div`
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    position: absolute;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 14px;
    text-align: center;
    color: #000000;
  }
`

// Movie Card
export const MovieCardWrapper = styled.div`
  width: 144px;
  height: 293px;
  display: grid;
  grid-template-columns: 144px;
  grid-template-rows: 216px 65px;
  row-gap: 15px;
  grid-template-areas:
    'cover'
    'description';
`

export const PosterWrapper = styled.div`
  position: relative;
  grid-area: cover;

  img {
    width: 100%;
    border-radius: 10px 10px 40px 10px;
  }
`

export const Description = styled.div`
  grid-area: description;
  padding: 0 2px;

  h3 {
    margin: 0 0 2px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.85);
  }

  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #838994;
  }
`
