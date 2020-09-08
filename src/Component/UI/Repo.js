/** @format */

import React from 'react';
import PropTypes from 'prop-types';

function Repo({ repo }) {
	return (
		<div>
			<div className='card card-body mb-2 '>
				<div className='row'>
					<div className='col-md-6'>
						<a href={repo.html_url}>
							<h3>{repo.name}</h3>
						</a>
						<p className='text-muted'>Created: {repo.created_at}</p>
					</div>
					<div className='col-md-6 d-flex justify-content-end text-center align-self-center'>
						<span className='badge badge-primary mr-2'>
							<h5>Stars: {repo.stargazers_count}</h5>
						</span>
						<span className='badge badge-secondary mr-2'>
							<h5>Watchers: {repo.watchers_count}</h5>
						</span>
						<span className='badge badge-success mr-2'>
							<h5>Forks: {repo.forms_count}</h5>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

Repo.propType = {
	repo: PropTypes.object.isRequired,
};

export default Repo;
