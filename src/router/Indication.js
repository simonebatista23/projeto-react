import React, { useState, useEffect } from 'react';
import './css/indication.css';

import adaoNegro from './assets/image/adaoNegro.jpeg';
import arranhaCeu from './assets/image/arranhaCeu.jpg';
import parker from './assets/image/parker.jpg';
import theBeekeeper from './assets/image/Beekeeper2.jpg';
import alertaVermelho from './assets/image/alertaVermelho.jpg';
import EspiaSabiaMenos from './assets/image/EspiaSabiaMenos.jpg';
import LadraSemLimites from './assets/image/LadraSemLimites.webp';
import perdidoEmMarte from './assets/image/perdidoEmMarte.webp';
import naoOlheParaCima from './assets/image/naoOlheParaCima.jpg';
import oJogoDaImitacao from './assets/image/o_jogo_da_imitacao-600x800-1.jpg';
import comoEraAntesVoce from './assets/image/comoEraAntesVoce.jpg';
import seteVidas from './assets/image/seteVidas.webp';

const Indicacoes = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  useEffect(() => {
    const selectedInfoElement = document.querySelector('.about.selecionado');
    if (selectedInfoElement) {
      selectedInfoElement.classList.remove('selecionado');
    }

    if (selectedTab) {
      const newSelectedInfoElement = document.getElementById(`about-${selectedTab}`);
      if (newSelectedInfoElement) {
        newSelectedInfoElement.classList.add('selecionado');
      }
    }
  }, [selectedTab]);

  return (
    <div className="indicacoes-container">
      <div className="projects" id="projects">

        <div className="project">
          <a href="#project">
            <img src={adaoNegro} alt="Adão Negro" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'adaoNegro' ? 'selecionado' : ''}`} id="adaoNegro" onClick={() => handleTabClick('adaoNegro')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>
          <div className="about" id="about-adaoNegro">
            <div className="description">
            <p>Teth Adam recebeu poderes divinos, que utilizou para uma vingança e, por isso, foi aprisionado. Quase 5 mil anos depois, o Adão Negro é libertado de sua tumba para lançar sua justiça cruel sobre a Terra.
                Data de lançamento: 20 de outubro de 2022 (Brasil)</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={arranhaCeu} alt="Arranha Céu" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'arranhaCeu' ? 'selecionado' : ''}`} id="arranhaCeu" onClick={() => handleTabClick('arranhaCeu')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>
          <div className="about" id="about-arranhaCeu">
            <div className="description">
            <p>O filme conta a história do ex-agente do FBI, Will Sawyer, que precisa resgatar sua família de um prédio em chamas. Will Sawyer, veterano de guerra norte-americano e ex-líder de operações de resgate do FBI, é designado a chefe de segurança de arranha-céus, na China.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={parker} alt="Parker" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'parker' ? 'selecionado' : ''}`} id="parker" onClick={() => handleTabClick('parker')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>
          <div className="about" id="about-parker">
            <div className="description">
            <p>Parker, um ladrão que segue uma rígida ética profissional, é traído por seus comparsas que o roubam e o abandonam à beira da morte. Ele decide se vingar de todos aqueles que o passaram para trás e conta com uma parceira para executar seu plano.
                Data de lançamento: 15 de março de 2013 (Brasil)</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={theBeekeeper} alt="The Beekeeper" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'theBeekeeper' ? 'selecionado' : ''}`} id="theBeekeeper" onClick={() => handleTabClick('theBeekeeper')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>
          <div className="about" id="about-theBeekeeper">
            <div className="description">
            <p>As ações brutais de vingança de um homem assume riscos de proporções nacionais quando é revelado que ele é um ex-agente de uma organização poderosa e clandestina.
                Data de lançamento: 12 de janeiro de 2024 (EUA)</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={alertaVermelho} alt="Alerta Vermelho" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'alertaVermelho' ? 'selecionado' : ''}`} id="alertaVermelho" onClick={() => handleTabClick('alertaVermelho')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>
          <div className="about" id="about-alertaVermelho">
            <div className="description">
            <p>Um alerta vermelho da Interpol é emitido e o agente do FBI John Hartley assume o caso. Durante sua busca, ele se vê diante de um assalto ousado e é forçado a se aliar ao maior ladrão de arte da história, Nolan Booth, para capturar a ladra de arte mais procurada do mundo atualmente, Sarah Black.
                Data de lançamento: 4 de novembro de 2021 (mundial)
                Diretor: Rawson Marshall Thurber
                Distribuído por: Netflix</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={EspiaSabiaMenos} alt="Espia Sabia Menos" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'EspiaSabiaMenos' ? 'selecionado' : ''}`} id="EspiaSabiaMenos" onClick={() => handleTabClick('EspiaSabiaMenos')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>
          <div className="about" id="about-EspiaSabiaMenos">
            <div className="description">
            <p>Susan Cooper é uma despretensiosa analista de base da CIA e uma heroína não reconhecida por trás das missões mais perigosas da Agência. Mas quando seu parceiro sai da jogada e outro agente fica comprometido, Susan decide se infiltrar no mundo de um traficante de armas mortais e evitar um desastre global.
                Data de lançamento: 4 de junho de 2015 (Brasil)</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={LadraSemLimites} alt="Ladra Sem Limites" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'LadraSemLimites' ? 'selecionado' : ''}`} id="LadraSemLimites" onClick={() => handleTabClick('LadraSemLimites')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>
          <div className="about" id="about-LadraSemLimites">
            <div className="description">
            <p>Em Uma Ladra Sem Limites, Sandy Patterson (Jason Bateman) é um paizão, trabalhador e anda louco por uma promoção para melhorar a saúde financeira da família que vai crescer ainda mais, já que sua esposa (Amanda Peet) está grávida. Quando ele estava prestes a dar um salto profissional significativo, descobre que seu nome está sendo usado indevidamente por alguém em outro estado. Com a polícia de mãos atadas para resolver o seu caso, ele resolve viajar para convencer a pilantra (Melissa McCarthy) a se entregar. Só que a missão fica ainda mais complicada na medida que outras pessoas, entre eles um caçador de recompensas, também querem a cabeça dela.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={perdidoEmMarte} alt="Perdido em Marte" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'perdidoEmMarte' ? 'selecionado' : ''}`} id="perdidoEmMarte" onClick={() => handleTabClick('perdidoEmMarte')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>
          <div className="about" id="about-perdidoEmMarte">
            <div className="description">
            <p>
                Sinopse
                Não recomendado para menos de 12 anos
                O astronauta Mark Watney (Matt Damon) é enviado a uma missão em Marte. Após uma severa tempestade ele é dado como morto, abandonado pelos colegas e acorda sozinho no misterioso planeta com escassos suprimentos, sem saber como reencontrar os companheiros ou retornar à Terra.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={naoOlheParaCima} alt="Não Olhe Para Cima" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'naoOlheParaCima' ? 'selecionado' : ''}`} id="naoOlheParaCima" onClick={() => handleTabClick('naoOlheParaCima')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>
          <div className="about" id="about-naoOlheParaCima">
            <div className="description">
            <p>Dois astrônomos medíocres descobrem que em poucos meses um meteorito destruirá o planeta Terra. A partir desse momento, eles devem alertar a humanidade por meio da imprensa sobre o perigo que se aproxima.
                Data de lançamento: 9 de dezembro de 2021 (Brasil)</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={oJogoDaImitacao} alt="O Jogo da Imitação" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'oJogoDaImitacao' ? 'selecionado' : ''}`} id="oJogoDaImitacao" onClick={() => handleTabClick('oJogoDaImitacao')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>
          <div className="about" id="about-oJogoDaImitacao">
            <div className="description">
            <p>Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o "Enigma", que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de "Enigma", enquanto ele constrói uma máquina para decifrá-las. Após desvendar as codificações, Turing se torna herói. Porém, em 1952, autoridades revelam sua homossexualidade, e a vida dele vira um pesadelo.
                Data de lançamento: 28 de setembro de 2014 (Brasil)</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={comoEraAntesVoce} alt="Sete Vidas" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'comoEraAntesVoce ' ? 'selecionado' : ''}`} id="comoEraAntesVoce " onClick={() => handleTabClick('comoEraAntesVoce ')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>

          <div className="about" id="about-comoEraAntesVoce ">
            <div className="description">
            <p>Will Traynor, de 35 anos, é inteligente, rico e mal-humorado. Preso a uma cadeira de rodas depois de um acidente de moto, o antes ativo e esportivo Will desconta toda a sua amargura em quem estiver por perto e planeja dar um fim ao seu sofrimento. O que Will não sabe é que Lou está prestes a trazer cor a sua vida.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="#project">
            <img src={seteVidas} alt="O Jogo Da Imitação" />
          </a>
          <div className="abas">
            <ul>
              <li className={`aba ${selectedTab === 'seteVidas ' ? 'selecionado' : ''}`} id="seteVidas " onClick={() => handleTabClick('seteVidas ')}>
                <p>Learn more</p>
              </li>
            </ul>
          </div>

          <div className="about" id="about-seteVidas ">
            <div className="description">
            <p>A vida secreta atormenta Ben Thomas. A fim de encontrar a redenção, ele se propõe a mudar a vida de sete pessoas desconhecidas. Ao longo de sua jornada, ele conhece e se apaixona por uma paciente cardíaca chamada Emily e, ao fazer isso, complica a sua missão.
                Data de lançamento: 25 de dezembro de 2008 (Brasil)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Indicacoes;
