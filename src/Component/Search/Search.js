/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUser, clearUsers, showClear, setAlert }) => {
	const [text, setText] = useState('');
	const onChangeHandler = (e) => {
		setText(e.target.value);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (text === '') {
			setAlert('Enter Github User Name', 'danger');
		} else {
			searchUser(text);
			setText('');
		}
	};
	const onClickHandler = () => {
		clearUsers();
	};
	return (
		<div className='row mt-2'>
			<div className='card mt-2 col-md-8 m-auto'>
				<div className='card-header text-center'>
					<h2>Search the Github User</h2>
				</div>
				<div className='card-body'>
					<form onSubmit={onSubmitHandler}>
						<fieldset>
							<div className='form-group'>
								<label htmlFor='search'>User Name</label>
								<input
									type='text'
									className='form-control'
									name='text'
									value={text}
									onChange={onChangeHandler}
									placeholder='Pleas Enter the User '
								/>
							</div>
							<div className='form-group text-center'>
								<button type='submit' className='btn btn-dark btn-lg mr-5'>
									Submit
								</button>
								{showClear && (
									<button
										className='btn-danger btn btn-lg ml-5'
										onClick={onClickHandler}>
										Clear{' '}
									</button>
								)}
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};
Search.propTypes = {
	searchUser: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};
export default Search;
