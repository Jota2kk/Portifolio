import './page3.css'
import prjI from '../../img/prjImg.jpeg'

export const Page3 = ()=>{
    return(
            <div className="page3" id='pag3'>
                <h1 id='h1-mpj'>Meus projetos</h1>
                <div className='projects'>

                    <div className='prj1'>

                        <a href='' target='_blank'><img src={prjI}/></a>
                        <h1>App Previsão do tempo</h1>
                        <a>Construi um app de previsao do tempo em tempo real utilizando  a whatever Api</a>

                        <div className='buttons'>
                            <button><a href=''  target='_blank'> Deploy </a></button>
                            <button><a href='https://github.com/Jota2kk/app-tempoP'  target='_blank'>GitHub</a></button>
                        </div>

                    </div>

                    <div className='prj2'>
                        <a href='' target='_blank'><img src={prjI}/></a>
                        <h1>Site de adição de usuarios</h1>
                        <a>Site feito com React, Node.js e o banco de dados Mysql. Envia todas as informações de um novo usuario para o banco de dados e a mesmo tempo expoe em tela os usarios ja cadastrados.</a>    

                        <div className='buttons'>
                            <button><a href=''  target='_blank'> Deploy </a></button>
                            <button><a href='https://github.com/Jota2kk/tela-novo-usuario'  target='_blank'>GitHub</a></button>
                        </div>

                    </div>

                    <div className='prj3'>
                        <a href='' target='_blank'><img src={prjI}/></a>
                        <h1>Tela de login</h1>
                        <a>Tela de usuarios simples feita com React</a>

                        <div className='buttons'>
                            <button><a href='' target='_blank'> Deploy </a></button>
                            <button><a href='https://github.com/Jota2kk/login-simples' target='_blank'>GitHub</a></button>
                        </div>

                    </div>

                    <div className='prj4'>
                        <a href='' target='_blank'><img src={prjI}/></a>
                        <h1>Site para hamburgueria</h1>
                        <a>Site pradonizado para exposição de cardapio de uma hamburgueria. feito com React</a>

                        <div className='buttons'>
                            <button><a href=''  target='_blank'> Deploy </a></button>
                            <button><a href=''  target='_blank'>GitHub</a></button>
                        </div>

                    </div>

                </div>
            </div>
    )
}