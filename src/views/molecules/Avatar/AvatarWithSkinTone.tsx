import { FC, useEffect, useState } from 'react';
import isSvg from 'is-svg'
import { parseSVG, fetchFile } from './ColorUtil'

interface SvgProps {
  url: string
  skinTone?: number
}

export const AvatarWithSkinTone: FC<SvgProps> = ({ url, skinTone }) => {
  const [img, setImg] = useState('')

  const updateAvatar = async () => {
    // fetch if skinTone is not zero
    if (skinTone) {
      const svg = await fetchFile(url)
      if (svg !== '' && isSvg(svg)) {
        const newSvg = parseSVG(svg, skinTone)
        setImg(newSvg)
      } else setImg('')
    } else setImg('')
  }

  useEffect(() => {
    updateAvatar()
  }, [url, skinTone])

  return (
    <>
      {
        img ?
          <img src={`data:image/svg+xml;utf8,${img}`} alt='My Avatar' style={{ width: '100%' }} />
          :
          <img src={url} alt='My Avatar' style={url ? { width: '100%' } : { display: 'none' }} />
      }
    </>
  );
};
