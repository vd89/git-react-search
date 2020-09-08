/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
				<div className='container'>
					<a href='/' className='navbar-brand'>
						GitHub <i className='fa ml-2 fa-github'></i>
					</a>
				</div>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarColor01'
					aria-controls='navbarColor01'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarColor01'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item active'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item active'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Header;
