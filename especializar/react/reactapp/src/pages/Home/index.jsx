import React, { useState, useEffect } from 'react'; //hooks > funções que permite ligar, conectar os recursos de estado e ciclo de vida do react a partir de componentes totalmente funcionais
//useState > importando estado > importante para armazenar valores e esses valores serão utilizados na interface quando o conteúdo da variavel mudar em tempo real
import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState(''); //recebendo estado
  //o primeiro elemento do estado é o conteúdo em si, o segundo elemento é a função que atualiza o estado
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: ''});

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState =>[...prevState, newStudent]); //add a função no estado setStudents, utilizando o estado anterior
  }

  useEffect(() => {
    //corpo do useEffect > ações e o que eu quero que execute > é executado automaticamente assim que a interface é renderizada
    fetch('https://api.github.com/users/dscarv27')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    }) //consumindo API do github
  }, []);

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto de perfil" />
        </div>
      </header>
      
      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)} 
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
    { //entre chaves para utilizar o conteúdo de uma variável; estado também é variável
      
      students.map(student => (
        <Card 
          key={student.time} //aconselhavel a utilizar outro tipo de chave; id, hash, etc
          name={student.name} 
          time={student.time} />
      ))
    }
    </div>
  )
}