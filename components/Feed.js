import React from 'react'
import { SparklesIcon } from '@heroicons/react/outline'
import Input from './Input'
import Post from './Post'

export default function Feed() {
  const posts = [
    {
      id: '1',
      name: 'Conor Erickson',
      username: 'PlaceholderHandle',
      userImg: 'https://www.clipartmax.com/png/small/87-877360_ic-user-phone-comments-headshot-placeholder.png',
      img: 'https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      text: 'Nice view!',
      timestamp: '2 Hours ago'
    },
    {
      id: '2',
      name: 'Conor Erickson',
      username: 'PlaceholderHandle',
      userImg: 'https://www.clipartmax.com/png/small/87-877360_ic-user-phone-comments-headshot-placeholder.png',
      img: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      text: 'Wow!',
      timestamp: '2 days ago'
    },
  ]

  return (
    <div className='xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
      <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
        <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
          <SparklesIcon className='h-5'/>
        </div>
      </div>
      <Input />
      {posts.map((post)=>(
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
