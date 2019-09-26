import React from 'react';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {

	return (
		<TextField
			type='text'
			value={props.search}
			fullWidth
			onChange={(event) => props.setSearch(event.target.value)}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				),
			}}
		/>
	);
}

export default withRouter(SearchBar);
