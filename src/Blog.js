import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from './SearchBar';

import axios from 'axios';
import qs from 'query-string';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
	flex: {
		display: 'flex',
	},
	flexGrow: {
		flexGrow: 1,
	},
	paddingTop: {
		paddingTop: theme.spacing(1),
	}
}));


const Blog = (props) => {

	const classes = useStyles();

	const [data, setData] = useState({ items: [], total: 0});
	const [search, setSearch] = useState(qs.parse(props.location.search).search);

	const getData = () => {
		axios.get(`http://localhost:5000/post?search=${search ? search : ''}`).then(res => {
			setData(res.data.data);
		});
	}

	useEffect(() => { getData(); }, [search]);

	const mapItems = () => {
		return data.items.map((item, index) => {
			return (
				<Grid container item key={item.name + '-' + index}>
					<Grid item>
						<Link variant='h5' color='primary'
								underline='none'
								href={`/${item.slug}`}>
							<Box fontWeight='fontWeightBold'>
								{ item.title }
							</Box>
						</Link>
					</Grid>
					<Grid item xs={12} className={classes.paddingTop}>
						<Typography variant='caption'>
							{ moment(item.date).format('dddd, Mo MMMM YYYY') }
						</Typography>
					</Grid>
					<Grid item>
						<Typography>
							{ item.description }
						</Typography>
					</Grid>
				</Grid>
			);
		});
	}

	return (
		<Grid container spacing={4} md={8} className={classes.flex}>
			<Grid item xs={12}>
				<SearchBar
					search={search}
					setSearch={setSearch}
				/>
			</Grid>
			{ mapItems() }
		</Grid>
	);

}

export default withRouter(Blog);
