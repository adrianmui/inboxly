import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MUISwitch from '@material-ui/core/Switch';

import Pin from '../pin.png';
import Pin2 from '../pin2.png';

const styles = {
  icon: {
    backgroundColor: 'rgb(88, 146, 252)',
    color: 'rgb(250, 250, 250)',
    backgroundImage: `url(${Pin})`,
    backgroundSize: '0.9375rem 0.9375rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderRadius: '50%',
    boxShadow: '0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24)',
    height: '1.5625rem',
    width: '1.5625rem',
    marginLeft: '-0.75rem',
    position: 'absolute',
  },
  iconChecked: {
    marginLeft: '0.75rem',
    backgroundColor: 'rgb(250, 250, 250)',
    backgroundImage: `url(${Pin2})`,
    backgroundSize: '0.9375rem 0.9375rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  bar: {
    width: '2.125rem',
    height: '1.0625rem',
    backgroundColor: 'rgb(50, 98, 186)',
    borderRadius: '0.5rem',
  },
  checked: {
    '& + $bar': {
      backgroundColor: 'rgb(217, 231, 255)',
    },
  },
};

const Switch = ({ classes, ...props }) => (
  <MUISwitch classes={classes} {...props} color="default" />
);

export default withStyles(styles)(Switch);
