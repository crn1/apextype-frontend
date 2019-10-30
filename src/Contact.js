import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
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
						Say Hello.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.flexGrow} variant='h5' align='center'>
						You can contact me via <Link href='mailto: gluvajic@aol.com'>email</Link> or my <Link href='https://github.com/crn1'>GitHub</Link> page.
					</Typography>
				</Grid>
			</Grid>
		</Fade>
	);
}

export default Home;
