import React, {useEffect, useState} from 'react';
import UserForm from "./components/UserForm.jsx";
import UserList from "./components/UserList.jsx";
import Modal from "./components/Modal.jsx";

const App = () => {
    const [users, setUsers] = useState([])
    const [modalMessage, setModalMessage] = useState('')

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3000/users')
        const data = await response.json()
        setUsers(data)
    }
    useEffect(() => {
       fetchUsers()
    },[])

    const addUser =async () => {
        const response = await fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(users)
        })
        const newUser = await response.json()
        setUsers([...users, newUser])
        setModalMessage('пользовател успешно сохранен')
    }
     const deleteUser = async (id) => {
        await fetch(`http://localhost:3000/users/${id}`,{
            method:'DELETE'
        })
         setUsers(users.filter((user) => user.id !== id))
            setModalMessage('пользователь удален')
     }

    return (
        <div>
            <h1>Управления пользователям</h1>
            <UserForm addUsers={addUser}/>
            <UserList users={users} deleteUser={deleteUser}/>
            {
                modalMessage && <Modal
                    message={modalMessage}
                    closeModal={() => setModalMessage('')}/>
            }
        </div>
    );
};

export default App;