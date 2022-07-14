import React from 'react';
import styles from './Profile.module.css';

type ProfileProps ={
    name: string
}
export default function Profile({name}: ProfileProps) {
    const initial = name?.split(" ")[0].slice(0,1);
    console.log(initial)
    return (
        <div>
            <div className={styles.profile}>
                <span>{initial}</span>
            </div>
        </div>
    )
}