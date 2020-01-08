import styled from 'styled-components'

import { device } from '../../utils/brakpoints'

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 5rem auto;
  width: 100%;
  max-width: 128rem;
  &:last-child{
    margin-bottom: 0;
  }
  @media ${device.tablet}{
    flex-wrap: nowrap;
  }
`

export const ImageCard = styled.div`
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
  height: 560px;
  margin-bottom: 3rem;
  position: relative;
  div{
    width: 100%;
    height: 100%;
    max-width: 460px;
  }
  @media ${device.tablet}{
    order: ${({order}) => order || 'initial'};
    flex: 0 0 45%;
  }
  @media ${device.tablet}{
    flex: 0 0 50%;
  }
`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  text-align: center;
  max-width: 100%;
  padding: 0;
  margin:0 auto;
  .content-head{
    font-weight: 300;
  }
  .content-body{
    p{
      margin: 0;
      margin-bottom: 2rem;
      line-height: 1.4;
      color: ${({theme}) => theme.card.bodyText};
    }
    strong{
      font-weight: 500;
    }
  }
  .content-footer{
    span, a{
      font-size: 1.4rem;
      color: ${({theme}) => theme.card.footerText};
    }
  }
  @media ${device.tablet}{
    max-width: 560px;
    padding: 0 20px;
  }
  @media ${device.laptop}{
    max-width: 560px;
    padding: 0 40px;
  }
`
