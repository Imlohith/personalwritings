import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  try {
    const authorDetails = await getFileBySlug('authors', ['default'])
    return {
      props: { authorDetails },
      source: 'pages/about.js',
    }
  } catch (error) {
    console.error(error)
    return {
      props: {},
      source: 'pages/about.js',
    }
  }
}

export default function About({ authorDetails }) {
  if (!authorDetails || !authorDetails.mdxSource || !authorDetails.frontMatter) {
    return <div>Error: Invalid author details</div>
  }

  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
