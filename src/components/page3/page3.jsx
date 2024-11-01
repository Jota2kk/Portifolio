/* eslint-disable no-unused-vars */
import './page3.css'
import Login from '../../img/Login.png'
import Calculadora from '../../img/Calculadora.png'
import TempoP from '../../img/TempoP.png'
import CRUD from '../../img/CRUD.png'

export const Page3 = ()=>{

    function alerta(){
        return (
            alert("Infelizmente o site ainda nao foi postado")
        )
    }

    return(
            <div className="page3" id='pag3'>
                <h1 id='h1-mpj'>Meus projetos</h1>
                <div className='projects'>

                    <div className='prj1'>

                        <div className='descri'>

                            <a href='' target='_blank' className='a-imgs'><img src={TempoP}/></a>

                            <div className='eta'>

                                <h1>App previsao do tempo</h1>
                                <a>Construi um app de previsao do tempo em tempo real utilizando a OpenWeather Api</a>
                                <p>ReactJs, JavaScript, Html, Css</p>

                                <div className='buttons'>
                                    <button><a href='' target='_blank'>Deploy</a></button>
                                    <button><a href='https://github.com/Jota2kk/app-tempoP'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                        </div>

                    </div>  

                    <div className='prj2'>

                       <div className='descri'>

                            <a href='' onClick={alerta} className='a-imgs'><img src={CRUD}/></a>

                            <div className='eta'>

                                <h1 className='prjs-name'>CRUD</h1>
                                <a>CRUD que expõe os dados do usuario em tela</a>    
                                <p>Node.js, ReactJs, JavaScript, Html, Css e MySql</p>

                                <div className='buttons'>
                                    <button><a href='' onClick={alerta}> Deploy </a></button>
                                    <button><a href='https://github.com/Jota2kk/tela-novo-usuario'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                       </div>                       

                    </div>

                    <div className='prj3'>            
                        <div className='descri'>

                            <a href='' onClick={alerta} className='a-imgs'><img src={Login}/></a>
    
                            <div className='eta'>

                                <h1 className='prjs-name'>Tela de login</h1>
                                <a>Tela de login simples, projeto feito com TailWind CSS </a>    
                                <p>Reactjs,TailWind CSS</p>

                                <div className='buttons'>
                                    <button><a href=''  target='_blank'> Deploy </a></button>
                                    <button><a href='https://github.com/Jota2kk/tela-novo-usuario'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                       </div>

                    </div>

                    <div className='prj4'>

                        <div className='descri'>

                            <a href='https://jota2kk.github.io/Calculadora/' target='_blank' className='a-imgs'><img src={Calculadora}/></a>

                            <div className='eta'>

                                <h1 className='prjs-name'>Calculadora</h1>
                                <a>Calculadora responsiva</a>
                                <p>Html, Css e JavaScript</p>

                                <div className='buttons'>
                                    <button><a href='https://jota2kk.github.io/Calculadora/'  target='_blank'> Deploy </a></button>
                                    <button><a href='https://github.com/Jota2kk/Calculadora'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </div>
    )
}

