/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function SingleUser({ user }) {
	const { avatar_url, login } = user;
	return (
		<div className='container'>
			<div className='card' style={{ width: '14rem' }}>
				<img src={avatar_url} alt='' className='card-img-top' />
				<div className='card-body'>
					<h3 className='card-title'>{login}</h3>
				</div>
				<div className='card-footer '>
					<Link to={`/user/${login}`} className='btn btn-dark btn-block'>
						Profile
					</Link>
				</div>
			</div>
		</div>
	);
}
SingleUser.propTypes = {
	user: PropTypes.object.isRequired,
};

export default SingleUser;
