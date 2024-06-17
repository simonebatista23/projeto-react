import React, { useState } from 'react';
import "./css/Form.css"

function Formulario() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    comentario: '',
 
    dataAtual: ''
  });

  const [cadastros, setCadastros] = useState([]);
  const [mostrarNovoCadastro, setMostrarNovoCadastro] = useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCadastros([...cadastros, form]);

    setForm({
      nome: '',
      email: '',
      comentario: '',
    
      dataAtual: ''
    });

    const realizarNovoCadastro = window.confirm('Comentario enviado com sucesso!!');

    if (realizarNovoCadastro) {
      setMostrarNovoCadastro(true);
    } else {
      setMostrarNovoCadastro(false);
    }
  };

  const handleNovoCadastro = () => {

    setMostrarNovoCadastro(false);
  };

  return (
    <div className='container-form'>
      <div className='containerform'>
        <h1><i>Deixe seu Comentario sobre o site </i> </h1>
        <form onSubmit={handleSubmit} className='form'>

          <i> Nome:</i>  <br></br>
          <input type="text" name="nome" value={form.nome} onChange={handleChange} minLength={3} required placeholder='Digite seu nome...' />

          <i>  Email: </i>     <br></br>
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder='Digite seu email...' />

          <i> Comentario:</i>    <br></br>
          <input type="text" name="comentario" value={form.comentario} onChange={handleChange} required placeholder='Digite seu endereço...' />
    

          <i>Data de hoje </i> <br></br>
          <input type="date" name="dataAtual" value={form.dataAtual} onChange={handleChange} required />

          <button type="submit"><i>Comentar</i></button>
        </form>


      </div>
      {mostrarNovoCadastro && (
        <div className='sample'>
          <h2><i>Cadastro :</i></h2>
          <ul>
            <li><i>Nome:</i> {cadastros[cadastros.length - 1].nome}</li>
            <li><i>Email:</i> {cadastros[cadastros.length - 1].email}</li>
            <li><i>Comentario:</i> {cadastros[cadastros.length - 1].comentario}</li>
            <li><i>Data de Nascimento:</i> {cadastros[cadastros.length - 1].dataAtual}</li>
          </ul>
          <button onClick={handleNovoCadastro}> <i>Realizar novo Comentario</i></button>
        </div>
      )}
    </div>
  );
};

export default Formulario;