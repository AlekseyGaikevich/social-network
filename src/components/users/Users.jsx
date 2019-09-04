import React from 'react';
import styles from './users.module.css';
const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, photoURL: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji.png?6135488989279264585', followed: false, fullName: 'Alex', status: 'Blablabla', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 2, photoURL: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji.png?6135488989279264585', followed: true, fullName: 'Katya', status: 'Yyoyoyo', location: { city: 'Warsaw', country: 'Poland' } },
                { id: 3, photoURL: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji.png?6135488989279264585', followed: true, fullName: 'Zhenya', status: 'AaAaAaAa', location: { city: 'Kiev', country: 'Ukraine' } },
                { id: 4, photoURL: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Nerd_with_Glasses_Emoji.png?6135488989279264585', followed: false, fullName: 'Sergey', status: 'UuUuUuUu', location: { city: 'Riga', country: 'Latvia' } },
            ]
        );
    };


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;