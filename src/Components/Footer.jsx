import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={"https://avatars.githubusercontent.com/u/250858652"}
                alt='Founder'
            />
            <h2>Abdul Mannan Abid</h2>
            <p>Motivation is temporary, but discipline last forever.</p>
        </div>
        <aside>
        <h2>Social Media</h2>
        <article>
            <a href='https://youtube.com/6packprogrammer' rel='noreferrer' target={"_blank"}>
                <AiFillYoutube/>
            </a>
            <a href='https://www.instagram.com/abdulmananshiekh' target='_blank' rel='noreferrer'>
                <AiFillInstagram/>
            </a>
            <a href='https://github.com/meabhisingh' target='_blank' rel='noreferrer'>
                <AiFillGithub/>
            </a>
        </article>
        </aside>
        <a href='#home'><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer