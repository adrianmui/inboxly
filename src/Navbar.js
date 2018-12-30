import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Switch } from './components';

const styles = theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    backgroundColor: 'rgb(66, 133, 244)',
    boxShadow:
      '0 0 0.25reme rgba(0,0,0,.14), 0 0.25reme 0.5rem rgba(0,0,0,.28)',
    height: '3.5rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.625rem 0',
  },
  side: {
    flex: 19,
    display: 'flex',
    alignItems: 'center',
  },
  main: {
    flex: 60,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2.25rem',
  },
  control: {
    flex: 21,
    padding: '0 1.875rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuButton: {
    padding: '1rem 1.5rem',
    margin: 0,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '0.125rem',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    height: '2.125rem',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '29.25rem',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const Navbar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
      <div className={classes.side}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.title}
          variant="h6"
          color="inherit"
          noWrap
        >
          Inboxly
        </Typography>
      </div>
      <div className={classes.main}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <Switch />
      </div>
      <div className={classes.control}>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          aria-owns="material-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
    </AppBar>
  </div>
);

export default withStyles(styles)(Navbar);
