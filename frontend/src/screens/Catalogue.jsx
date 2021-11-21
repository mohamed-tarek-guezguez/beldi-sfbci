import React, { useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { Modal } from 'react-bootstrap'

const Catalogue = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<div className='container d-flex justify-content-center my-4'>
			<HTMLFlipBook width={300} height={500} size='stretch'>
				<div className='demoPage h-100'>
					<div className='w-100 h-100 shadow-sm border p-2'>
						<div style={{ maxHeight: '100%' }}>
							<img
								src='https://wallpapercave.com/wp/wp7886032.jpg'
								alt='error'
								className='w-100 pb-1'
							/>
							<button className='btn btn-block' onClick={handleShow}>
								Product Name 1
							</button>
							<p style={{ padding: '1vw' }}>
								Description: The ultimate home entertainment center starts with PlayStation. Whether
								you are into gaming, HD movies, television, music
							</p>
						</div>
					</div>
				</div>
				<div className='demoPage h-100'>
					<div className='w-100 h-100 shadow-sm border p-2'>
						<img
							src='https://wallpapercave.com/wp/wp7886032.jpg'
							alt='error'
							className='w-100 pb-1'
						/>
						<button className='btn btn-block' onClick={handleShow}>
							Product Name 2
						</button>
					</div>
				</div>
				<div className='demoPage h-100'>
					<div className='w-100 h-100 shadow-sm border p-2'>
						<img
							src='https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg'
							alt='error'
							className='w-100 pb-1'
						/>
						<button className='btn btn-block' onClick={handleShow}>
							Product Name 3
						</button>
					</div>
				</div>
				<div className='demoPage h-100'>
					<div className='w-100 h-100 shadow-sm border p-2'>
						<img
							src='https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg'
							alt='error'
							className='w-100 pb-1'
						/>
						<button className='btn btn-block' onClick={handleShow}>
							Product Name 4
						</button>
					</div>
				</div>
				<div className='demoPage h-100'>
					<div className='w-100 h-100 shadow-sm border p-2'>
						<img
							src='https://images.everydayhealth.com/images/best-and-worst-oils-for-your-health-1440x810.jpg?sfvrsn=e7391aed_1'
							alt='error'
							className='w-100 pb-1'
						/>
						<button className='btn btn-block' onClick={handleShow}>
							Product Name 5
						</button>
					</div>
				</div>
				<div className='demoPage h-100'>
					<div className='w-100 h-100 shadow-sm border p-2'>
						<img
							src='https://images.everydayhealth.com/images/best-and-worst-oils-for-your-health-1440x810.jpg?sfvrsn=e7391aed_1'
							alt='error'
							className='w-100 pb-1'
						/>
						<button className='btn btn-block' onClick={handleShow}>
							Product Name 6
						</button>
					</div>
				</div>
			</HTMLFlipBook>

			<Modal
				show={show}
				size='lg'
				onHide={handleClose}
				aria-labelledby='example-modal-sizes-title-lg'
			>
				<Modal.Header closeButton>
					<Modal.Title>Product Name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='w-100 h-100'>
						<img
							src='https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg'
							alt='error'
							className='w-100 pb-1'
						/>
						<br />
						<br />
						<small>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam possimus repudiandae
							eaque hic atque beatae nisi aut vero voluptatibus ab eum cum quis sequi, doloribus
							tenetur animi, iste error, ipsum suscipit asperiores ipsam quam iusto tempore
							perspiciatis? Repellendus explicabo doloribus dolor nisi officiis laboriosam tempora
							esse saepe minus rem, ex blanditiis unde quo perferendis iste veniam cumque vero enim
							placeat eum minima ullam repudiandae. Deleniti dolores minima libero incidunt rem,
							facere eligendi voluptate enim consequatur nam eveniet mollitia unde minus.
						</small>
						<br />
						<br />
					</div>
				</Modal.Body>
			</Modal>
		</div>
	)
}

export default Catalogue
