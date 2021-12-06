import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom.js'
import Song from './Song'

const Songs = () => {
  const playlist = useRecoilValue(playlistState)
  return (
    <div className="text-white flex-col space-y-1 pb-20 px-8">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  )
}

export default Songs
