import React, { useState, useEffect, Fragment } from 'react'
import Marquee from 'react-fast-marquee'
import { useDispatch, useSelector } from 'react-redux'
import { BannerAction } from '../actions/banner'

const Services = () => {
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr')
	if (language === '') {
		setLanguage('fr')
	}

	const dispatch = useDispatch()

	const getBanner = useSelector((state) => state.getBanner)
	const { banner } = getBanner

	useEffect(() => {
		dispatch(BannerAction())
	}, [dispatch])

	return (
		<Fragment>
			<div className='container my-5'>
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

				{language === 'fr' ? (
					<>
						<h3 className='text-primary mt-2'>NOS SERVICES</h3>
						<p className='mt-3 mb-2'>
							Consciente des enjeux du commerce international moderne et un envie d’une
							disponibilité permanente,{' '}
							<b>la Société Frère Beldi de Commerce International « SFBCI »</b> a mis en place un
							système complet pour maîtriser parfaitement l’ensemble des besoins de ses clients afin
							de répondre à leurs attentes.
						</p>

						<p className='mt-3 mb-2'>
							À la recherche de nouveaux partenaires sur le terrain et les lieux d’expéditions,{' '}
							<b>la Société Frère Beldi de Commerce International « SFBCI »</b> implique une
							organisation rigoureuse et mobile pour assurer une satisfaction totale à ses clients
							lors de la réalisation de ses prestations.
						</p>

						<p className='mt-3 mb-2'>
							En choisissant <b>la Société Frère Beldi de Commerce International « SFBCI »</b>
							comme partenaire en Tunisie, vous bénéficiez :
						</p>

						<br />

						<ul>
							<li>De produits de bonne qualité et avec des prix avantageux.</li>

							<li>D’un service de transport, très pratique et économique.</li>

							<li>De la possibilité de transport de petites quantités de diverses marchandises.</li>

							<li>
								D’un interlocuteur efficace qui a pour mission de vous trouvez une offre continue,
								compatible à votre demande pour un produit spécifique ou un groupe de produits.
							</li>

							<li>
								D’une présence permanente sur terrain pour assurer un suivi régulier des opérations
								et garantir la conformité des expéditions.
							</li>
						</ul>
					</>
				) : (
					<>
						<h3 className='text-primary mt-2'>OUR SERVICES</h3>
						<p className='mt-3 mb-2'>
							Aware of the challenges associated with the modern international business, SFBCI, via
							its constant availability, fully grasps all the needs of its customers in order to
							meet their expectations.
						</p>

						<p className='mt-3 mb-2'>
							SFBCI, in its continuous search for new partners, both in the field and in the
							shipping locations, makes use of a rigorous and mobile organization to guarantee the
							total satisfaction of its customers when providing the services.
						</p>

						<p className='mt-3 mb-2'>By choosing SFBCI as a partner in Tunisia, you will have:</p>

						<br />

						<ul>
							<li>High-quality and good-price products</li>

							<li>very practical and economical transport service</li>

							<li>The possibility of transporting small quantities of varied goods.</li>

							<li>
								An effective partner whose mission is to maintain a continuous supply tailored to
								your need of a specific product or group of products.
							</li>

							<li>
								A permanent presence in the field to ensure regular monitoring of operations and
								ensure compliance of shipments.
							</li>
						</ul>
					</>
				)}
			</div>
		</Fragment>
	)
}

export default Services
