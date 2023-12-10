import { FigmaIcon, JsIcon, TsIcon } from '../assets';

export const typeOfPlans = [
  {
    typeOfPackage: 'STANDARD',
    planPrice: '59',
    planImg: <JsIcon />,
    activePlans: [
      'One End Products',
      '12 Months Updates',
      '6 Months Of Support',
      'JavaScript Version',
    ],
    inactivePlans: [
      'TypeScript Version',
      'Design Resources',
      'Commercial Application',
    ],
  },
  {
    typeOfPackage: 'PLUS',
    planPrice: '99',
    planImg: <JsIcon />,
    planImg1: <TsIcon />,
    planImg2: <FigmaIcon />,
    activePlans: [
      'One End Products',
      '12 Months Updates',
      '6 Months Of Support',
      'JavaScript Version',
      'TypeScript Version',
      'Design Resources',
    ],
    inactivePlans: ['Commercial Application'],
  },
  {
    typeOfPackage: 'EXTENDED',
    planPrice: '249',
    planImg: <JsIcon />,
    planImg1: <TsIcon />,
    planImg2: <FigmaIcon />,
    activePlans: [
      'One End Products',
      '12 Months Updates',
      '6 Months Of Support',
      'JavaScript Version',
      'TypeScript Version',
      'Design Resources',
      'Commercial Application',
    ],
    inactivePlans: [],
  },
];
