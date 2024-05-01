import Date from '@/utilities/date';

import { Page as PageLayout } from '../../../layout-components/Page/Page';

import { getPostData } from '@/lib/posts';

type Params = {
	id: string;
};

type Props = {
	params: Params;
};

type PostData = {
	date: string;
	title: string;
	tags?: string[];
	contentHtml: string;
};

export async function generateMetadata({ params }: Props) {
	const postData: PostData = await getPostData(params.id);

	return {
		title: postData.title,
	};
}

export default async function Post({ params }: Props) {
	const postData: PostData = await getPostData(params.id);
	const pathname = `/blog/${params.id}`;
	const tags = postData.tags?.join(', ');
	return (
		<PageLayout
			containerWidth='standard'
			pageTitle={postData.title}
			pathname={pathname}
			showBreadcrumb={true}
		>
			<p>
				<Date dateString={postData.date} />
			</p>
			<p>{tags}</p>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</PageLayout>
	);
}
