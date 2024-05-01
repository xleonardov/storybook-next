import React from 'react';
import Image from 'next/image';

import SiteTags from '../../tags/SiteTags';

import { Container } from '../../components/Container/Container';

import './project-page.css';

interface ProjectPageProps {
	/**
	 * The content of the page.
	 */
	children?: React.ReactNode;
	/**
	 * The date of the project.
	 */
	date?: string;
	/**
	 * The description of the project.
	 */
	description?: string;
	/**
	 * The main image for the project.
	 */
	mainImage?: string;
	/**
	 * The alt text for the main image.
	 */
	mainImageAlt?: string;
	/**
	 * My role in the project.
	 */
	role?: string;
	/**
	 * The tags for the project.
	 */
	tags?: string[];
	/**
	 * The title of the project.
	 */
	title: string;
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * ProjectPage UI component
 */
export const ProjectPage = ({
	children,
	date,
	description,
	mainImage,
	mainImageAlt,
	role,
	tags,
	title,
	className,
	...props
}: ProjectPageProps) => {
	// Set up classes.
	const baseClass = 'mm-project-page';

	// Render the output.
	return (
		<div
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			<Container width='narrow' className={`${baseClass}__header`}>
				<h1 className={`${baseClass}__title`}>{title}</h1>
				<div className={`${baseClass}__description`}>{description}</div>
				<div className={`${baseClass}__meta`}>
					{role && <div className={`${baseClass}__role`}>{role}</div>}
					{role && date && (
						<span className={`${baseClass}__meta-divider`}>|</span>
					)}
					{date && <div className={`${baseClass}__date`}>{date}</div>}
				</div>
				<div className={`${baseClass}__tags`}>
					<SiteTags siteTags={tags || []} />
				</div>
			</Container>

			{mainImage && mainImageAlt && (
				<div className={`${baseClass}__image`}>
					<Image
						src={mainImage || ''}
						width={960}
						height={540}
						alt={mainImageAlt || ''}
					/>
				</div>
			)}
			<Container width='narrow' className={`${baseClass}__content`}>
				{children}
			</Container>
		</div>
	);
};
