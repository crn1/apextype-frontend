import React from 'react';
import { withRouter } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
	toolbar: theme.mixins.toolbar,
	title: {
		display: 'flex',
		alignItems: 'center',
	},
	flex: {
		flexGrow: 1,
	},
	contact: {
		paddingTop: theme.spacing(4),
	}
}));

const ResponsiveDrawer = (props) => {

  const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	const goTo = (page) => {
		if(!matches)
		{
			props.handleDrawerToggle();
		}
		props.history.push(page);
	}

  return (
    <>
      <div className={clsx(classes.toolbar, classes.title)}>
				<Typography
						align='center'
						component='div'
						variant='h6'
						className={classes.flex}>
					apextype.
				</Typography>
			</div>
			<Divider />
			<List>
				<ListItem button key={'drawer-home'}
						onClick={ () => goTo('/') }
				>
					<ListItemText align='center' primary={'Home'} />
				</ListItem>
				<ListItem button key={'drawer-articles'}
						onClick={ () => goTo('/blog') }
				>
					<ListItemText align='center' primary={'Blog'} />
				</ListItem>
				<ListItem button key={'drawer-contact'}
						onClick={ () => goTo('/contact') }
				>
					<ListItemText align='center' primary={'Contact'} />
				</ListItem>
			</List>
			<Box color='text.disabled' className={clsx(classes.flex, classes.contact)}>
				<Typography variant='body2' align='center' color='inherit'>
					© 2019 - Đorđe Gluvajić
				</Typography>
				<Typography variant='body2' align='center' color='inherit'>
					All Rights Reserved
				</Typography>
			</Box>
    </>
  );
}

export default withRouter(ResponsiveDrawer);
