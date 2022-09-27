import imageone from "../images/banner1.png"

export const data = [
	{
		title: 'Lorem ipsum dolor sit amet',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		image: imageone,
	},
	{
		title: 'Lorem ipsum dolor sit amet',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		image: imageone  ,
	},
	{
		title: 'Lorem ipsum dolor sit amet',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		image: imageone ,
	},
	{
		title: 'Lorem ipsum dolor sit amet',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		image: imageone,
	},
	{
		title: 'Lorem ipsum dolor sit amet',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		image: imageone,
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};