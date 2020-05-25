import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';

export class Projects extends Component {
    button = e => {
        e.preventDefault();
        alert('Project 1');
    }

    render () {
        return (
            <React.Fragment>
                <button
                    className="button"
                    onClick={this.button}
                > Click Me
                </button>

                <TextField
                    id="filled-basic"
                    label="Write a message"
                    variant="filled"
                />

                <ul className="projects">
                    <li 
                        className="project"
                        onClick={this.project}>
                        <Link href="/project-2">
                            <div>Project  1</div>
                        </Link>
                    </li>
                    <li><div className="project-img"></div></li>
                    <li>
                    <Link href="/project-2">
                        <div>Project 2</div>
                    </Link>
                    </li>

                    <style jsx>{`
                    .button {
                        width: 150px;
                        height: 40px;
                    }
                    .projects {
                        display: flex;
                        flex-direction: row;
                        list-style: none;
                        margin: 50px;
                        padding: 0;
                    }

                    .projects li {
                        flex-grow: 1;
                    }

                    .project-img {
                        width: 200px;
                        height: 100px;
                        background: #eee;
                        border: none;
                        border-radius: 6px;
                    }

                    .projects li a {
                        font-size: 1.05rem;
                        text-decoration: none;
                    }
                    `}</style>
                </ul>
            </React.Fragment>
        );
    }
}

export default Projects;