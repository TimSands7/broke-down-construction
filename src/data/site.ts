// Single source of truth for business details used across the site.
export const site = {
	name: 'Broke Down Construction',
	legalName: 'Broke Down Construction LLC',
	tagline: 'Site Work & Concrete Done Right',
	phone: '980-448-4958',
	phoneHref: 'tel:+19804484958',
	email: 'brokedownconstruction@gmail.com',
	city: 'Kings Mountain, NC',
	radiusNote: 'Proudly serving Kings Mountain and up to a 2-hour radius',
	mapsHref: 'https://www.google.com/maps/search/?api=1&query=Kings+Mountain+NC',
};

export const serviceArea = [
	'Kings Mountain',
	'Charlotte',
	'Gastonia',
	'Shelby',
	'Rock Hill, SC',
	'Spartanburg, SC',
	'Hickory',
	'Statesville',
];

export const nav = [
	{ label: 'Services', href: '#services' },
	{ label: 'Our Work', href: '#work' },
	{ label: 'Service Area', href: '#area' },
	{ label: 'Contact', href: '#contact' },
];

// Inline SVG path data — square-cap line icons, no icon library needed.
export const services = [
	{
		title: 'Grading',
		copy: 'Site leveling and dirt work that sets the stage for everything built on top of it.',
		icon: 'M3 20h18M4 20l6-11 4 7 3-5 4 9M4 20l6-11',
	},
	{
		title: 'Concrete',
		copy: 'Driveways, walkways, pads, and flatwork — poured, finished, and built to hold up.',
		icon: 'M3 8h18v12H3zM3 8l3-4h12l3 4M9 8v12M15 8v12',
	},
	{
		title: 'Foundations',
		copy: 'Slabs and footers poured to spec, the base every structure depends on.',
		icon: 'M4 21h16M5 21V10l7-6 7 6v11M9 21v-6h6v6',
	},
	{
		title: 'Pool Installation',
		copy: 'Excavation, grading, and site prep to get your pool project in the ground.',
		icon: 'M3 17c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M4 17V6h16v11',
	},
	{
		title: 'Fence Installation',
		copy: 'Aluminum, vinyl, and wood privacy fencing — set square, plumb, and built to last.',
		icon: 'M4 21V9l4-3v15M4 12h4M12 21V9l4-3v15M12 12h4M20 21V6M20 6l-4 3',
	},
	{
		title: 'Tree Removal',
		copy: 'Bucket truck and ground crew take down hazard trees and clean up completely.',
		icon: 'M12 3l5 7h-3l4 6h-4v6h-4v-6H6l4-6H7z',
	},
	{
		title: 'Land Clearing',
		copy: 'Excavators and mulchers turn overgrown lots into buildable, usable ground.',
		icon: 'M3 20h18M6 20l3-9 3 5 2-4 4 8M6 20l3-9',
	},
	{
		title: 'Developments',
		copy: 'Full-site work for new builds — clearing, grading, and utilities in one crew.',
		icon: 'M4 21V11l4-3 4 3v10M12 21V8l4-3 4 3v13M4 21h16',
	},
	{
		title: 'Drainage Solutions',
		copy: 'French drains and channel systems that keep water moving away from your property.',
		icon: 'M4 6h16M6 6v6a6 6 0 0 0 12 0V6M9 20h6',
	},
	{
		title: 'Trucking',
		copy: 'Our own dump trucks haul dirt, stone, and debris — no waiting on a rental fleet.',
		icon: 'M3 17V8h9v9M3 17h1a2 2 0 0 0 4 0h5a2 2 0 0 0 4 0h1v-4l-3-4h-6v8',
	},
];
