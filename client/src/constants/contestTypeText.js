import { CONTEST_TYPE } from './';
import CompanyNames from '../images/Company-Names.png'
import Logos from '../images/Logos.png'
import Taglines from '../images/Taglines.png'
const contestTypes = [
  {
    title: 'Name',
    img: [CompanyNames],
    text: 'Get up and running with the perfect name. ',
    to: '/startcontest',
    search: 'type='+ CONTEST_TYPE.NAME,
  },
  {
    title: 'Logo',
    img: [Logos],
    text: 'Kickstart your venture with a unique, memorable logo ',
    to: '/startcontest',
    search: 'type='+ CONTEST_TYPE.LOGO,
  },
  {
    title: 'Tagline or Slogan',
    img: [Taglines],
    text: 'Connect deeply with your target audience with an on-target tagline ',
    to: '/startcontest',
    search: 'type='+ CONTEST_TYPE.TAGLINE,
  },
];

const inBundleTypes = [
  {
    img: [CompanyNames,Logos],
    title:"Name + Logo",
    text:"Get the essentials needed to establish your brand together and save",
    to: "/startcontest",
    search: 'type='+ CONTEST_TYPE.NAME_LOGO,
  },
  {
    img: [CompanyNames,Taglines],
    title:"Name + Tagline",
    text:"Communicate your vision with the perfect Name/Tagline combo.",
    to: '/startcontest',
    search: 'type='+ CONTEST_TYPE.NAME_TAGLINE,
  },
  {
    img: [Logos,Taglines],
    title:"Logo + Tagline",
    text:"Description for Logo + Tagline will come here",
    to: '/startcontest',
    search: 'type='+ CONTEST_TYPE.LOGO_TAGLINE,
  },
  {
    img: [CompanyNames,Logos,Taglines],
    title:"Name + Logo + Tagline",
    text:"Establish your entire brand identity and save with this bundle.",
    to: '/startcontest',
    search: 'type='+ CONTEST_TYPE.NAME_LOGO_TAGLINE,
  },
];

const headerTypeCardsText = new Map([
  ['categories', {
    title: {text:'Our Most Popular ', highlightText: 'Categories'},
    description: 'Pick from our most popular categories, launch a contest and begin receiving submissions right away',
  }],
  ['bundle', {
    title: {text: 'Save With Our Bundle Packages ', highlightText: ''},
    description: 'Launch multiple contests and pay a discounted bundle price',
  }]
]);


export { contestTypes, inBundleTypes,headerTypeCardsText }