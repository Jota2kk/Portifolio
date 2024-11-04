/* eslint-disable no-unused-vars */
import './page3.css'
import Login from '../../img/Login.png'
import Conversor from '../../img/ConversorM.png'
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

                            <a href='' onClick={alerta} className='a-imgs'><img src={Conversor}/></a>

                            <div className='eta'>

                                <h1>Conversor de Moedas</h1>
                                <a>Fiz um conversor de moedas, utilizando a ExchangeRate API. Nesse pequeno projeto utilizei o ReactJs junto a o axios para fazer minhas requisições personalizadas. A parte da estilização foi feita com Tailwind CSS.</a>
                                <p>ReactJs, JavaScript e Tailwind CSS</p>

                                <div className='buttons'>
                                    <button><a href='' onClick={alerta}>Deploy</a></button>
                                    <button><a href='https://github.com/Jota2kk/Conversor-De-Moedas'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                        </div>

                    </div>  

                    <div className='prj2'>

                       <div className='descri'>

                            <a href='' onClick={alerta} className='a-imgs'><img src={CRUD}/></a>

                            <div className='eta'>

                                <h1 className='prjs-name'>CRUD</h1>
                                <a>Construi um CRUD com Node.js e MySql que coleta e expõe os dados do usuario em tela.</a>    
                                <p>Node.js, ReactJs, JavaScript, CSS e MySql</p>

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
                                <a>Tela de login estatica. Projeto estilizado com Tailwind CSS.</a>    
                                <p>Reactjs e Tailwind CSS</p>

                                <div className='buttons'>
                                    <button><a href='' onClick={alerta}  target='_blank'> Deploy </a></button>
                                    <button><a href='https://github.com/Jota2kk/Login'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                       </div>

                    </div>

                    <div className='prj4'>

                        <div className='descri'>

                            <a href='https://jota2kk.github.io/app-tempoP/' target='_blank' className='a-imgs'><img src={TempoP}/></a>

                            <div className='eta'>

                                <h1>App previsao do tempo</h1>
                                <a>App que faz a previsão do tempo em tempo real, utilizando o Weather API. Projeto feito no curso de react da Danki code.</a>
                                <p>ReactJs, JavaScript e CSS</p>

                                <div className='buttons'>
                                    <button><a href='https://jota2kk.github.io/app-tempoP/' target='_blank'>Deploy</a></button>
                                    <button><a href='https://github.com/Jota2kk/app-tempoP'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </div>
    )
}

