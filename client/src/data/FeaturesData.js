import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { BiSupport, BiDollar } from 'react-icons/bi';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	
	{
		name: 'Ease of Use',
		description: 'Notre système est facile à utiliser et à intégrer',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	
	{
		name: '5/7 Support Client ',
		description: 'Bloqué ou perdu ? Notre équipe est à votre service  !',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: ' Nous Offrons les meilleurs prix ',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
    {
		name: 'Best Security',
		description: 'Toutes vos opérations sont  en toute sécurité avec nous ',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	
];