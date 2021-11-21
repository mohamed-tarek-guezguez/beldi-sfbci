import React, { useState, Fragment } from 'react'

const Details = () => {
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr')
	if (language === '') {
		setLanguage('fr')
	}

	return (
		<Fragment>
			<div className='container my-5'>details</div>
		</Fragment>
	)
}

export default Details
