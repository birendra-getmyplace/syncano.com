import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import Sitemap from 'components/Sitemap'

// Styles for highlighted code blocks.
// import 'css/zenburn.css'

export default React.createClass({
	render () {
		return (
			<div>
				<Sitemap />
			</div>
		)
	}
})
