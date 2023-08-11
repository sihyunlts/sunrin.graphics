import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <BannerLeft>
          선린인터넷고등학교 <br />
          <Medium>콘텐츠디자인과</Medium>
        </BannerLeft>
        <Sunrin src={'/images/sunrinwhite.svg'} />
      </Wrapper>
    </Container>
  )
}

const Sunrin = styled.img`
  width: 52px;
  height: 64px;
`

const Container = styled.div`
  width: 100%;
  height: 478px;
  background-image: url('/images/banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BannerLeft = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;
  color: var(--justWhite);
`

const Medium = styled.span`
  font-weight: 500;
`

export default Banner
