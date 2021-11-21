import React, { Fragment } from 'react'
import Products from './Products'

const Produit = () => {
	return (
		<Fragment>
			<div className='container'>
				<div className='card border my-5 rounded'>
					<Products />
				</div>
			</div>
		</Fragment>
	)
}

export default Produit
