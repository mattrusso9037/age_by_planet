import React, {FC} from "react";
import styled from 'styled-components';

const PlanetCardWrapper = styled.div`
width: 350px;
border-radius: 5px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);
background: #232323;
box-shadow: 14px 14px 20px 3px rgba(0, 0, 0, 0.57), -4px -3px 20px 3px rgba(255, 255, 255, 0.5);
border-radius: 25px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
padding: 16px 0px;
@media (max-width: 600px) {
        width: 100%;
    }
> label {
font-size: 24px;
    width: 100%;
    padding-bottom: 16px;
}
> img {
    height: 100%;
    max-height: 150px;
    width: auto;
    @media (max-width: 600px) {
        max-height: 125px;
    }
}
`;

const InfoContainer = styled.div`
display: flex;
flex-direction: column;
padding: ${props => props.theme.baseUnit*2}px;
font-size: 1.1rem;
`;

interface IPlanetCardProps {
    planetName: string;
    planetaryAge: number | null;
}

export const PlanetCard: FC<IPlanetCardProps> = ({ planetName, planetaryAge }: IPlanetCardProps) => {
    return (
        <PlanetCardWrapper>
            <label>{planetName}</label>
            <img alt={`${planetName}`} src={`/assets/${planetName.toLocaleLowerCase()}.png`} sizes={'((max-width: 600px)) 50px'} />
            <InfoContainer className={'planet_info_container'}>
                {planetaryAge ? <div>{planetaryAge} years old</div> : '--'}
            </InfoContainer>
        </PlanetCardWrapper>
    );
}
