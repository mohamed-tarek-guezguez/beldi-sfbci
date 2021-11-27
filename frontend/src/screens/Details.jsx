import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/product'
import Loader from '../components/Loader'
import { Image, Modal } from 'react-bootstrap'

const Details = ({ match }) => {
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr')
	if (language === '') {
		setLanguage('fr')
	}

	const dispatch = useDispatch()

	const productDetails = useSelector((state) => state.productDetails)
	const { loading, product } = productDetails

	useEffect(() => {
		dispatch(listProductDetails(match.params.id))
	}, [dispatch, match.params.id])

	const [show, setShow] = useState(false)
	const [img, setImg] = useState('')

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const handlePicture = (src) => {
		setImg(src)
		handleShow()
	}

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className='container my-5'>
						<div className='row'>
							<div className='col-md-6'>
								<center>
									<Image
										className='img-fluid mb-1 h-100'
										src={product.Img}
										alt='image-error'
										onClick={() => handlePicture(product.Img)}
									/>
								</center>
								{(product.Img2 || product.Img3 || product.Img4) && (
									<div
										className='row container d-flex justify-content-between align-items-center my-3'
										style={{ textAlign: 'center' }}
									>
										{product.Img2 && (
											<div className='col'>
												<Image
													style={{ maxHeight: '100px', maxWidth: '100%' }}
													src={product.Img2}
													alt='image-error'
													onClick={() => handlePicture(product.Img2)}
												/>
											</div>
										)}
										{product.Img3 && (
											<div className='col'>
												<Image
													style={{ maxHeight: '100px', maxWidth: '100%' }}
													src={product.Img3}
													alt='image-error'
													onClick={() => handlePicture(product.Img3)}
												/>
											</div>
										)}
										{product.Img4 && (
											<div className='col'>
												<Image
													style={{ maxHeight: '100px', maxWidth: '100%' }}
													src={product.Img4}
													alt='image-error'
													onClick={() => handlePicture(product.Img4)}
												/>
											</div>
										)}
									</div>
								)}
							</div>

							<div className='col-md-6'>
								<h3 className='my-3'>{product.Title}</h3>
								<div
									className='Container'
									dangerouslySetInnerHTML={{ __html: product.Description }}
								></div>
							</div>
						</div>
					</div>

					<Modal show={show} size='xl' onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>{product.Title}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Image className='img-fluid w-100 h-100' src={img} alt='image-error' />
						</Modal.Body>
					</Modal>
				</>
			)}
		</Fragment>
	)
}

export default Details
