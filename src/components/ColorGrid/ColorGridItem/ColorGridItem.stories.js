import React from 'react';

/* STORYBOOK & PLUGINS */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

/* COMPONENTS */
import ColorGridItem from './ColorGridItem';

/* STORIES */
storiesOf('ColorGridItem', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ColorGridItem>
      {text('text', 'Default ColorGridItem')}
    </ColorGridItem>
  ));
