import React from 'react';

/* STORYBOOK & PLUGINS */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

/* COMPONENTS */
import ColorGridFont from './ColorGridFont';

/* STORIES */
storiesOf('ColorGridFont', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ColorGridFont>
      {text('text', 'Default ColorGridFont')}
    </ColorGridFont>
  ));
