import Link from 'next/link'
import React from 'react'
import ArticleCard from './ArticleCard'
import { Ubuntu } from "next/font/google";
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
});

const Blog = () => {
  return (
    <section className='flex flex-col justify-start md:gap-8 gap-5 items-start mx-10 my-32 md:mx-40 md:my-24'>
      <div className='flex justify-between items-center w-full'>
        <h1 className={cn('text-2xl font-bold', ubuntu.className)}>📰 Latest Articles.</h1>
        <Link href="/blog" className='flex justify-between items-center gap-2 text-primary text-base font-semibold'>
          <p>View All Articles</p>
          <ExternalLink size={20} />
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  )
}

export default Blog