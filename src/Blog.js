import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from './SearchBar';

import axios from 'axios';
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

	const [data, setData] = useState([
		{
			date: '10/29/2019',
			description: 'This is the first article on this website. Welcome!',
			slug: 'hello',
			title: 'Hello World!'
		}
	]);

	const [filteredData, setFilteredData] = useState([]);
	const [search, setSearch] = useState('');

	const getData = () => {
		axios.get('http://localhost:5000/post').then(res => {
			setData(res.data.data);
			setFilteredData(res.data.data.items);
		});
	}

	const searchItems = () => {
		setFilteredData(data.filter(item => {
			let tempTitle = item.title.toUpperCase();
			let tempDesc = item.description.toUpperCase();
			let tempSearch = search.toUpperCase();
			return tempTitle.includes(tempSearch) || tempDesc.includes(tempSearch);
		}));
	}

	useEffect(() => { searchItems(); }, [search]);

	const mapItems = () => {
		return filteredData.map((item, index) => {
			return (
				<Fade in={true} timeout={550}>
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
								{ item.date }
							</Typography>
						</Grid>
						<Grid item>
							<Typography>
								{ item.description }
							</Typography>
						</Grid>
					</Grid>
				</Fade>
			);
		});
	}

	return (
		<Fade in={true} timeout={550}>
			<Grid container item spacing={4} md={8} className={classes.flex}>
				<Grid item xs={12}>
					<SearchBar
						search={search}
						setSearch={setSearch}
					/>
				</Grid>
				{ mapItems() }
			</Grid>
		</Fade>
	);

}

export default withRouter(Blog);
