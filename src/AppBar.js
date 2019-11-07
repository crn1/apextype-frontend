import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import MenuIcon from '@material-ui/icons/Menu';

const NavBar = (props) => {

	const useStyles = makeStyles(theme => ({

		appBar: {
			marginLeft: props.drawerWidth,
			[theme.breakpoints.up('sm')]: {
				width: `calc(100% - ${props.drawerWidth}px)`,
			},
			background: 'white',
			boxShadow: 'none',
			borderBottom: `1px solid ${theme.palette.divider}`,
		},

		toolbar: {
			color: 'black',
		},

		title: {
			flexGrow: 1,
			marginLeft: -48,
		},

	}));

  const classes = useStyles();

	return (
		<AppBar position='fixed' className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<IconButton
					color='inherit'
					aria-label='Open drawer'
					edge='start'
					onClick={props.handleDrawerToggle}
				>
					<MenuIcon />
				</IconButton>

				<Typography variant='h6' className={classes.title}
						noWrap color='inherit' align='center'>
					apextype.
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
