const tagInfo = ['react', 'programming', 'music', 'guitar', 'blog', 'guide'];

const darkColor = {
    red: '#f5222d',
    volcano: '#fa541c',
    orange: '#fa8c16',
    gold: '#faad14',
    yellow: '#fadb14',
    lime: '#a0d911',
    green: '#52c41a',
    cyan: '#13c2c2',
    blue: '#1890ff',
    geekblue: '#2f54eb',
    purple: '#722ed1',
    magenta: '#eb2f96',
};

const lightColor = {
    red: 'red',
    volcano: 'volcano',
    orange: 'orange',
    gold: 'gold',
    yellow: 'yellow',
    lime: 'lime',
    green: 'green',
    cyan: 'cyan',
    blue: 'blue',
    geekblue: 'geekblue',
    purple: 'purple',
    magenta: 'magenta',
};

const predefinedColor = {
    react: 'blue',
    programming: 'volcano',
    music: 'cyan',
    guitar: 'green',
    blog: 'magenta',
    guide: 'geekblue',
    default: 'gold',
    nodejs: 'lime',
};

function getTagColor(tagName, theme) {
    const color = theme === 'light' ? lightColor : darkColor;
    if (predefinedColor[tagName]) return color[predefinedColor[tagName]];
    const colorNameList = Object.keys(color);
    return color[
        colorNameList[Math.floor(Math.random() * colorNameList.length)]
    ];
}

export { tagInfo };
export default getTagColor;
