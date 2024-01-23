import React from 'react';

export default function ContacMeList({allContacts, handleDelete}){
    return (
        <ul className='text-md contact--replies--section'>
            {allContacts.map(({lastName,firstName,message,id}) => (
                <li className="contact--replies--list" key={id}>
                    <div>
                        <h2>{firstName+" "+lastName}</h2>
                        <button className="contact--replies--btn" onClick={() => handleDelete(id)}>X</button>
                    </div>
                    <div className='contact--replies--msg'>{!message ? null : <p>{message}</p>}</div>
                </li>
            ))}
        </ul>
    )
}