import React from 'react';

const ThemeContext = React.createContext({
    theme: 'dark',
    switchTheme: () => {
        console.log('default');
    },
});

class ThemeProvider extends React.Component {
    state = {
        theme: 'dark',
    };

    switchTheme = () => {
        const theme = this.state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        document.body.className = `switch ${theme}`;
        setTimeout(() => (document.body.className = theme), 500);
        this.setState({ theme });
    };

    componentDidMount() {
        const theme = localStorage.getItem('theme') || 'dark';
        this.setState({ theme });
        document.body.className = theme;
    }

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    switchTheme: this.switchTheme,
                }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContext;

export { ThemeProvider };
