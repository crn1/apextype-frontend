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
					<Typography className={classes.flexGrow} variant='h3' align='center'>
						Say "Hello" to me.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.flexGrow} variant='h5' align='center'>
						If you have any questions, buisness proposals or if you just want to say 'Hi' feel free to contact me on:
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.flexGrow} variant='h5' align='center'>
					LinkedIn • GitHub • E-mail
					</Typography>
				</Grid>
			</Grid>
		</Fade>
	);
}

export default Home;
