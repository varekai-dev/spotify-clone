import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackState } from '../atoms/songAtom.js'
import useSpotify from './useSpotify.js'

const useSongInfo = () => {
  const spotifyApi = useSpotify()
  const [currentIdTrack, setCurrentIdTrack] = useRecoilState(currentTrackState)
  const [songInfo, setSongInfo] = useState(null)

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentIdTrack) {
        const trackInfo = await fetch(
          `https:api.spotify.com/v1/tracks/${currentIdTrack}`,
          {
            headers: {
              AUthorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          },
        ).then(res => res.json())

        setSongInfo(trackInfo)
      }
    }
    fetchSongInfo()
  }, [currentIdTrack, spotifyApi])
  return songInfo
}

export default useSongInfo
