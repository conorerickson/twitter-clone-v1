/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import { HomeIcon } from '@heroicons/react/solid'
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon
} from '@heroicons/react/outline'

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image width='50' height='50'
        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        alt="Twitter Logo" />
      </div>
      
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text='Home' Icon={HomeIcon} active/>
        <SidebarMenuItem text='Explore' Icon={HashtagIcon} />
        <SidebarMenuItem text='Notifications' Icon={BellIcon} />
        <SidebarMenuItem text='Messages' Icon={InboxIcon} />
        <SidebarMenuItem text='Bookmarks' Icon={BookmarkIcon} />
        <SidebarMenuItem text='Lists' Icon={ClipboardIcon} />
        <SidebarMenuItem text='Profile' Icon={UserIcon} />
        <SidebarMenuItem text='More' Icon={DotsCircleHorizontalIcon} />
      </div>




      {/* Button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      
      {/* Mini-Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img src='https://www.clipartmax.com/png/small/87-877360_ic-user-phone-comments-headshot-placeholder.png' alt='User Image' className="h-10 w-10 rounded-full xl:mr-2" />
        
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Conor Erickson</h4>
          <p className="text-gray-500">@PlaceholderHandle</p>
        </div>
        <DotsHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline'/>
      </div>
      
    </div>
  )
}
