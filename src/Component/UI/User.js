/** @format */
import React, { useEffect } from 'react';
import Loading from './Loading';
import PropTypes from 'prop-types';
import MultiRepos from './MultiRepos';

const User = ({ user, loading, getUser, userRepos, repos, match }) => {
	useEffect(() => {
		getUser(match.params.login);
		userRepos(match.params.login);
		//eslint-disable-next-line
	}, []);
	const {
		name,
		avatar_url,
		html_url,
		public_repos,
		public_gists,
		followers,
		company,
		blog,
		location,
		hireable,
		email,
	} = user;
	if (loading) {
		return <Loading />;
	}
	return (
		<>
			<div className='card card-body mb-3 mt-3'>
				<div className='row'>
					<div className='col-md-3'>
						<img
							src={avatar_url}
							alt=''
							className='img-fluid rounded-circle md-2'
						/>
						<a
							href={html_url}
							className='btn btn-primary btn-block mb-4 mt-2'
							target='_blank'
							rel='noopener noreferrer'>
							<h3>{name}</h3>
						</a>
					</div>
					<div className='col-md-9'>
						<span className='badge badge-primary mr-2'>
							<h4>Public Repos: {public_repos}</h4>
						</span>
						<span className='badge badge-secondary mr-2'>
							<h4>Public Gists: {public_gists}</h4>
						</span>
						<span className='badge badge-info bold'>
							<h4>Followers : {followers}</h4>
						</span>
						<br />
						<br />
						<ul className='list-group'>
							{company ? (
								<li className='list-group-item'>
									<h4>Company: {company}</h4>
								</li>
							) : (
								''
							)}
							{blog ? (
								<li className='list-group-item'>
									<h4>Website/Blog: {blog}</h4>
								</li>
							) : (
								''
							)}
							{location ? (
								<li className='list-group-item'>
									<h4>Location: {location}</h4>
								</li>
							) : (
								''
							)}
							{hireable ? (
								<li className='list-group-item'>
									<h4>
										Hireable : {hireable}
										<i className='fa fa-check text-success' />
									</h4>
								</li>
							) : (
								<i className='fa fa-time-circle text-danger' />
							)}
							{email ? (
								<li className='list-group-item'>
									<h4>Email : {email}</h4>
								</li>
							) : (
								''
							)}
						</ul>
					</div>
				</div>
			</div>
			<MultiRepos repos={repos} />
		</>
	);
};

User.propTypes = {
	loading: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	getUser: PropTypes.func.isRequired,
	userRepos: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired,
};
export default User;
