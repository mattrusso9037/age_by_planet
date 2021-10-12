import React, {FC} from "react";
import styled from 'styled-components';

const PlanetCardWrapper = styled.div`
width: calc(33.33% - 8px);
min-width: 200px;
border-radius: 5px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);
background: #71797E;
min-width: 400px;
> h2 {
color: #211a1e;
}
> img {
height: 200px;
}
`;

const InfoContainer = styled.div`
display: flex;
flex-direction: column;
padding: ${props => props.theme.baseUnit*2}px;
`;

interface IPlanetCardProps {
    planetName: string;
    planetaryAge: number | null;
}

export const PlanetCard: FC<IPlanetCardProps> = ({ planetName, planetaryAge }: IPlanetCardProps) => {
    return (
        <PlanetCardWrapper>
            <h2>{planetName}</h2>
            <img alt={`${planetName}`} src={`/assets/${planetName.toLocaleLowerCase()}.png`} />
            <InfoContainer className={'planet_info_container'}>
                {planetaryAge ? <div>{planetaryAge} years old</div> : '--'}
            </InfoContainer>
        </PlanetCardWrapper>
    );
}
