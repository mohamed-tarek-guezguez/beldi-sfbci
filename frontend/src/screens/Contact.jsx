import React, { useState, useEffect, Fragment } from 'react'
import Iframe from 'react-iframe'
import Marquee from 'react-fast-marquee'
import { useDispatch, useSelector } from 'react-redux'
import { contactCreate } from '../actions/contact'
import { BannerAction } from '../actions/banner'
import Loader from '../components/Loader'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

const Contact = () => {
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr')

	if (language === '') {
		setLanguage('fr')
	}

	const [name, setName] = useState('')
	const [company, setCompany] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const dispatch = useDispatch()

	const createContact = useSelector((state) => state.createContact)
	const { loading } = createContact

	const getBanner = useSelector((state) => state.getBanner)
	const { banner } = getBanner

	useEffect(() => {
		dispatch(BannerAction())
	}, [dispatch])

	const submitHandler = (e) => {
		e.preventDefault()

		dispatch(
			contactCreate({
				name: name,
				company: company,
				email: email,
				message: message,
			})
		)

		toast.dismiss()
		toast.success('Message Sent Successfully', {
			position: toast.POSITION.BOTTOM_CENTER,
			className: 'm-3',
		})

		setName('')
		setCompany('')
		setEmail('')
		setMessage('')
	}

	return (
		<Fragment>
			<div className='container my-5'>
				<div className='container my-4'>
					{loading && (
						<div className='my-4'>
							<Loader />
						</div>
					)}

					{banner.Text && (
						<div className='card text-center border-0 mb-5' style={{ borderRadius: '12px' }}>
							<div
								className='card-header text-dark'
								style={{ background: '#e9ecef', borderRadius: '8px' }}
							>
								<Marquee gradient={false}>
									<h5 className='geek1 my-0 py-2'>{banner.Text}</h5>
								</Marquee>
							</div>
						</div>
					)}

					<div className='card text-center border'>
						<div className='card-header text-white' style={{ background: '#3E454F' }}>
							{language === 'fr' ? (
								<>
									<h3 className='text-white'>Contactez-nous</h3>
								</>
							) : (
								<>
									<h3 className='text-white'>Contact us</h3>
								</>
							)}
						</div>
						<form className='card-body text-center p-4 ' onSubmit={submitHandler}>
							<input
								type='text'
								className='form-control mb-4'
								placeholder='Name'
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>

							<input
								type='text'
								className='form-control mb-4'
								placeholder='Company'
								required
								value={company}
								onChange={(e) => setCompany(e.target.value)}
							/>

							<input
								type='email'
								className='form-control mb-4'
								placeholder='E-mail'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<div className='form-group'>
								<textarea
									className='form-control rounded-0'
									rows='3'
									placeholder='Message'
									required
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
							</div>

							<button className='btn btn-success btn-block mt-4' type='submit'>
								{language === 'fr' ? 'Envoyer' : 'Send'}
							</button>
						</form>
					</div>

					<div className='container mt-5'>
						<div
							id='map-container-section'
							className='z-depth-1-half map-container-section mb-4'
							style={{ height: '400px' }}
						>
							<Iframe
								src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d488.2931824606457!2d10.11992485155525!3d35.96267912051077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fdbb4258cfbda9%3A0x17a21e8769851afa!2z2LTYsdmD2Kkg2KfZhNmF2YjYp9ivINin2YTZgdmE2KfYrdmK2Kk!5e1!3m2!1sen!2stn!4v1637418116028!5m2!1sen!2stn'
								frameborder='0'
								style={{ border: '0' }}
								allowfullscreen
								className='w-100 h-100'
							></Iframe>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Contact
