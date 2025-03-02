import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import SocialIcon from '@/components/social-icons'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-col gap-16 space-y-2 pt-6 pb-8 md:flex-row md:gap-24 md:space-y-5">
          <div className="flex flex-col items-center text-center md:w-1/2 md:flex-1">
            <Image
              alt="zico"
              className="grayscale transition-all duration-300 hover:grayscale-0"
              width={240}
              height={240}
              priority
              src="/static/images/avatar.png"
            ></Image>
            <h1 className="mb-2 text-2xl font-bold md:text-4xl">Zhi Chong</h1>
            <p className="mb-4 font-mono text-sm">Scallion Oil Noodles No.1</p>
            <div className="flex flex-col items-center">
              <div className="mb-3 flex space-x-4">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
                <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                <SocialIcon kind="x" href={siteMetadata.x} size={6} />
              </div>
            </div>
          </div>
          <div className="space-y-16 md:w-1/2 md:flex-[1.5]">
            <div className="font-mono">
              <div className="mb-4 text-sm text-gray-500">life.ts</div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-primary-500">const</span> tejas ={' '}
                  <span className="text-gray-500">async</span> ()
                  <span className="text-primary-500"> =&gt;</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-primary-500">while</span> (alive) {'{'}
                </div>
                <div className="pl-8">
                  <span className="text-gray-500">await</span> learn{'()'}
                  <br />
                  <span className="text-gray-500">await</span> debug{'()'}
                  <br />
                  <span className="text-gray-500">await</span> optimize{'()'}
                </div>
                <div className="pl-4">{'}'}</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
