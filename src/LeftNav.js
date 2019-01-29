import React from 'react';
import {
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Check as CheckIcon,
  Drafts as DraftsIcon,
  Send as SendIcon,
  Inbox as InboxIcon,
  QueryBuilder as QueryBuilderIcon,
  TouchApp as TouchAppIcon,
  Delete as DeleteIcon,
  Report as ReportIcon,
  AccountBox as AccountBoxIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import styledBy from './helpers/styledBy';

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
    icon: DraftsIcon,
    url: '',
    iconColor: {
      color: 'blue',
    },
  },
  {
    label: 'Sent',
    icon: SendIcon,
    url: '',
  },
  {
    label: 'Reminders',
    icon: TouchAppIcon,
    url: '',
  },
  {
    label: 'Trash',
    icon: DeleteIcon,
    url: '',
  },
  {
    label: 'Spam',
    icon: ReportIcon,
    url: '',
  },
  {
    label: 'Contacts',
    icon: AccountBoxIcon,
    url: '',
  },
];

const iconStyles = {
  margin: '0',
  color: styledBy('iconColor', {
    blue: 'rgb(66, 133, 244)',
    orange: 'rgb(244, 81, 30)',
    green: 'rgb(15, 157, 88)',
  }),
  '& svg': {
    marginTop: '0',
  },
};

const textStyles = {
  paddingLeft: '1.6rem',
  paddingRight: '0',
  '& span': {
    marginTop: '0',
    lineHeight: '2.5rem',
  },
};

const primaryStyles = {
  color: 'rgb(97, 97, 97)',
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.8125rem',
};

const useStyles = makeStyles({
  menuList: {
    width: '13.5rem',
    padding: '0.75rem 0.5rem 3.25rem 0.5rem',
    '& :first-child': {
      marginTop: '0',
    },
  },
  menuSection: {
    borderBottom: '1px solid rgb(221, 221, 221)',
    marginTop: '0.8125rem',
    marginBottom: '0.8125rem',
    paddingBottom: '0.5rem',
  },
  menuItem: {
    padding: '0 0.75rem 0 1rem !important',
    height: '2.5rem !important',
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

/* use hooks */
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
