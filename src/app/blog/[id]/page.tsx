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
  const tags = postData.tags?.join(', ');
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <p>{tags}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}
