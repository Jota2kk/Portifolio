import '../page4/page4.css'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiFillMail } from "react-icons/ai";


export const Page4 = ()=> {
    return (
        <div className='page4' id='pag4'>

            <h1>CONTATOS</h1>
            
            <div className='conts'>
                <a href="https://wa.me/11982018205" target='_blank' id='fawhat'><FaWhatsapp /></a>
                <a href='' target='_blank'><AiFillMail /></a>
                <a href='https://www.linkedin.com/in/joao-amer-49728a240/' target='_blank'><FaLinkedin /> </a>
                <a href="https://github.com/Jota2kk" target='_blank'><FaGithub /></a>
            </div>
            
        </div>
    )
}