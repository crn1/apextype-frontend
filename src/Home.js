import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	flex: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			paddingTop: '15%',
		}
	},
	flexGrow: {
		flexGrow: 1,
	}
}));


const Home = () => {

	const classes = useStyles();

	return (
		<Grid container spacing={4} className={classes.flex}>
			<Grid item xs={12}>
				<Typography className={classes.flexGrow} variant='h3' align='center'>
					Welcome.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography className={classes.flexGrow} variant='h5' align='center'>
					My name is Đorđe Gluvajić and I am full-stack developer.
				</Typography>
			</Grid>
		</Grid>
	);

}

export default Home;
