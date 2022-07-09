import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'pxuqtbxc',
  dataset: 'production',
  apiVersion: '2022-07-09',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
