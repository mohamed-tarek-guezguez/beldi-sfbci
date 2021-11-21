import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Carousel, Navbar, Container, Nav } from 'react-bootstrap'

import logo1 from '../images/l1.png'
import logo2 from '../images/logo33.png'
import img2 from '../images/33.jpg'
import img3 from '../images/22.jpg'
import img4 from '../images/img11.png'
import img5 from '../images/txtLogo.png'
import img6 from '../images/flag1.png'
import img7 from '../images/flag2.png'

const Header = () => {
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr')

	if (language === '') {
		setLanguage('fr')
	}

	const [collapse, setCollapse] = useState(false)

	const changeFr = () => {
		localStorage.setItem('language', 'fr')
		window.location.reload(false)
	}

	const changeEng = () => {
		localStorage.setItem('language', 'en')
		window.location.reload(false)
	}

	return (
		<Fragment>
			<div className='head'>
				<div className='container header'>
					<div className='row'>
						<div className='col col-3 p-0' style={{ background: '#212529' }}>
							{isMobile ? (
								<img src={logo2} alt='logo' className='image-fit' />
							) : (
								<img src={logo1} alt='logo' className='image-fit' />
							)}
						</div>

						<div className='col col-9 p-0' style={{ background: '#212529' }}>
							<Carousel>
								<Carousel.Item>
									<img className='d-block w-100' src={img2} alt='First slide' />
								</Carousel.Item>
								<Carousel.Item>
									<img className='d-block w-100' src={img3} alt='Second slide' />
								</Carousel.Item>
								<Carousel.Item>
									<img className='d-block w-100' src={img4} alt='Third slide' />
								</Carousel.Item>
							</Carousel>
						</div>
					</div>
				</div>
			</div>

			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' expanded={collapse}>
				<Container>
					{isMobile && (
						<Navbar.Brand>
							<Link to='/' onClick={() => setCollapse(isMobile ? !collapse : false)}>
								<img src={img5} alt='logo' style={{ height: '28px' }} />
							</Link>
						</Navbar.Brand>
					)}
					<Navbar.Toggle
						aria-controls='responsive-navbar-nav'
						onClick={() => setCollapse(isMobile ? !collapse : false)}
					/>
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Link
								to='/'
								className='nav-link text-white text-decoration-none'
								onClick={() => setCollapse(isMobile ? !collapse : false)}
							>
								{language === 'fr' ? 'Accueil' : 'Home'}
							</Link>
							<Link
								to='/presentation'
								className='nav-link text-white text-decoration-none'
								onClick={() => setCollapse(isMobile ? !collapse : false)}
							>
								{language === 'fr' ? 'Présentation' : 'Presentation'}
							</Link>
							<Link
								to='/products'
								className='nav-link text-white text-decoration-none'
								onClick={() => setCollapse(isMobile ? !collapse : false)}
							>
								{language === 'fr' ? 'Produits' : 'Products'}
							</Link>
							<Link
								to='/services'
								className='nav-link text-white text-decoration-none'
								onClick={() => setCollapse(isMobile ? !collapse : false)}
							>
								{language === 'fr' ? 'Services' : 'Services'}
							</Link>
							<Link
								to='/contact'
								className='nav-link text-white text-decoration-none'
								onClick={() => setCollapse(isMobile ? !collapse : false)}
							>
								{language === 'fr' ? 'Contact' : 'Contact'}
							</Link>
						</Nav>
						<Nav>
							<Nav.Link>
								<div style={{ float: 'right' }}>
									<button className='btn btn-link' onClick={changeEng}>
										<img src={img6} alt='English' data-mdb-toggle='tooltip' title='English' />
									</button>
									<button className='btn btn-link' onClick={changeFr}>
										<img src={img7} alt='Frensh' data-mdb-toggle='tooltip' title='Frensh' />
									</button>
								</div>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	)
}

export default Header
