import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
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
		<Fade in={true} timeout={550}>
			<Grid container spacing={4} className={classes.flex}>
				<Grid item xs={12}>
					<Typography className={classes.flexGrow} variant='h1' align='center'>
						404
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.flexGrow} variant='h5' align='center'>
						The page that you are tying to reach does not exist.
					</Typography>
				</Grid>
			</Grid>
		</Fade>
	);
}

export default Home;
