import React from 'react';

/* STORYBOOK & PLUGINS */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

/* COMPONENTS */
import ColorGridBroken from './ColorGridBroken';

/* STORIES */
storiesOf('ColorGridBroken', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ColorGridBroken>
      {text('text', 'Default ColorGridBroken')}
    </ColorGridBroken>
  ));
