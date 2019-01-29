import React from 'react';
import {
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import {
  Check as CheckIcon,
  // Drafts as DraftsIcon,
  Inbox as InboxIcon,
  QueryBuilder as QueryBuilderIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import styledBy from './helpers/styledBy';

const iconStyles = {
  margin: '0',
  color: styledBy('iconColor', {
    blue: 'rgb(66, 133, 244)',
    orange: 'rgb(244, 81, 30)',
    green: 'rgb(15, 157, 88)',
  }),
};

const textStyles = {
  paddingLeft: '1.6rem',
  paddingRight: '0',
};

const primaryStyles = {
  color: 'rgb(97, 97, 97)',
};

const useStyles = makeStyles({
  divider: {
    marginBottom: '0.8125rem',
  },
  menuList: {
    width: '13.5rem',
    padding: '0.75rem 0.5rem 3.25rem 0.5rem',
  },
  menuSection: {
    marginBottom: '0.5rem',
  },
  menuItem: {
    '&': {
      padding: '0 0.75rem 0 1rem',
    },
    '&:focus': {
      backgroundColor: 'rgba(0,0,0,.05)',
      '& $primary': {
        color: 'rgb(33, 33, 33)',
        fontWeight: '700',
      },
    },
    '& $text': textStyles,
    '& $icon': iconStyles,
    '& $primary': primaryStyles,
  },
  text: textStyles,
  primary: primaryStyles,
  icon: iconStyles,
});

const PRIMARY_ROUTES = [
  {
    label: 'Inbox',
    icon: InboxIcon,
    url: '',
    iconColor: 'blue',
  },
  {
    label: 'Snoozed',
    icon: QueryBuilderIcon,
    url: '',
    iconColor: 'orange',
  },
  {
    label: 'Done',
    icon: CheckIcon,
    url: '',
    iconColor: 'green',
  },
];

const SECONDARY_ROUTES = [
  {
    label: 'Draft',
    icon: InboxIcon,
    url: '',
    iconColor: {
      color: 'blue',
    },
  },
  {
    label: 'Sent',
    icon: QueryBuilderIcon,
    url: '',
  },
  {
    label: 'Reminders',
    icon: CheckIcon,
    url: '',
  },
  {
    label: 'Trash',
    icon: CheckIcon,
    url: '',
  },
  {
    label: 'Spam',
    icon: CheckIcon,
    url: '',
  },
  {
    label: 'Contacts',
    icon: CheckIcon,
    url: '',
  },
];

const LeftNavItem = ({ classes, icon: Icon, label }) => (
  <MenuItem className={classes.menuItem}>
    <ListItemIcon className={classes.icon}>
      <Icon />
    </ListItemIcon>
    <ListItemText
      classes={{ root: classes.text, primary: classes.primary }}
      inset
      primary={label}
    />
  </MenuItem>
);

const LeftNav = () => {
  const classes = useStyles({});

  return (
    <MenuList className={classes.menuList}>
      <div className={classes.menuSection}>
        {PRIMARY_ROUTES.map((props, key) => {
          const navClasses = useStyles(props);
          return <LeftNavItem {...props} classes={navClasses} key={key} />;
        })}
      </div>
      <Divider className={classes.divider} />
      <div className={classes.menuSection}>
        {SECONDARY_ROUTES.map((props, key) => {
          const navClasses = useStyles(props);

          return <LeftNavItem {...props} classes={navClasses} key={key} />;
        })}
      </div>
    </MenuList>
  );
};

export default LeftNav;
