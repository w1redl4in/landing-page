import { GreenCar, GreenGraph, GreenPaper, GreenPig } from '../../images';

export interface InfoData {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headLine: string;
  description: string;
  buttonLabel: string;
  imgStart: boolean;
  img: string;
  alt: string;
  dark: boolean;
  primary: boolean;
  darkText: boolean;
}

export const greenInfoData1: InfoData = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Premium Bank',
  headLine: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: GreenCar,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true,
};

export const greenInfoData2: InfoData = {
  id: 'discover',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Unlimited Access',
  headLine: 'Login to your account at any time',
  description:
    'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: GreenGraph,
  alt: 'Piggybank',
  dark: true,
  primary: true,
  darkText: false,
};

export const greenInfoData3: InfoData = {
  id: 'services',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join Our Team',
  headLine: 'Creating an account is extremely easy',
  description: `Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready`,
  buttonLabel: 'Start Now',
  imgStart: false,
  img: GreenPaper,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};

export const greenInfoData4: InfoData = {
  id: 'signup',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headLine: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: true,
  img: GreenPig,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};
