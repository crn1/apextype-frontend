import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
	flex: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			paddingTop: '15%',
		}
	},

	icon: {
		width: 32,
		height: 32,
		marginRight: theme.spacing(2),
	},
}));


const Home = () => {

	const classes = useStyles();

	return (
		<Fade in={true} timeout={550}>
			<Grid container justify='center' spacing={8} className={classes.flex}>
				<Grid item xs={12}>
					<Typography variant='h3' align='center'>
						Say Hello.
					</Typography>
				</Grid>
				<Grid item container spacing={1} xs={12} lg={6}>
					<Grid item xs={12} md={4}>
						<Link href='mailto:gluvajic@aol.com'>
							<Button fullWidth size='large'>
								<EmailIcon className={classes.icon} />
								Email
							</Button>
						</Link>
					</Grid>
					<Grid item xs={12} md={4}>
						<Link href='https://www.linkedin.com/in/sigma-dorde'>
							<Button fullWidth size='large'>
								<img className={classes.icon} src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" />
								LinkedIn
							</Button>
						</Link>
					</Grid>
					<Grid item xs={12} md={4}>
						<Link href='https://github.com/crn1'>
							<Button fullWidth size='large'>
								<img className={classes.icon} src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
								GitHub
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</Fade>
	);
}

export default Home;
