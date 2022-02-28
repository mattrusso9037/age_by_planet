import React from 'react';
import {shallow} from 'enzyme';
import {PlanetCard} from './PlanetCard';

describe('Planet Display Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<PlanetCard planetName={'Earth'} orbitalPeriod={0} planetaryAge={35} />);

        expect(wrapper).toHaveLength(1);
    });

    it('should render name', () => {
        const wrapper = shallow(<PlanetCard planetName={'Earth'} orbitalPeriod={0} planetaryAge={35} />);

        expect(wrapper.find('label').text()).toEqual('Earth');
    });

    it('should render age', () => {
        const wrapper = shallow(<PlanetCard planetName={'Earth'} planetaryAge={35} orbitalPeriod={0} />);

        const infoContainer = wrapper.find('.planet_info_container');

        expect(infoContainer.text().includes('35')).toEqual(true);
    });

    it('should render period', () => {
        const wrapper = shallow(<PlanetCard planetName={'Earth'} planetaryAge={35} orbitalPeriod={0} />);

        const infoContainer = wrapper.find('.planet_info_container');

        expect(infoContainer.text().includes('0')).toEqual(true);
    });
});
