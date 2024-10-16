import './page3.css'
import prjI from '../../img/prjImg.jpeg'

export const Page3 = ()=>{
    return(
            <div className="page3" id='pag3'>
                <h1 id='h1-mpj'>Meus projetos</h1>
                <div className='projects'>

                    <div className='prj1'>

                        <div className='descri'>

                            <a href='' target='_blank' className='a-imgs'><img src={prjI}/></a>

                            <div className='eta'>

                                <h1>App Previsao Do Tempo</h1>
                                <a>Construi um app de previsao do tempo em tempo real utilizando a whatever Api</a>
                                <p>Node.js, ReactJs, JS, Html, Css</p>

                                <div className='buttons'>
                                    <button><a href=''  target='_blank'> Deploy </a></button>
                                    <button><a href='https://github.com/Jota2kk/tela-novo-usuario'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                        </div>

                    </div>  

                    <div className='prj2'>

                       <div className='descri'>

                            <a href='' target='_blank' className='a-imgs'><img src={prjI}/></a>

                            <div className='eta'>

                                <h1 className='prjs-name'>Tela de login</h1>
                                <a>Site feito com React, Node.js e o banco de dados Mysql. Envia todas as informações de um novo usuario para o banco de dados e a mesmo tempo expoe em tela os usarios ja cadastrados.</a>    
                                <p>Node.js, ReactJs, JS, Html, Css e MySql</p>

                                <div className='buttons'>
                                    <button><a href=''  target='_blank'> Deploy </a></button>
                                    <button><a href='https://github.com/Jota2kk/tela-novo-usuario'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                       </div>                       

                    </div>

                    <div className='prj3'>            
                        <div className='descri'>

                            <a href='' target='_blank' className='a-imgs'><img src={prjI}/></a>
    
                            <div className='eta'>

                                <h1 className='prjs-name'>Tela de login</h1>
                                <a>Site feito com React, Node.js e o banco de dados Mysql. Envia todas as informações de um novo usuario para o banco de dados e a mesmo tempo expoe em tela os usarios ja cadastrados.</a>    
                                <p>Node.js, ReactJs, JS, Html, Css e MySql</p>

                                <div className='buttons'>
                                    <button><a href=''  target='_blank'> Deploy </a></button>
                                    <button><a href='https://github.com/Jota2kk/tela-novo-usuario'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                       </div>

                    </div>

                    <div className='prj4'>

                        <div className='descri'>

                            <a href='' target='_blank' className='a-imgs'><img src={prjI}/></a>

                            <div className='eta'>

                                <h1 className='prjs-name'>Tela de login</h1>
                                <a>Site pradonizado para exposição de cardapio de uma hamburgueria. feito com React</a>
                                <p>Node.js, ReactJs, JS, Html, Css e MySql</p>

                                <div className='buttons'>
                                    <button><a href=''  target='_blank'> Deploy </a></button>
                                    <button><a href='https://github.com/Jota2kk/tela-novo-usuario'  target='_blank'>GitHub</a></button>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </div>
    )
}

