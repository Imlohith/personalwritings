import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="max-w-screen-xl  mx-auto" id="about">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8  sm:py-16 ">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h3 className="text-3xl lg:text-2xl xl:text-2xl font-medium text-black-600 leading-normal">
              Hey, I'm
            </h3>
            <h1 className="text-3xl lg:text-4xl xl:text-4xl font-medium text-black-600 leading-normal">
              <strong>
                <code>Lohith Gangadevi</code>
              </strong>
            </h1>
            <p className="text-black-500 mt-4 mb-6 ">
              A full stack web developer based in Bangalore.
            </p>
            {/* <button className='bg-white rounded text-black p-2 px-6 font-bold'>Hire me</button> */}
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <Image
                src="/assets/profilepic.png"
                alt="VPN Illustrasi"
                quality={100}
                width={600}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <section>
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-18 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-xl font-medium text-gray-900 md:text-1xl dark:text-white mb-4">
                  "I am a full-stack developer with 3 years of experience in designing, building,
                  and deploying web applications. I am well-versed in various programming languages,
                  including JavaScript, Python, and have experience working with front-end
                  technologies such as React, as well as back-end technologies such as Node.js,
                  Express"
                </p>
                <p className="text-xl font-medium text-gray-900 md:text-1xl dark:text-white">
                  "In addition to my experience with full-stack development, I am also an
                  AWS-certified developer and have extensive experience working with various AWS
                  services to build and deploy scalable, highly available, and fault-tolerant
                  systems. I have experience working with services such as EC2, S3, Lambda, and RDS,
                  and have a strong understanding of AWS best practices and architecture patterns."
                </p>
              </blockquote>
            </figure>
          </div>
        </section>
      </div>
    </>
  )
}
