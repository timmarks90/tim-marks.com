import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles';

export default function Header() {
    return (
        <ul className="nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>

            <style jsx>{`
            .nav {
                display: flex;
                flex-direction: row;
                list-style: none;
                margin: 50px;
                padding: 0;
            }

            .nav li {
                flex-grow: 1;
            }

            .nav li a {
                color: ${styles.colors.text};
                font-size: 1.05rem;
                text-decoration: none;
            }
            `}</style>
        </ul>
    );
}
