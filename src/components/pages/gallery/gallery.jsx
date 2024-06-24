import React from 'react'
import { useState } from 'react'
import Header from '../../headertwo/Header'
import HeaderImage from '../../resources/images/galerytwo.jpg'
import { GrClose } from 'react-icons/gr'



import './gallery.css'

const Gallery = () => {
  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')

  const getImg = (image) => {
    setTempImgSrc(image)
    setModel(true)
  }
  const galleryLength = 95;
  const images = []

  for (let i = 1; i <= galleryLength; i++) {

    images.push(require(`../../../tribunalimages/tribunal${i}.jpg`))
  }
  return (
    <>
      <Header title="Gallery" image={HeaderImage}>
        Office Of The Registrar Tribunals Photos
      </Header>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <GrClose onClick={() => setModel(false)} />
      </div>
      <section className="gallery">
        <div className="gallery_container">
          {
            images.map((image, index) => {
              return <div className='pic' key={index} onClick={() => getImg(image)}>
                <img src={image} alt='' />
              </div>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery  