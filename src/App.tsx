import React from 'react';
import './App.css';
import {PlanetDisplay} from './components/Planets/PlanetDisplay';
import {ThemeProvider} from 'styled-components';

const theme = {
    fg: 'palevioletred',
    bg: 'white',
    baseUnit: 8,
};

function App() {
    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <header className='App-header'>
                    <h1 style={{color: 'white'}}>Age By Planet</h1>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                    </a>
                    <PlanetDisplay title={''}/>
                </header>
            </ThemeProvider>
        </div>
    );
}

export default App;
