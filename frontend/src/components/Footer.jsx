import React, { useState, Fragment } from 'react'
import img1 from '../images/equipe.jpg'
import img2 from '../images/footer2.jpg'
import img3 from '../images/footer3.png'

const Footer = () => {
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr')

	if (language === '') {
		setLanguage('fr')
	}

	return (
		<Fragment>
			<div className='text-white' style={{ background: '#3E454F' }}>
				<div className='container p-4'>
					<div className='row split-row'>
						<div className='col col-3 split-col p-4 pt-2'>
							<img src={img1} alt='equipe' className='w-100' style={{ borderRadius: '12px' }} />
						</div>
						<div className='col col-9 split-col'>
							{language === 'fr' ? (
								<>
									<h3 className='text-primary'>Une équipe performante</h3>
									<p>
										<b>
											Société Frère Beldi de Commerce International « SFBCI » met à votre
											disposition une équipe efficace pour :
										</b>
									</p>
									<ul>
										<li>
											Effectuer le sourcing des produits, le suivi de la commande, le contrôle de la
											qualité et la gestion complète de la chaîne Logistique.
										</li>
										<li>
											Aider, soutenir et travailler, en étroite collaboration, avec les
											représentants désignés et les importateurs dans les différents pays cibles.
										</li>
										<li>
											Élaborer la stratégie de marketing adaptée aux spécificités de chaque marché
											en intégrant le risque pays, la législation en vigueur et le système de
											distribution et de commercialisation qui y est pratiqué.
										</li>
									</ul>
								</>
							) : (
								<>
									<h3 className='text-primary'>A PROFESSIONAL TEAM</h3>
									<p>
										<b>SFBCI puts at your disposal an efficient team to:</b>
									</p>
									<ul>
										<li>
											source products, track orders, control quality and fully manage the logistics
											chain.{' '}
										</li>
										<li>
											assist, support and work closely with the designated representatives and the
											importers in different target countries.
										</li>
										<li>
											develop the marketing strategy adapted to the specificities of each market by
											integrating country risk, the legislation in force as well as the distribution
											and marketing systems that are practiced there.
										</li>
									</ul>
								</>
							)}
						</div>
					</div>

					<br />

					<div className='row split-row'>
						<div className='col col-3 split-col p-4 pt-2'>
							<img src={img2} alt='equipe' className='w-100' style={{ borderRadius: '12px' }} />
						</div>
						<div className='col col-9 split-col'>
							{language === 'fr' ? (
								<>
									<h3 className='text-primary'>Produit de notoriété mondiale</h3>
									<p>
										<b>
											Consciente qu’une opération d’export repose essentiellement sur un bon
											produit, la Société Frère Beldi de Commerce International « SFBCI » s’engage à
											vous assurer la garantie de réaliser les meilleures opportunités d’affaires
										</b>
									</p>
									<ul>
										<li>
											Collaborer avec nos fournisseurs pour avoir un produit qui répond aux besoins
											de nos clients.
										</li>
										<li>
											Mettre en place un réseau développé de contacts professionnels pour vous
											proposer des solutions d’approvisionnement avec les meilleurs délais et à des
											coûts très compétitifs.
										</li>
									</ul>
								</>
							) : (
								<>
									<h3 className='text-primary'>GLOBALLY KNOWN PRODUCT</h3>
									<p>
										<b>
											Because we are wholly aware that an export operation is mainly based on a good
											product, SFBCI is committed to providing you the best business opportunities
											by:
										</b>
									</p>
									<ul>
										<li>
											Collaborating with our suppliers to have a product that meets the needs of our
											customers.
										</li>
										<li>
											Establishing a developed network of professional contacts to offer supply
											solutions without delay and at competitive costs.
										</li>
									</ul>
								</>
							)}
						</div>
					</div>

					<br />

					<div className='row split-row'>
						<div className='col col-3 split-col p-4 pt-2'>
							<img src={img3} alt='equipe' className='w-100' style={{ borderRadius: '12px' }} />
						</div>
						<div className='col col-9 split-col'>
							{language === 'fr' ? (
								<>
									<h3 className='text-primary'>Transport pratique et économique</h3>
									<p>
										<b>
											En matière de transport, la Société Frère Beldi de Commerce International
											« SFBCI » a réussi de mettre en place des relations avec
											les grands transporteurs internationaux (maritime, aérien et terrestre). Elle
											vous assure :
										</b>
									</p>
									<ul>
										<li>
											Un service de transport, très pratique et économique vers toutes les
											destinations avec un transit-time adéquat.
										</li>
										<li>
											La Possibilité de transport de petites quantités de diverses marchandises.
										</li>
										<li>
											Le suivi et la sécurité de vos commandes conteneurisées, conventionnels,
											groupages ou remorques frigorifiques et autres départ usine jusqu’à arrivée à
											destination et ce en collaboration étroite avec nos agents à l’étranger.
										</li>
									</ul>
								</>
							) : (
								<>
									<h3 className='text-primary'>PRACTICAL AND ECONOMICAL TRANSPORTATION</h3>
									<p>
										<b>
											As regards transportation, SFBCI has a well experienced logistics given its
											close relationships with major international carriers (sea, air and land).
											<br />
											<br />
											It guarantees:
										</b>
									</p>
									<ul>
										<li>
											A very practical and economical transportation of services to all destinations
											with adequate transit time.
										</li>
										<li>The possibility of transporting small quantities of varied goods.</li>
										<li>
											The follow-up and the security of your containers, conventional, groupage or
											reefers and others, from ex-works to final destination, all in close
											collaboration with our overseas agents.
										</li>
									</ul>
								</>
							)}
						</div>
					</div>
				</div>
			</div>

			<footer className='text-center text-white p-4' style={{ background: '#30353E' }}>
				© 2021 Copyright&nbsp;:&nbsp;
				<a
					rel='noopener noreferrer'
					href='https://www.facebook.com/tarak.guezguez'
					tarak='_blank'
					className='text-white text-decoration-none'
				>
					GuezGuez Med.Tarek
				</a>
			</footer>
		</Fragment>
	)
}

export default Footer
