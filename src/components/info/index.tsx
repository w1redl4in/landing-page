import React from 'react';
import { Button } from '../button/styles';
import { InfoData } from './green-info';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  BtnWrap,
  Heading,
  Subtitle,
  TopLine,
  Column2,
  Img,
  ImgWrap,
} from './styles';

const Info: React.FC<InfoData> = ({
  alt,
  buttonLabel,
  darkText,
  description,
  headLine,
  id,
  img,
  imgStart,
  lightBg,
  lightText,
  topLine,
  primary,
  dark,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to="home"
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
