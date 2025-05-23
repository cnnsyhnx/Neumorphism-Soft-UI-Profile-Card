"use client"

import { useState } from "react"
import { MapPin, LinkIcon, MessageCircle } from "lucide-react"

export default function Component() {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e0e5ec] p-4">
      {/* Main Card with Neumorphic Effect */}
      <div className="w-full max-w-sm rounded-2xl bg-[#e0e5ec] p-8 shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Neumorphic Logo/Avatar */}
          <div className="w-24 h-24 rounded-full bg-[#e0e5ec] flex items-center justify-center shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff]">
            <div className="text-2xl font-bold text-gray-500">AS</div>
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-medium text-gray-700">Alex Smith</h2>
            <p className="text-gray-500 text-sm">@alexsmith</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-5 text-center">
          <p className="text-gray-600 text-sm">Digital creator & photographer. Sharing moments that matter.</p>
        </div>

        {/* Location */}
        <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
          <MapPin className="w-3 h-3 mr-1" />
          <span>San Francisco</span>
        </div>

        {/* Stats - Neumorphic Inset */}
        <div className="mt-6 p-4 rounded-xl bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff]">
          <div className="flex justify-between">
            <div className="text-center px-2">
              <div className="font-medium text-gray-700">1.2K</div>
              <div className="text-xs text-gray-500">Posts</div>
            </div>
            <div className="text-center px-2">
              <div className="font-medium text-gray-700">15.4K</div>
              <div className="text-xs text-gray-500">Followers</div>
            </div>
            <div className="text-center px-2">
              <div className="font-medium text-gray-700">892</div>
              <div className="text-xs text-gray-500">Following</div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Neumorphic */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleFollowClick}
            className={`flex-1 py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
              isFollowing
                ? "bg-[#e0e5ec] text-gray-500 shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff]"
                : "bg-[#e0e5ec] text-gray-700 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] active:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff]"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
          <button className="flex-1 py-2.5 px-4 rounded-xl font-medium text-sm bg-[#e0e5ec] text-gray-700 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] active:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] transition-all duration-300">
            <span className="flex items-center justify-center">
              <MessageCircle className="w-4 h-4 mr-1.5" />
              Message
            </span>
          </button>
        </div>

        {/* Website Link - Neumorphic */}
        <div className="mt-6 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm py-2 px-4 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[1px_1px_3px_#bec3c9,-1px_-1px_3px_#ffffff] active:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all duration-300"
          >
            <LinkIcon className="w-3.5 h-3.5" />
            alexsmith.com
          </a>
        </div>
      </div>
    </div>
  )
}
