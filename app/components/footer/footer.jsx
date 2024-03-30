import React from 'react'
import Link from 'next/link'
function Footer() {
	return (
		<footer className='footerContainer' >
			<div className='footer1'>
				<p> <strong> Copyright © 2012 The Example Company </strong></p>
				<p>
					<Link href="/">About</Link>
					<Link href="/">Privacy Policy</Link>
					<Link href="/">Contact Us</Link>
				</p>
			</div>

			<div className='footer2'>
				<p> <strong>Quik links </strong></p>
				<p>
					<Link href="/">Return</Link>
					<Link href="/">Refund Policy</Link>
					<Link href="/">Our Us</Link>
				</p>
			</div>

			<div className='footer3'>
			<p><strong> Quik links </strong></p>
				<p>
					<Link href="/">Faq</Link>
					<Link href="/">Privcy Policy</Link>
					<Link href="/">Terms and conditions</Link>
				</p>
			</div>
		</footer>
	)
}

export default Footer

