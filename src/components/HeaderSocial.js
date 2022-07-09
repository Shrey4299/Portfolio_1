import React from 'react'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {FiDribbble} from 'react-icons/fi'

function HeaderSocial() {
  return (
    <div className='flex flex-col items-center gap-6 absolute left-0 bottom-12  text-blue-400'>
        <a href="http://linkedin.com" traget="blank"><AiFillLinkedin/></a>
        <a href="http://github.com" traget="blank"><AiFillGithub/></a>
        <a href="http://dribbble.com" traget="blank"> <FiDribbble/></a>

    </div>
  )
}

export default HeaderSocial