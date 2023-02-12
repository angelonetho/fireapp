import { signOut } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { auth, db } from '../../firebaseConnection'

import './admin.css'

export default function Admin() {

    const [tarefaInput, setTarefaInput] = useState("")


    async function handleRegister(e) {
        e.preventDefault()


    }

    async function handleLogout() {
        await signOut(auth)
    }

    return(
        <div className='admin-container'>
            <h1>Minhas tarefas</h1>

            <form className='form' onSubmit={handleRegister}>
                <textarea
                    placeholder='Digite sua tarefa'
                    value={tarefaInput}
                    onChange={(e) => setTarefaInput(e.target.value)}
                />

                <button className='btn-register' type='submit'>Registrar tarefa</button>
            </form>

            <article className='list'>
                <p>Estudar js e reactjs hj a noite</p>
                <div>
                    <button>Editar</button>
                    <button className='btn-delete'>Concluir</button>
                </div>
            </article>

            <button className='btn-logout' onClick={handleLogout}>Sair</button>
        </div>
    )
}