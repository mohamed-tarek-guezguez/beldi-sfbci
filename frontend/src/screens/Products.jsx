import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/product'
import Loader from '../components/Loader'
import { Link, useHistory } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'
import searchIcon from '../images/search1.png'

const Products = () => {
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr')
	if (language === '') {
		setLanguage('fr')
	}

	const [searchInput, setSearchInput] = useState('')
	const [q, setQ] = useState('')
	const [p, setP] = useState(parseInt(localStorage.getItem('page')) || 1)

	const onFormSubmit = (e) => {
		e.preventDefault()
		setQ(searchInput.trim())
		setSearchInput('')
		localStorage.setItem('page', 1)
		setP(1)
	}

	let history = useHistory()
	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)
	const {
		loading,
		products,
		num_pages,
		has_previous,
		has_next,
		page_rangeStart,
		page_rangeEnd,
		page,
	} = productList

	useEffect(() => {
		dispatch(listProducts(q, p))

		if (q !== '') {
			history.push(`/products?keyword=${q}`)
		} else {
			history.push(history.push(history.location.pathname))
		}

		if (p) {
			localStorage.setItem('page', p)
		}
	}, [dispatch, q, p, history])

	var paginationResult = []
	for (let i = page_rangeStart; i < page_rangeEnd; i++) {
		paginationResult.push(i)
	}

	return (
		<>
			{loading ? (
				<div className='my-4'>
					<Loader />
				</div>
			) : (
				<>
					<div className='card-header' style={{ background: '#212529' }}>
						<div className='row py-2'>
							<div className='col-4 col-sm-4 col-md-6 col-lg-6'>
								{language === 'fr' ? (
									<>
										<button className='btn btn-dark border-0' style={{ background: '#5E72E4' }}>
											Filtre
										</button>
									</>
								) : (
									<>
										<button className='btn btn-dark border-0' style={{ background: '#5E72E4' }}>
											Filter
										</button>
									</>
								)}
							</div>
							<div className='col'>
								<form onSubmit={onFormSubmit}>
									<div className='input-group'>
										<input
											type='text'
											className='form-control'
											placeholder='Search...'
											value={searchInput}
											name='q'
											onChange={(e) => setSearchInput(e.target.value)}
										/>
										<div className='input-group-append'>
											<button className='btn btn-secondary' type='submit'>
												<img src={searchIcon} alt='search' style={{ width: '20px' }} />
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div className='container my-4'>
						<div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4'>
							{products.map((product) => (
								<div className='col' key={product.id}>
									<div className='card h-100'>
										<div className='img-hover-zoom h-100'>
											<Link to={`/details/${product.id}`}>
												<img src={product.Img} className='card-img-top h-100 w-100' alt='...' />
											</Link>
										</div>
										<div className='card-body'>
											<div
												className='d-flex justify-content-between'
												style={{ alignItems: 'center' }}
											>
												<h6 className='card-title mb-0'>{product.Title}</h6>
											</div>
											<hr className='' />

											<Link
												to={`/details/${product.id}`}
												className='btn btn-sm btn-primary w-100 border-0'
												style={{ background: '#5E72E4' }}
											>
												Show Details
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>

						{num_pages > 1 && (
							<Pagination className='mt-5 justify-content-center'>
								{has_previous && <Pagination.Prev onClick={() => setP(p - 1)} />}

								{paginationResult.map((x) =>
									page === x ? (
										<Pagination.Item key={x} active>
											{x}
										</Pagination.Item>
									) : (
										<Pagination.Item key={x} onClick={() => setP(x)}>
											{x}
										</Pagination.Item>
									)
								)}

								{has_next && <Pagination.Next onClick={() => setP(p + 1)} />}
							</Pagination>
						)}
					</div>
				</>
			)}
		</>
	)
}

export default Products
