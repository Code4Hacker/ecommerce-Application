import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
    projectId:'4zpcu7m4',
    dataset:'production',
    apiVersion:'2023-01-13',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);