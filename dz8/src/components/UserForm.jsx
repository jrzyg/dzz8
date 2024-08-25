import React from 'react';
import {useForm} from "react-hook-form";

const UserForm = ({addUsers}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm()

    const onSubmit = (data) => {
        addUsers(data)
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder='Name'
                {...register('name', {required :'Имя обезательно'})}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <input
                type="email"
                placeholder='Email'
                {...register('email', {
                    required :'Email обезательно',
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/,
                        message:'не правильный формат'
                    }

                })}

            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
                type="text"
                name=""
                id=""
                placeholder='username'
                {...register('username',{required:'username обезательно'})}
            />
            {errors.username && <p>{errors.username.message}</p>}

            <button type='submit'>Создать</button>
        </form>
    );
};

export default UserForm;