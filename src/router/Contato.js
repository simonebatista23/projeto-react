import React from 'react';
import'./css/contact.css';


const Contato = () => {

    return (

        <div className="container-contact">

            <main className="cartao">

                <div className="minhas-informacoes">

                    <h3 className="nome">Simone Batista de Oliveira</h3>
                
                </div>

                <div className="conteudo">

                    <div className="informacoes-abas">


                        <div className="informacao selecionado" id="informacao-sobre-mim">
                            <h3 class="sub-titulo">Sobre</h3>

                            <div className="descricao">
                                <p>Oi! meu nome é Simone, seja bem-vindo(a)!</p>

                                <p>
                                    Sou uma pessoa apaixonada pela programação. Atualmente comecei a colocar em prática estudando
                                    <span> HTML, CSS e JavaScript.</span>
                                    Gosto muito de chá (até demais), e meus principais hobbies são ler e
                                    séries.
                                </p>
                            </div>
                        </div>

                        <div className="informacao" id="informacao-minhas-redes">

                            <h3 class="sub-titulo">Minhas redes</h3>

                            <ul class="redes-sociais">
                                <li>
                                    <a href="https://www.instagram.com/simone.batista12/?next=%2F" target="_blank" class="instagram" rel="noreferrer">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/simone-batista-23-li/" target="_blank" class="linkedin" rel="noreferrer">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://github.com/simonebatista23?tab=repositories" target="_blank" class="github" rel="noreferrer">GitHub</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Contato;