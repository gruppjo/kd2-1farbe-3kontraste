import React from 'react';

/* STORYBOOK & PLUGINS */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

/* COMPONENTS */
import ColorGridBerghain from './ColorGridBerghain';

/* STORIES */
storiesOf('ColorGridBerghain', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ColorGridBerghain>
      {text('text', 'Default ColorGridBerghain')}
    </ColorGridBerghain>
  ));
