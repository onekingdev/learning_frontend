import { FC, useEffect, useState } from 'react';
import isSvg from 'is-svg'
import {parseSVG} from './ColorUtil'
import ReactLoading from 'react-loading';
import {BasicColor} from 'views/Color';

interface SvgProps {
  url: string
  skinTone: number
}

export const AvatarWithSkinTone: FC<SvgProps> = ({ url, skinTone }) => {
  const [img, setImg] = useState('')
  const [svgStr, setSvgStr] = useState('')

  const fetchFile = async () => {
    try {
      if(url){
        const res = await fetch(url).then(r => r.text())
        setSvgStr(res)
      }
    } catch (e) {
      console.log(e)
      setSvgStr('')
    }
  }

  useEffect(() => {

    if (svgStr !== null && isSvg(svgStr)) {
      setImg(parseSVG(svgStr, skinTone))
    } else console.log('This is not svg string.')
  }, [svgStr, skinTone])

  useEffect(() => {
    fetchFile()
  }, [url])

  return (
    <>
    {
      img ?
    <img src={`data:image/svg+xml;utf8,${img}`} alt='My Avatar' style={{ width: '100%' }} />
      :
      <ReactLoading type="spinningBubbles" color={BasicColor.green} />

    }
    </>
  );
};
