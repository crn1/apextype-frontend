import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	flex: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: '15%',
	},
}));

const Home = () => {

	const classes = useStyles();

	return (
		<Fade in={true} timeout={550}>
			<Grid container justify='center' spacing={4} className={classes.flex}>
				<Grid item xs={12}>
					<Typography variant='h3' align='center'>
						Welcome.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h5' align='center'>
						My name is Đorđe and I am a full-stack developer.
					</Typography>
				</Grid>
				<Grid item xs={12} xl={7}>
					<Typography variant='h5' align='center'>
						I develop in <Link href='https://reactjs.org'>React.js</Link> and <Link href='https://palletsprojects.com/p/flask/'>Flask</Link>. I take a special approach to development that involves minimalism with an emphasis on performance, security, and stability.
					</Typography>
				</Grid>
			</Grid>
		</Fade>
	);
}

export default Home;
