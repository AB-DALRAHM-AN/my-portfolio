import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface BlogPostsCardProps {
  date: any
  readTime: string
  title: string
  description: string
  postLink: string
} 

const blogPostsCard = (
  { date, readTime, title, description, postLink }
  : BlogPostsCardProps
) => {
  return (
    <div className='flex justify-between items-start gap-8'>
      <div className='flex flex-col gap-1 justify-between text-muted-foreground'>
        <p className='text-muted-foreground'>{date}</p>
        <p className='text-muted-foreground'>{readTime}</p>
      </div>
      <div className='flex flex-col gap-1 justify-between'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-muted-foreground'>{description}</p>
        <div className='flex justify-start gap-2 text-primary items-center'>
          <Link href={postLink}>
            <span className='text-primary font-semibold'>Read more</span>
          </Link>
            <ExternalLink size={20} />
        </div>
      </div>

    </div>
  )
}

export default blogPostsCard