import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';

import axios from 'axios';
import moment from 'moment';
import Interweave, { Node } from 'interweave';
import Image from 'material-ui-image';

const useStyles = makeStyles(theme => ({
	marginTop: {
		marginTop: theme.spacing(4),
	},

	pre: {
		borderRadius: 4,
		backgroundColor: grey['900'],
		color: 'white',
		padding: theme.spacing(1),
	},

	blockquote: {
		borderLeft: `5px solid ${yellow['700']}`,
		padding: theme.spacing(1),
		margin: 0,
	},

	image: {
		borderRadius: 4,
	},

}));


const Blog = (props) => {

	const classes = useStyles();

	const [data, setData] = useState({});

	const getData = () => {
		axios.get(`http://localhost:5000/post/${props.match.params.slug}`).then(res => {
			setData(res.data.data);
		});
	}

	const transform = (node: HTMLElement, children: Node[]): React.ReactNode => {
		switch(node.tagName)
		{
			case 'P':
				return <Typography component='div' variant='body1'>{children}</Typography>
			case 'A':
				return <Link href={node.getAttribute('href')}>{children}</Link>
			case 'PRE':
				return <pre className={classes.pre}>{children}</pre>
			case 'BLOCKQUOTE':
				return <blockquote className={classes.blockquote}>{children}</blockquote>
			case 'IMG':
				return <Image src={node.getAttribute('src')} disableSpinner className={classes.image} />
		}
	}

	useEffect(() => { getData(); }, []);

	return (
		<Fade in={true} timeout={550}>
			<Grid item container spacing={1} md={8} className={classes.flex}>
				<Grid item xs={12}>
					<Typography variant='h4' component='div' color='primary'>
						<Box fontWeight='fontWeightBold'>
							{ data.title }
						</Box>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography component='div' variant='caption'>
						{ moment(data.date).format('dddd, Mo MMMM YYYY') }
					</Typography>
				</Grid>
				<Grid item xs={12} className={classes.marginTop}>
					<Typography component='div'>
						<Interweave
							tagName='div'
							disableLineBreaks={true}
							transform={transform}
							content={data.content}
						/>
					</Typography>
				</Grid>
			</Grid>
		</Fade>
	);
}

export default withRouter(Blog);
