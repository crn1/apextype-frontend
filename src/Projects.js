import React from 'react';
import Typography from '@material-ui/core/Typography';
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


const Projects = () => {

	const classes = useStyles();

	return (
		<Grid container spacing={4} className={classes.flex}>
			<Grid item xs={12}>
				<Typography className={classes.flexGrow} variant='h3' align='center'>
					Projects
				</Typography>
			</Grid>
		</Grid>
	);

}

export default Projects;
