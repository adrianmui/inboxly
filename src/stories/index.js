import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withStyles } from '@material-ui/core';

import { Button, Welcome } from '@storybook/react/demo';
import { Switch } from '../components';
import LeftNav from '../LeftNav';
import Navbar from '../Navbar';

const styles = {};

const Playground = withStyles(styles)(({ children, classes }) => (
  <div classes={classes}>{children}</div>
));

storiesOf('Welcome', module).add('to Storybook', () => (
  <Playground>
    <Welcome showApp={linkTo('Button')} />
    <Button onClick={action('clicked')}>Hello Button</Button>
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </Playground>
));
storiesOf('Input', module).add('Switch', () => <Switch />);
storiesOf('Nav', module)
  .add('App Nav', () => (
    <Playground>
      <Navbar />
    </Playground>
  ))
  .add('Left Nav', () => <LeftNav />);
storiesOf('_Playground', module).add('play', () => (
  <Playground>sdlfksdjf</Playground>
));
