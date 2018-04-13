import React from 'react';
import ReactDOM from 'react-dom';
import {
    findRenderedDOMComponentWithClass,
    findRenderedDOMComponentWithTag,
    renderIntoDocument,
    Simulate
} from 'react-dom/test-utils';
import DistanceFilter from '../../components/DistanceFilter/DistanceFilter';

describe('Search', () => {
    let component; 

    beforeEach(() => {
        component = renderIntoDocument(
            <DistanceFilter distance={{value: 5}}/>
        );
    })
    it('renders a slider field', () => {
        const field = findRenderedDOMComponentWithClass(component, 'field');
        expect(field).toBeDefined();

        const label = findRenderedDOMComponentWithTag(component, 'label');
        const input = findRenderedDOMComponentWithTag(component, 'input');

        expect(label).toBeDefined();
        expect(label.textContent).toEqual('Distance');
    
        expect(input).toBeDefined();
        expect(input.type).toBe('range');
    })

    it('renders a description', () => {
        const description = findRenderedDOMComponentWithClass(component, 'distance__description');
        expect(description).toBeDefined();
        expect(description.textContent).toEqual('Current: 5 Miles from 66211');
    })

    it('updates state on input change', () => {
        const input = findRenderedDOMComponentWithTag(component, 'input');

        Simulate.change(input, {target: {value: "10"}});
        expect(component.state.inputValue).toEqual('10');
        expect(input.value).toEqual('10');
    })

    it('description updates on input change', () => {
        const input = findRenderedDOMComponentWithTag(component, 'input');
        const description = findRenderedDOMComponentWithClass(component, 'distance__description');
        expect(description).toBeDefined();
        expect(description.textContent).toEqual('Current: 5 Miles from 66211');

        Simulate.change(input, {target: {value: "10"}});
        expect(description.textContent).toEqual('Current: 10 Miles from 66211');
    })

    it('should display "All" for any number over 25"', () => {
        const input = findRenderedDOMComponentWithTag(component, 'input');
        const description = findRenderedDOMComponentWithClass(component, 'distance__description');
        expect(description).toBeDefined();
        expect(description.textContent).toEqual('Current: 5 Miles from 66211');

        Simulate.change(input, {target: {value: "100"}});
        expect(description.textContent).toEqual('Current: All Miles from 66211');
    })

    xit('should use default zip code at start', () => {

    })

    xit('should update zip code if it changes', () => {
        
    })

})
