import React from 'react'
import {WEBSITE_STYLE, WEBSITE_NAME, WEBSITE_NAME_STYLE, WEBSITE_DESCRIPTION, IMAGES, IMG_STYLE, BUTTON, BUTTON_STYLE} from './config'

function App() {
  return (
    <div className={WEBSITE_STYLE}>
      <h1 className={WEBSITE_NAME_STYLE}>
        {WEBSITE_NAME}
      </h1>

      <p className='pt-20 pb-4 text-ms '>
        {WEBSITE_DESCRIPTION}
      </p>

      <div className='flex flex-wrap '>
        <img src={IMAGES.img1} className={IMG_STYLE} />
        <img src={IMAGES.img2} className={IMG_STYLE} />
        <img src={IMAGES.img3} className={IMG_STYLE} />
        <img src={IMAGES.img4} className={IMG_STYLE} />
        <img src={IMAGES.img5} className={IMG_STYLE} />
        <img src={IMAGES.img6} className={IMG_STYLE} />
        <img src={IMAGES.img7} className={IMG_STYLE} />
      </div>
    
      <button className={BUTTON_STYLE}>
        {BUTTON}
      </button>
    </div>
  )
}

export default App
