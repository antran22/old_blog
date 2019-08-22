import { Button, Icon } from 'antd';
import Moon from '../../../images/moon.svg';
import Sun from '../../../images/sun.svg';
import React, { useContext } from 'react';
import ThemeContext from '../../../context';
import style from './button.module.css';

const lightButtonStyle = {
    backgroundColor: 'black',
    border: 'black',
};
const darkButtonStyle = {
    backgroundColor: 'white',
    border: 'white',
};

const ThemeButton = () => {
    const { theme, switchTheme } = useContext(ThemeContext);
    return (
        <Button
            className={style.button}
            style={theme === 'light' ? lightButtonStyle : darkButtonStyle}
            shape="circle"
            aria-label="Theme Button"
            onClick={switchTheme}
        >
            <Icon
                className={`${style.icon} ${style.moon}`}
                style={theme === 'dark' ? { opacity: 0 } : { opacity: 1 }}
                component={Moon}
            />
            <Icon
                className={`${style.icon} ${style.sun}`}
                style={theme === 'light' ? { opacity: 0 } : { opacity: 1 }}
                component={Sun}
            />
        </Button>
    );
};

export default ThemeButton;
