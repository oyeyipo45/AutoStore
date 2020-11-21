import React from 'react';

import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='descripton' content={description} />
			<meta name='keywords' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: 'Welcome to AUTO Store',
	description: 'Well sell best products for digital appliances',
	keywords: 'electronics, buy electronics, phones, laptops, ipads',
};

export default Meta;
