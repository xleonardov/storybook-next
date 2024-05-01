import React from 'react';

import './button.css';

interface ButtonProps {
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Button size.
	 */
	size?: 'sm' | 'md' | 'lg';
	/**
	 * Button type.
	 */
	type?: 'button' | 'submit' | 'reset';
	/**
	 * Which variant of the button to use.
	 */
	variant?: 'primary' | 'secondary';
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
	/**
	 * Optional additional class names
	 */
	className?: string;
}

/**
 * Button UI component
 */
export const Button = ({
	label,
	size = 'md',
	type = 'button',
	variant = 'primary',
	className,
	...props
}: ButtonProps) => {
	// Set up classes.
	const baseClass = 'mm-button';
	const sizeClass = size !== 'md' ? `${baseClass}--${size}` : null;
	const variantClass =
		variant !== 'primary' ? `${baseClass}--${variant}` : null;

	return (
		<button
			type={type}
			className={[baseClass, sizeClass, variantClass, className]
				.join(' ')
				.trim()
				.replace(/\s+/g, ' ')}
			{...props}
		>
			{label}
		</button>
	);
};
