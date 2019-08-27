import { CONTEST_TYPE } from './';
const contestTypes = [
  {
    title: 'Name',
    img: 'https://www.squadhelp.com/story_images/contest_types/Company-Names_blue.png',
    text: 'Get up and running with the perfect name. ',
    to: '/startcontest',
    search: 'type='+ CONTEST_TYPE.NAME,
  },
  {
    title: 'Logo',
    img: 'https://www.squadhelp.com/story_images/contest_types/Logos_blue.png',
    text: 'Kickstart your venture with a unique, memorable logo ',
    to: '/startcontest',
    search: 'type='+ CONTEST_TYPE.LOGO,
  },
  {
    title: 'Tagline or Slogan',
    img: 'https://www.squadhelp.com/story_images/contest_types/Taglines_blue.png',
    text: 'Connect deeply with your target audience with an on-target tagline ',
    to: '/startcontest',
    search: 'type='+ CONTEST_TYPE.TAGLINE,
  },
];

export { contestTypes }