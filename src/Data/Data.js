import {
    UilEstate,
    UilClipboardAlt,
    UilChart,
    UilPackage,
    UilInfoCircle,
    UilCalculatorAlt,
    UilUser,
    UilStore,
    UilBuilding
} from '@iconscout/react-unicons';

export const SidebarData = [
  {
      title: 'Dashboard',
      icon: <UilEstate />,
      para: 'View your business performance at a glance with real-time insights.',
  },
  {
      title: 'Micro ',
      icon: <UilUser />,
      para: 'Track essential metrics for micro-businesses to support growth.',
  },
  {
      title: 'Small',
      icon: <UilStore />,
      para: 'Analyze data and trends tailored for small business needs.',
  },
  {
      title: 'Medium',
      icon: <UilBuilding />,
      para: 'Access insights for medium-sized enterprises to drive success.',
  },
  {
      title: 'Loan Calculator',
      icon: <UilCalculatorAlt />,
      para: 'Estimate your monthly loan installments easily and accurately.',
  },
];


export const SidebarFooter = [
    {
      title: 'About',
      icon: <UilInfoCircle />,
      para: 'Discover insights to drive your business forward!',

      
    }
];

export const cardsDataMicro = [
    {
      title: "Savings Account",
      color: {
         backGround: "#39F8CE",
      },
      barValue: 70,
      url:"https://public.tableau.com/shared/XDRJN5884?:display_count=n&:origin=viz_share_link",
      value: "1835", /*1778 + 1800 + 1824 + 1558 + 1573 + 1574*/ /*Monthly report*/
      png: UilChart,   /*PercentIncrease = [(newvalue - originalvalue)/originalvalue] x 100*/
      percent: "bank account at a retail bank.",  //                      [(1574-1573) / 1573] x 100 = 0.063
    },
    {
      title: "Personal Loan",
      color: {
        backGround: "#39F8CE8",
      },
      barValue: 70,
      url:"https://public.tableau.com/shared/TR65MHNQG?:display_count=n&:origin=viz_share_link",
      value: "487", /*444 + 446 + 443 + 442 + 440 + 445*/
      png: UilChart,
      percent: "a borrowed money for personal needs.", // [(445-440) / 440] x 100 = 1.13%

    },
    {
      title: "Non-life Insurance",
      color: {
        backGround: "#39F8CE8",
      },
      barValue: 70,
      url:"https://public.tableau.com/shared/QK9KM2Z5S?:display_count=n&:origin=viz_share_link",
      value: "65", /*31 + 32 + 33 + 58 + 59 + 62*/
      png: UilChart,
      percent: "losses incurred from a financial event.", // [(62-59) / 59] x 100 = 5.08%

    },
    {
      title: "Investment",
      color: {
        backGround: "#39F8CE8",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      url:"https://public.tableau.com/shared/MG555BBXN?:display_count=n&:origin=viz_share_link",
      value: "23", /*22 + 22 + 22 + 22 + 22 + 22*/
      png: UilChart,
      percent: "money expenditure for profit.", // [(22-22) / 22] x 100 = 0% 

    },
];

export const cardsDataSmall = [
  {
    title: "Savings Account",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/shared/536CWHFXG?:display_count=n&:origin=viz_share_link",
    value: "1694", /*1677 + 1672 + 1671 + 1617 + 1618 + 1609*/
    png: UilChart,
    percent: "bank account at a retail bank.", // [(1609-1618) / 1618] x 100 = -0.55%
  },
  {
    title: "Personal Loan",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/shared/P59T6JMM6?:display_count=n&:origin=viz_share_link",
    value: "961", /*909 + 912 + 900 + 889 + 891 + 895*/
    png: UilChart,
    percent: "a borrowed money for personal needs.", // [(895-891) / 891] x 100 = 0.44%

  },
  {
    title: "Non-life Insurance",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/shared/CZFF69MQD?:display_count=n&:origin=viz_share_link",
    value: "159", /*67 + 72 + 75 + 146 + 149 + 150*/
    png: UilChart,
    percent: "losses incurred from a financial event.", // [(150-149) / 149] x 100 = 0.67%

  },
  {
    title: "Investment",
    color: {
      backGround: "#39F8CE8",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    url:"https://public.tableau.com/shared/GGM7WRRG7?:display_count=n&:origin=viz_share_link",
    value: "96", /*92 + 93 + 91 + 93 + 94 + 92*/
    png: UilChart,
    percent: "money expenditure for profit.", // [(92-94) / 94] x 100 = -2.12% 

  },

];
export const cardsDataMedium = [
  {
    title: "Savings Account",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/shared/5DXC6KWHW?:display_count=n&:origin=viz_share_link",
    value: "1410", /*1403 + 1402 + 1402 + 1380 + 1376 + 1374*/
    png: UilChart,
    percent: "bank account at a retail bank.", // [(1374-1376) / 1376] x 100 = -0.14%
  },
  {
    title: "Personal Loan",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/shared/YMSNDMZ2P?:display_count=n&:origin=viz_share_link",
    value: "1149", /*1116 + 1118 + 1108 + 1113 + 1117 + 1122*/
    png: UilChart,
    percent: "borrowed money for personal needs.", // [(1122-1117) / 1117] x 100 = 0.44%

  },
  {
    title: "Non-life Insurance",
    color: {
      backGround: "#39F8CE8",
    },
    barValue: 70,
    url:"https://public.tableau.com/shared/ZN6G5TZH5?:display_count=n&:origin=viz_share_link",
    value: "305", /*194 + 198 + 206 + 268 + 274 + 283*/
    png: UilChart,
    percent: "losses incurred from a financial event.", // [(283-274) / 274] x 100 = 3.28%

  },
  {
    title: "Investment",
    color: {
      backGround: "#39F8CE8",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    url:"https://public.tableau.com/shared/ZY4QYF8K6?:display_count=n&:origin=viz_share_link",
    value: "261", /*251 + 250 + 247 + 249 + 250 + 255*/
    png: UilChart,
    percent: "money expenditure for profit.", // [(255-250) / 250] x 100 = 2%

  },
];