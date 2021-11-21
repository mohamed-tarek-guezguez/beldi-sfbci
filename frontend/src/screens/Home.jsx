import React, { useState, useEffect, Fragment } from 'react'
import Marquee from 'react-fast-marquee'
import { useDispatch, useSelector } from 'react-redux'
import { BannerAction } from '../actions/banner'

import video from '../video/video.mp4'

const Home = () => {
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

				<div className='row split-row'>
					<div className='col col-12 split-col mt-2'>
						{language === 'fr' ? (
							<>
								<h3 className='text-primary'>A PROPOS</h3>
								<p>
									La Société Frère Beldi de Commerce International « SFBCI » est une société de
									commerce international, négoce et courtage créée en …………….. sous le statut d’une
									société à responsabilité limitée « SARL », et sous le régime douanier de société «
									résidente » totalement exportatrice, de nationalité Tunisienne.
								</p>
								<p>
									La Société Frère Beldi de Commerce International « SFBCI » propose tous types de
									produits dans différents secteurs d’activités livrés à votre destination souhaitée
									et met à votre disposition une équipe efficace pour effectuer le sourcing des
									produits, la négociation, le suivi de la commande, le contrôle de qualité et la
									gestion complète de la chaîne Logistique.
								</p>
								<p>
									Son engagement est de vous garantir la réalisation des meilleures opportunités
									d’affaires.
								</p>
								<br />
								<h3 className='text-primary'>BIENVENUE</h3>
								<p className='mt-3 mb-2'>
									Face à la concurrence acharnée qu’a connue le marché de biens et services à
									l’échelle internationale, la Société Frère Beldi de Commerce International
									« SFBCI » a choisi de partir vers la découverte de nouveaux horizons pour
									promouvoir les produits tunisiens.
									<br />
									<br />
									Grâce à ses partenaires locaux et étrangers, elle va essayer de véhiculer une
									belle image de la Tunisie et de ses richesses à travers une ligne de produits
									diversifiés pour les divers secteurs d’activité.
									<br />
									<br />
									Elle vous assure son total engagement pour vous garantir une offre continue de
									produits avec un rapport qualité / prix avantageux et toujours dans les meilleurs
									délais.
								</p>
							</>
						) : (
							<>
								<h3 className='text-primary'>ABOUT US</h3>
								<p>
									The Brother Beldi International Trade Company“SFBCI” is an international trading
									and Broker Company established in ........ as a totally exporting resident
									company, with limited-liability “SARL”, of Tunisian nationality.
								</p>
								<p>
									SFBCI deals with all types of products in various sectors of activities that are
									delivered to your desired destinations, and puts at your disposal an efficient
									team that performs the sourcing of products, the negotiation, the tracking of
									orders, the control of quality and the complete management of the logistics chain.{' '}
								</p>
								<p>We engage to guarantee the achievement of the best business opportunities.</p>
								<br />
								<h3 className='text-primary'>WELCOME</h3>
								<p className='mt-3 mb-2'>
									In view of the fierce global competition experienced by the market of goods and
									services, SFBCI has chosen to explore new horizons to promote Tunisian products.
									<br />
									<br />
									Thanks to its local and foreign partners, it will undertake to convey a positive
									image of Tunisia and of its wealth, via a line of varied products belonging to
									diverse sectors.
									<br />
									<br />
									It guarantees the continuing supply of products with an outstanding quality- price
									ratio and always in a timely manner.
								</p>
							</>
						)}
						<br />
					</div>
				</div>

				<hr className='text-muted my-2' />
				<br />

				<div className='container mb-4 p-0' style={{ height: '420px' }}>
					<video
						controls
						autoPlay
						loop
						muted
						className='container h-100 w-100'
						style={{ objectFit: 'cover' }}
					>
						<source src={video} type='video/mp4' />
					</video>
				</div>
			</div>
		</Fragment>
	)
}

export default Home
