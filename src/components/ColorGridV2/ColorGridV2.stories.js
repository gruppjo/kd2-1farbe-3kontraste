import React from 'react';

/* STORYBOOK & PLUGINS */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

/* COMPONENTS */
import ColorGridV2 from './ColorGridV2';

/* STORIES */
storiesOf('ColorGridV2', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ColorGridV2>
      {text('text', 'Default ColorGridV2')}
    </ColorGridV2>
  ));
