import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'

interface abouts {
  title: string
  describtion: string
  imageurl: string
}
const About = () => {
  const [abouts, setAbouts] = useState<abouts[]>([])
  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch<abouts[]>(query).then((data) => setAbouts(data))
  }, [])
  return (
    <>
      <h2 className='head-text'>
        I Know That <span>Good Design</span>
        <br />
        means
        <span> Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imageurl).url()} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 20 }}>
              {about.describtion}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
