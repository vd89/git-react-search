/** @format */

import React from 'react';
import Repo from './Repo';
import PropTypes from 'prop-types';

function MultiRepos({ repos }) {
	return (
		<div>
			<h3 className='page-heading mb-3'>This are the User Repos</h3>
			{repos.map((repo) => (
				<Repo key={repo.id} repo={repo} />
			))}
		</div>
	);
}

MultiRepos.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default MultiRepos;
