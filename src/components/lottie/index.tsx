import React, { useCallback } from 'react';
import Lottie from 'react-lottie';
import GreenMoney from '../../lottie/green-money.json';
import BlueMoney from '../../lottie/blue-money.json';
import { useTheme } from '../../hooks/theme';
import { LottieContainer } from './styles';

const LottieComponent: React.FC = () => {
  const { theme } = useTheme();
  const handleLottie = useCallback(() => {
    return theme === 'darkMode' ? GreenMoney : BlueMoney;
  }, [theme]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: handleLottie(),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LottieContainer>
      <Lottie options={defaultOptions} height={60} width={60} title="lottie" />
      dolla.
    </LottieContainer>
  );
};

export default LottieComponent;
