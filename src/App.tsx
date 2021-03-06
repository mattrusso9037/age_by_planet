import React from 'react';
import './App.css';
import {PlanetDisplay} from './components/Planets/PlanetDisplay';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react'

const theme = {
    fg: 'palevioletred',
    bg: 'white',
    baseUnit: 8,
};

const AppWrapper = styled.div`
background-image: url(./assets/space_bckg.webp);
background-position-x: center;
background-position-y: center;
background-repeat: no-repeat;
 .planet_title {
    font-size: 48px !important;
      transition: all .5s;
    @media (max-width: 600px) {
        font-size: 36px !important;
    }
 }
 .description_container {
    width: 80%; 
    padding: 24px;
    font-size: 20px;
    line-height: 30px !important;
    transition: all .5s;
    @media (max-width: 600px) {
        font-size: 16px !important;
    }
 }
`;

function App() {
    return (
        <div className='App'>
            <AppWrapper>
                <ThemeProvider theme={theme}>
                    <header className='App-header'>
                        <Header className={'planet_title'} as={'h1'}>Your Age On Other Planets</Header>
                        <div className={'description_container'}>
                            It takes the Earth about 365 days to orbit the sun, completing 1 year. How long is one year
                            on other planets, and how old would you be if you were living there?
                            Enter your age in the field below to determine your approximate age on each planet in our solar system!
                        </div>
                        <PlanetDisplay title={''}/>
                    </header>
                </ThemeProvider>
            </AppWrapper>
        </div>
    );
}

export default App;
