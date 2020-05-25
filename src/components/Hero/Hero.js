import React from 'react';
import heroImage from '../../static/tim-avatar.jpg';

export default function Hero() {
    return (
        <React.Fragment>
            <div className="hero-container">
                <li className="hero-title">
                    <h1>Product manager and designer helping startups build better products</h1>
                </li>
                <li className="hero-image">
                    <img src={heroImage} alt="avatar" className="heroAvatar" />
                </li>
            </div>
            <style jsx>
                {`
                    .heroAvatar {
                        width: 400px;
                        border-radius: 20px;
                    }
                    .hero-container {
                        display: flex;
                        flex-direction: row;
                        list-style: none;
                        margin: 50px auto;
                        padding: 100px;
                        max-width: 1200px;
                        align-items: center;

                    }

                    .hero-container li {
                        flex-grow: 4;
                        align-items: center;
                    }
                    
                    .hero-title {
                        text-align: left;
                        max-width: 700px;
                        font-size: 20px;
                    }
                    .hero-image {
                        text-align: right;
                    }

                `}
            </style>
        </React.Fragment>
    )
}