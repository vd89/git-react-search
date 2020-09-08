/** @format */

import React from 'react';
import spinner from '../../Css/Spinner-5.3s-321px.gif';
function Loading() {
	return (
		<div>
			<img src={spinner} alt='Loading....' />
		</div>
	);
}

export default Loading;
