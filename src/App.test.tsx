import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import toJson from "enzyme-to-json";
import {shallow} from "enzyme";

describe('App Component', () => {
    test('Renders Title', () => {
        render(<App/>);
        const linkElement = screen.getByText(/Age By Planet/i);
        expect(linkElement).toBeInTheDocument();
    });

    it("renders correctly", () => {
        const tree = shallow(<App/>);
        expect(toJson(tree)).toMatchSnapshot();
    });

    it('renders an image', () => {
       const wrapper = shallow(<App />);

       expect(wrapper.find('img').props().src).toEqual('pokeball_PNG8.png')
    });
});
