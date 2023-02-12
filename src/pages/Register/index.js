
import { useState } from 'react'

import { Link } from 'react-router-dom'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth }from '../../firebaseConnection'

import { useNavigate } from 'react-router-dom'

export default function Register(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleRegister(e) {
    e.preventDefault()
    
    if(email !== '' && password !== '') {
      
      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', { replace: true})
      })
      .catch(() => {
        console.log("erro cadastro")
      })


    } else {
      alert("Preencha todos os campos")
    }
  }

  return(
    <div className='home-container'>
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta!</span>
      
      <form className='form' onSubmit={handleRegister}>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </form>

      <Link to="/" className='button-link'>
        Já possuí uma conta? Faça login!
      </Link>
    </div>
  )
}