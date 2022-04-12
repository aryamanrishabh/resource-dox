import React from 'react'
import { NextPage } from 'next'
import {
  Aperture,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Book,
  Briefcase,
  Calendar,
  Chat,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ClipBoard,
  Clock,
  Copy,
  Cross,
  Cross2,
  Download,
  ExternalLink,
  FourSquares,
  Headphones,
  Home,
  Journal,
  Lock,
  Mute,
  Package,
  PaperClip,
  PaperPlane,
  Pause,
  Phone,
  Play,
  Star,
  ThreeDots,
  UserVerified,
  VerifiedTick,
  VolumeUp,
} from 'ih-resources-beta'

const Assets: NextPage = () => {
  return (
    <div className="w-full space-y-8">
      <div className="font-mono text-sm text-indigo-700 lg:px-48 lg:text-lg">
        Every asset provides you with 4 props
        <ol className="ml-4 list-disc">
          <li>bgColor - control the background of the SVG</li>
          <li>color - control the foreground of the SVG</li>
          <li>className - transform, translate, control dimensions, go nuts</li>
          <li>onClick - provide console logs :')</li>
        </ol>
      </div>
      <div className="flex items-center justify-center whitespace-nowrap font-mono text-[10px] text-indigo-800 lg:px-48 lg:text-base">
        <div className="grid w-full grid-cols-4 gap-[2px] rounded-2xl border-2 border-slate-300 bg-slate-300">
          <div className="card space-y-2 rounded-tl-2xl">
            <ArrowLeft color="#7780A1" className="asset" />
            <span>ArrowLeft</span>
          </div>
          <div className="card space-y-2">
            <ArrowUp color="#7780A1" className="asset" />
            <span>ArrowUp</span>
          </div>
          <div className="card space-y-2">
            <ArrowRight color="#7780A1" className="asset" />
            <span>ArrowRight</span>
          </div>
          <div className="card space-y-2 rounded-tr-2xl">
            <ArrowDown color="#7780A1" className="asset" />
            <span>ArrowDown</span>
          </div>
          <div className="card space-y-2">
            <ChevronLeft color="#7780A1" className="asset" />
            <span>ChevronLeft</span>
          </div>
          <div className="card space-y-2">
            <ChevronUp color="#7780A1" className="asset" />
            <span>ChevronUp</span>
          </div>
          <div className="card space-y-2">
            <ChevronRight color="#7780A1" className="asset" />
            <span>ChevronRight</span>
          </div>
          <div className="card space-y-2">
            <ChevronDown color="#7780A1" className="asset" />
            <span>ChevronDown</span>
          </div>
          <div className="card space-y-2">
            <Aperture color="#7780A1" className="asset" />
            <span>Aperture</span>
          </div>
          <div className="card space-y-2">
            <Briefcase color="#7780A1" className="asset" />
            <span>Briefcase</span>
          </div>
          <div className="card space-y-2">
            <Book color="#7780A1" className="asset" />
            <span>Book</span>
          </div>
          <div className="card space-y-2">
            <Calendar color="#7780A1" className="asset" />
            <span>Calendar</span>
          </div>
          <div className="card space-y-2">
            <Chat color="#7780A1" className="asset" />
            <span>Chat</span>
          </div>
          <div className="card space-y-2">
            <ClipBoard color="#7780A1" className="asset" />
            <span>ClipBoard</span>
          </div>
          <div className="card space-y-2">
            <Clock color="#7780A1" className="asset" />
            <span>Clock</span>
          </div>
          <div className="card space-y-2">
            <Copy color="#7780A1" className="asset" />
            <span>Copy</span>
          </div>
          <div className="card space-y-2">
            <Cross color="#7780A1" className="asset" />
            <span>Cross</span>
          </div>
          <div className="card space-y-2">
            <Cross2 color="#7780A1" className="asset" />
            <span>Cross2</span>
          </div>
          <div className="card space-y-2">
            <Download color="#7780A1" className="asset" />
            <span>Download</span>
          </div>
          <div className="card space-y-2">
            <ExternalLink color="#7780A1" className="asset" />
            <span>ExternalLink</span>
          </div>
          <div className="card space-y-2">
            <FourSquares color="#7780A1" className="asset" />
            <span>FourSquares</span>
          </div>
          <div className="card space-y-2">
            <Headphones color="#7780A1" className="asset" />
            <span>Headphones</span>
          </div>
          <div className="card space-y-2">
            <Home color="#7780A1" className="asset" />
            <span>Home</span>
          </div>
          <div className="card space-y-2">
            <Journal color="#7780A1" className="asset" />
            <span>Journal</span>
          </div>
          <div className="card space-y-2">
            <Lock color="#7780A1" className="asset" />
            <span>Lock</span>
          </div>
          <div className="card space-y-2">
            <Mute color="#7780A1" className="asset" />
            <span>Mute</span>
          </div>
          <div className="card space-y-2">
            <Package color="#7780A1" className="asset" />
            <span>Package</span>
          </div>
          <div className="card space-y-2">
            <PaperClip color="#7780A1" className="asset" />
            <span>PaperClip</span>
          </div>
          <div className="card space-y-2">
            <PaperPlane color="#7780A1" className="asset" />
            <span>PaperPlane</span>
          </div>
          <div className="card space-y-2">
            <Pause color="#7780A1" className="asset" />
            <span>Pause</span>
          </div>
          <div className="card space-y-2">
            <Phone color="#7780A1" className="asset" />
            <span>Phone</span>
          </div>
          <div className="card space-y-2">
            <Play color="#7780A1" className="asset" />
            <span>Play</span>
          </div>
          <div className="card space-y-2">
            <Star color="#7780A1" className="asset" />
            <span>Star</span>
          </div>
          <div className="card space-y-2">
            <ThreeDots color="#7780A1" className="asset" />
            <span>ThreeDots</span>
          </div>
          <div className="card space-y-2">
            <UserVerified color="#7780A1" className="asset" />
            <span>UserVerified</span>
          </div>
          <div className="card space-y-2">
            <VerifiedTick bgColor="#7780A1" className="asset" />
            <span>VerifiedTick</span>
          </div>
          <div className="card space-y-2 rounded-bl-2xl">
            <VolumeUp color="#7780A1" className="asset" />
            <span>VolumeUp</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assets
