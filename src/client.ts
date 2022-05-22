import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = sanityClient({
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2021-10-21',
    useCdn:true,
    token: process.env.REACT_APP_SANITY_PROJECT_TOKEN    
})

const builder = imageUrlBuilder(client)

export const urlFor = (source:SanityImageSource) => builder.image(source)