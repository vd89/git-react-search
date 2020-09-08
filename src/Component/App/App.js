/** @format */

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Search from '../Search/Search';
import MultipleUser from '../UI/MultipleUser';
import Alert from '../UI/Alert';
import About from '../Pages/About';
import User from '../UI/User';

const App = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const client_id = 'c5868f39180303a9e8e4';
	const client_secret = '32735d5e618c1fc35ce25bcc7c44b0472f590a7c';
	const repos_count = 6;
	const repos_sort = 'created : asc';

	//Search user
	const searchUser = async (text) => {
		setLoading(true);
		const res = await Axios.get(
			`https://api.github.com/search/users?q=${text}`
		);
		setUsers(res.data.items);
		setLoading(false);
	};
	// Renders first 30 users
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const res = await Axios.get('https://api.github.com/users');
			setUsers(res.data);
			setLoading(false);
		};
		fetchData();
	}, []);

	//Clear USer
	const clearUsers = () => {
		setUser([]);
		setLoading(false);
	};
	const showAlert = (msg, type) => {
		setAlert({ msg: msg, type: type });
		setTimeout(() => {
			setAlert(null);
		}, 2500);
	};

	// Get single user Method
	const getUser = async (userName) => {
		setLoading(true);
		const res = await Axios.get(
			`https://api.github.com/users/${userName}?client_id=${client_id}&client_secret=${client_secret}`
		);
		setUser(res.data);
		setLoading(false);
	};
	// Get user Repos
	const getUserRepos = async (userName) => {
		setLoading(true);

		const res = await Axios.get(
			`https://api.github.com/users/${userName}/repos?per_page=${repos_count}&sort=${repos_sort}&client_id=${client_id}&client_secret=${client_secret}`
		);
		setRepos(res.data);
		setLoading(false);
	};

	return (
		<Router>
			<Header />
			<div className='container'>
				<Alert alert={alert} />
				<Switch>
					<Route
						exact
						path='/'
						render={(props) => (
							<>
								<Search
									{...props}
									searchUser={searchUser}
									clearUsers={clearUsers}
									showClear={users.length > 0 ? true : false}
									setAlert={showAlert}
								/>
								<MultipleUser loading={loading} users={users} />
							</>
						)}
					/>
					<Route exact path='/about' component={About} />
					<Route
						exact
						path='/user/:login'
						render={(props) => (
							<User
								{...props}
								getUser={getUser}
								userRepos={getUserRepos}
								user={user}
								loading={loading}
								repos={repos}
							/>
						)}
					/>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
