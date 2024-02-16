import React from 'react';
import { Metadata } from 'next';

import BlogContent from '@/app/blog/BlogContent';
import PostList from './PostList';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function Page() {
  const title = metadata.title?.toString();

  return (
    <BlogContent pageTitle={title}>
      <PostList />
    </BlogContent>
  );
}
