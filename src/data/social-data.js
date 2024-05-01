import {
	faDrupal,
	faGithub,
	faInstagram,
	faLinkedin,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquareRss } from '@fortawesome/free-solid-svg-icons';

export const socialData = {
	drupal: {
		icon: faDrupal,
		url: 'https://www.drupal.org/u/mel-miller',
		label: 'Drupal',
	},
	email: {
		icon: faEnvelope,
		url: 'mailto:me@mel-miller.com?subject=Inquiry from mel-miller.com',
		label: 'Email',
	},
	github: {
		icon: faGithub,
		url: 'https://github.com/mel-miller',
		label: 'GitHub',
	},
	instagram: {
		icon: faInstagram,
		url: 'https://www.instagram.com/__mel.miller__/',
		label: 'Instagram',
	},
	linkedin: {
		icon: faLinkedin,
		url: 'https://www.linkedin.com/in/melissa-a-miller-6a37744/',
		label: 'LinkedIn',
	},
	rss: {
		icon: faSquareRss,
		url: '/feed.xml',
		label: 'RSS feed',
	},
	xTwitter: {
		icon: faXTwitter,
		url: 'https://twitter.com/_mel_miller_',
		label: 'X',
	},
};
