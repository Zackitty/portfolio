const projectsData = [
    {
        name: 'THE JIUTUBE',
        description: 'The JiuTube is a full stack React.js application that allows users to watch a live streaming Jiujitsu video player through OBS and Twitch streaming ' +
        'technology while chatting about the matches. The Socket.IO real time chat also preserves a chat history via RestFul API calls to the backend Python Flask server ' +
        'which uses the ORM of SQL-Alchemy to query the PostgreSQL database for all previous comments and dispatch the most recent ones into the chat\'s slices of state in the Redux Store',
        livelink: 'https://jiutube.onrender.com/',
        repository: 'https://github.com/Zackitty/JiuTube',
        img: 'https://64.media.tumblr.com/6ac1cbba035b75f9c9cd6af90be990c4/9bbe58e4a43aa6f5-4e/s2048x3072/5363fd0b840e07bb7a081bf232e1bde70b34fbf6.png',
        technologies: [
            {
                name: 'REACT',
                link: 'https://reactjs.org/'
            },
            {
                name: 'AWS',
                link: 'https://aws.amazon.com/'
            },
            {
                name: 'OBS',
                link: 'https://obsproject.com/'
            },
            {
                name: 'SOCKETIO',
                link: 'https://socket.io/'
            },
            {
                name: 'DOCKER',
                link: 'https://www.docker.com/'
            },
            {
                name: 'FLASK',
                link: 'https://flask.palletsprojects.com/'
            },
            {
                name: 'SQL-Alchemy',
                link: 'https://www.sqlalchemy.org/'
            },
        ]
    },
    {
        name: 'CAUSE',
        description: 'Cause is a FullStack clone of the website Change. It uses React.js for the front end with a Redux store to manage state and Amazon Cloud Services to allow ' +
        'users to host photos of their petitions and in updates. The backend server uses Python\'s Flask to handle RESTful API requests and SQL-Alchemy as an ORM to interact with ' +
        'the SQL Database where it keeps track of users and their petitions they\'ve created.',
        livelink: 'https://cause-change.onrender.com/',
        repository: 'https://github.com/sambrady0652/change-clone',
        img: 'https://64.media.tumblr.com/806f8ed47285ec5deaf44ae134cb2bc0/c9d0d1eff5e6459f-5d/s1280x1920/7e4de237093051365e8164af417fd1c8517ccc2d.png',
        technologies: [
            {
                name: 'REACT',
                link: 'https://reactjs.org/'
            },
            {
                name: 'GROMMET',
                link: 'https://v2.grommet.io/'
            },
            {
                name: 'REDUX',
                link: 'https://redux.js.org/'
            },
            {
                name: 'DOCKER',
                link: 'https://www.docker.com/'
            },
            {
                name: 'FLASK',
                link: 'https://flask.palletsprojects.com/'
            },
            {
                name: 'SQL-Alchemy',
                link: 'https://www.sqlalchemy.org/'
            },
        ]
    },
    {
        name: 'SURVEY DONKEY',
        description: 'SurveyDonkey is a multi-page interactive survey application inspired by SurveyMonkey. It was designed using PUG to render HTML templates with Bulma to ' +
        'bootstrap CSS based on wireframes created with Adobe. The backend server uses Express.js to handle Restful API requests and Sequelize as an ORM for the PostgreSQL Database.',
        livelink: 'https://surveydonkey.onrender.com/',
        repository: 'https://github.com/about14sheep/survey-donkey',
        img: 'https://64.media.tumblr.com/0f138e35c544286ec0877af3d2ac69f5/1a2382fe025de4ed-b1/s1280x1920/08804d5954559a6d8209b8913ea46149376196c2.png',
        technologies: [
            {
                name: 'EXPRESS',
                link: 'https://expressjs.com/'
            },
            {
                name: 'PUG',
                link: 'https://pugjs.org/'
            },
            {
                name: 'SEQUELIZE',
                link: 'https://sequelize.org'
            },
            {
                name: 'DOCKER',
                link: 'https://www.docker.com/'
            },
            {
                name: 'BULMA',
                link: 'https://bulma.io/'
            }
        ]
    }

]

export default projectsData