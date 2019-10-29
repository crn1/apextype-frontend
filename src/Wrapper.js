import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import AppBar from './AppBar';
import SideDrawer from './SideDrawer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({

	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},

	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},

  root: {
    display: 'flex',
  },

	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},

	toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    [theme.breakpoints.up('xs')]: {
			padding: theme.spacing(3),
		},
    [theme.breakpoints.down('xs')]: {
			padding: theme.spacing(2),
		},
  },
}));

const Wrapper = (props) => {

  const classes = useStyles();
  const theme = useTheme();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
		<div className={classes.root}>
			<CssBaseline />
			<Hidden smUp>
				<AppBar
					handleDrawerToggle={handleDrawerToggle}
					drawerWidth={drawerWidth}
				/>
			</Hidden>
			<nav className={classes.drawer}>
				<Hidden smUp implementation='css'>
					<Drawer
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileDrawerOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						<SideDrawer handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open
					>
						<SideDrawer handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<Hidden smUp>
					<div className={classes.toolbar} />
				</Hidden>
				{ props.children }
			</main>
		</div>
  );
}

export default Wrapper;
