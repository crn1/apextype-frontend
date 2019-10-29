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
						Welcome.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.flexGrow} variant='h5' align='center'>
						My name is Đorđe and I am a full-stack developer.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.flexGrow} variant='h5' align='center'>
						I develop in <Link href='https://reactjs.org'>React.js</Link> and <Link href='https://palletsprojects.com/p/flask/'>Flask</Link>. I take a special approach to development that involves minimalism with an emphasis on performance, security, and stability.
					</Typography>
				</Grid>
			</Grid>
		</Fade>
	);
}

export default Home;
