import React from 'react';
import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
import {PlanetCard} from './PlanetCard';

describe('Planet Display Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<PlanetCard planetName={'Earth'} imageUri={''}  planetaryAge={}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render name', () => {
        const wrapper = shallow(<PlanetCard name={'Earth'} climate={'various'} population={'700000000'}
                                            terrain={'various'}/>);

        expect(wrapper.find('h2').text()).toEqual('Earth');
    });

    it('should render population', () => {
        const wrapper = shallow(<PlanetCard name={'Earth'} climate={'various'} population={'700000000'}
                                            terrain={'various'}/>);
        const infoContainer = wrapper.find('.planet_info_container');

        expect(infoContainer.find('div').at(0).text().includes('700000000')).toEqual(true);
    });


    it('should render climate', () => {
        const wrapper = shallow(<PlanetCard name={'Earth'} climate={'various'} population={'700000000'} terrain={'various'} />);
        const infoContainer = wrapper.find('.planet_info_container');

        expect(infoContainer.find('div').at(1).text().includes('various')).toEqual(true);
    });

    it('should render terrain', () => {
        const wrapper = shallow(<PlanetCard name={'Earth'} climate={'various'} population={'700000000'} terrain={'various'} />);
        const infoContainer = wrapper.find('.planet_info_container');

        expect(infoContainer.find('div').at(2).text().includes('various')).toEqual(true);
    });
});
