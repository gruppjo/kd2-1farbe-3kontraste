import React from 'react';

/* STORYBOOK & PLUGINS */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

/* COMPONENTS */
import ColorGrid from './ColorGrid';

/* STORIES */
storiesOf('ColorGrid', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ColorGrid>
      {text('text', 'Default ColorGrid')}
    </ColorGrid>
  ));
