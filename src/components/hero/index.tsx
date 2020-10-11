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
import { Button } from '../button/styles';
import { useTheme } from '../../hooks/theme';

import GreenVideo from '../../videos/green.mp4';
import BlueVideo from '../../videos/blue.mp4';

const Hero: React.FC = () => {
  const [hover, setHover] = useState(false);
  const { theme } = useTheme();

  const onHover = useCallback(() => {
    setHover(!hover);
  }, [hover]);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={theme === 'darkMode' ? GreenVideo : BlueVideo}
        />
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
