import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
	marginTop: {
		marginTop: theme.spacing(4),
	}
}));


const Blog = (props) => {

	const classes = useStyles();

	const [data, setData] = useState({});

	const getData = () => {
		axios.get(`http://localhost:5000/post/${props.match.params.slug}`).then(res => {
			setData(res.data.data);
			console.log(res.data.data);
		});
	}

	useEffect(() => { getData(); }, []);

	return (
		<Grid container spacing={1} md={8} className={classes.flex}>
			<Grid item>
				<Typography variant='h4' color='primary'>
					<Box fontWeight='fontWeightBold'>
						{ data.title }
					</Box>
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant='caption'>
					{ moment(data.date).format('dddd, Mo MMMM YYYY') }
				</Typography>
			</Grid>
			<Grid item className={classes.marginTop}>
				<div dangerouslySetInnerHTML={{__html: data.content}} />
			</Grid>
		</Grid>
	);
}

export default withRouter(Blog);
