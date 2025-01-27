import React from 'react';


const HomePage = ({ setIsLoggedIn }) => {

    setIsLoggedIn(false);

    return (
        <h2 style={{textAlign: "center"}}>HOME PAGE !</h2>
    );
}

export default HomePage;