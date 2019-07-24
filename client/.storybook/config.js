import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
 // req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
