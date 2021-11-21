import React, { useState, useEffect, Fragment } from 'react'
import Marquee from 'react-fast-marquee'
import { useDispatch, useSelector } from 'react-redux'
import { BannerAction } from '../actions/banner'

const Presentation = () => {
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
						<h3 className='text-primary mt-2'>PRESENTATION</h3>
						<p className='mt-3 mb-2'>
							<b>la Société Frère Beldi de Commerce International « SFBCI » </b>
							est une société de commerce international, localisée dans la zone industrielle …………..,
							gouvernorat de Kairouan en Tunisie - Première ville arabe d'Afrique du Nord et un
							important centre islamique de l’Afrique du nord musulmane, est à moins de 150 km du
							port Rades qui est le premier port de commerce en Tunisie (spécialisé dans le trafic
							de conteneurs et unités roulantes) et 50 km du port Sousse deuxième port spécialisé
							dans le traitement des marchandises diverses en Tunisie.
						</p>

						<p className='mt-3 mb-2'>
							Une Expertise confirmée des produits et des marchés et un réseau développé de contacts
							professionnels sont mis en œuvre pour vous proposer des solutions d’approvisionnement
							avec les meilleurs délais et à des coûts très compétitifs.
						</p>

						<p className='mt-3 mb-2'>
							Les frères Beldi – fondateurs de la Société Frère Beldi de Commerce International «
							SFBCI » ont exploité les relations étroites et explorées qui les relies avec les
							grands producteurs qui sont dotés des dernières innovations technologiques en matière
							de contrôle de qualité de divers produits qui répondront aux normes internationales
							ISO, et ce pour vous assurer une offre continue qui répond à toutes vos exigences et
							besoins en mettant à votre dispositions une large gamme de produits Tunisiens dans
							divers secteurs.
						</p>
					</>
				) : (
					<>
						<h3 className='text-primary mt-2'>PRESENTATION</h3>
						<p className='mt-3 mb-2'>
							<b>SFBCI is an international trading company, </b>
							located in the industrial zone ………… .., Kairouan governorate in Tunisia - First Arab
							and an important Islamic center of North Africa Muslim, is less than 150 km from the
							Rades port which is the first commercial port in Tunisia (specializing in the traffic
							of containers and wheeled units) and 50 km from the Sousse port, the second port
							specializing in the processing of general cargo in Tunisia.
						</p>

						<p className='mt-3 mb-2'>
							A substantial expertise in products and markets and a developed network of
							professional contacts will be put into operation to offer you supply solutions in
							timely manner and at competitive costs.
						</p>

						<p className='mt-3 mb-2'>
							Thanks to its close relationships with major producers who are well-equipped with the
							up-to-date quality control technologies of a range of products that meet the ISO
							international standards, SFBCI ensures a continuous supply that matches your
							requirements and needs by providing you with a wide range of Tunisian products in
							various sectors.
						</p>
					</>
				)}
			</div>
		</Fragment>
	)
}

export default Presentation
