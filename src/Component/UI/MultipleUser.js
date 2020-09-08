/** @format */

import React from 'react';
import SingleUser from './SingleUser';
import Loading from './Loading';

function MultipleUser({ users, loading }) {
	if (loading) {
		return (
			<div className='row m-auto justify-content-center'>
				<Loading />
			</div>
		);
	} else {
		return (
			<div className='mt-2 row row-cols-md-5'>
				{users.map((user) => (
					<div className='col mb-2 ' key={user.id}>
						<SingleUser user={user} />
					</div>
				))}
			</div>
		);
	}
}

export default MultipleUser;
