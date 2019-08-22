import React from 'react';
import { Avatar } from 'antd';
import { Link } from 'gatsby';

import style from './style.module.css';
import avatar from '../../images/avatar.jpg';

const About = () => {
    return (
        <div className={style.about}>
            <Avatar
                size={64}
                icon="user"
                src={avatar}
                alt="The Dark Side of The Moon"
            />
            <div className={style.description}>
                <h4>
                    Personal blog of <Link to="/about">@aldermann</Link>
                </h4>
                <h4>
                    <i>The Nowhere Man</i>
                </h4>
            </div>
        </div>
    );
};
export default About;
