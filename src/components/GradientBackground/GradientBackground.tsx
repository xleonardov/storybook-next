import React from 'react';

import './gradient-background.css';

interface GradientBackgroundProps {
	/**
	 * The content to display on top of the gradient background.
	 */
	children?: React.ReactNode;
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * GradientBackground UI component
 */
export const GradientBackground = ({
	children,
	className,
	...props
}: GradientBackgroundProps) => {
	// Set up classes.
	const baseClass = 'mm-gradient-background';

	// Render the output.
	return (
		<div
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			<div className={`${baseClass}__content`}>{children}</div>
			<svg xmlns='http://www.w3.org/2000/svg'>
				<defs>
					<filter id='goo'>
						<feGaussianBlur
							in='SourceGraphic'
							stdDeviation='10'
							result='blur'
						/>
						<feColorMatrix
							in='blur'
							mode='matrix'
							values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
							result='goo'
						/>
						<feBlend in='SourceGraphic' in2='goo' />
					</filter>
				</defs>
			</svg>
			<div className={`${baseClass}__container`}>
				<div className='g1'></div>
				<div className='g2'></div>
				<div className='g3'></div>
				<div className='g4'></div>
				<div className='g5'></div>
				<div className='interactive'></div>
			</div>
		</div>
	);
};
