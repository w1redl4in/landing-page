import React, { useCallback, useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
} from './styles';
import Video from '../../videos/video.mp4';
import { Button } from 'react-scroll';

const Hero: React.FC = () => {
  const [hover, setHover] = useState(false);

  const onHover = useCallback(() => {
    setHover(!hover);
  }, [hover]);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
