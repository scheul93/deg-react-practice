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
    const onDistanceChanged = jest.fn(newVal => { 
        component = renderIntoDocument( 
            <DistanceFilter distance={{value: newVal}} zipCode="66211" onDistanceChange={onDistanceChanged}/> 
        ); 
    }); 

    beforeEach(() => {
        component = renderIntoDocument(
            <DistanceFilter distance={{value: 5}} zipCode="66211" onDistanceChange={onDistanceChanged}/>
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

    it('disables slider if no zipcode', () => {
        component = renderIntoDocument(
            <DistanceFilter distance={{value: 5}} onDistanceChange={onDistanceChanged}/>
        );
        const input = findRenderedDOMComponentWithTag(component, 'input');
        expect(input.disabled).toBe(true);
    })

    it('renders a description', () => {
        const description = findRenderedDOMComponentWithClass(component, 'distance__description');
        expect(description).toBeDefined();
        expect(description.textContent).toEqual('Current: 5 Miles from 66211');
    })

    it('triggers callback on input change', () => {
        const input = findRenderedDOMComponentWithTag(component, 'input');

        Simulate.change(input, {target: {value: "10"}});
        expect(onDistanceChanged).toHaveBeenCalled();
    })

    it('description updates on input change', () => {
        const input = findRenderedDOMComponentWithTag(component, 'input');
        let description = findRenderedDOMComponentWithClass(component, 'distance__description');
        expect(description).toBeDefined();
        expect(description.textContent).toEqual('Current: 5 Miles from 66211');

        Simulate.change(input, {target: {value: "10"}});
        description = findRenderedDOMComponentWithClass(component, 'distance__description');
        expect(description.textContent).toEqual('Current: 10 Miles from 66211');
    })

    it('should display "All" for any number over 25"', () => {
        const input = findRenderedDOMComponentWithTag(component, 'input');
        let description = findRenderedDOMComponentWithClass(component, 'distance__description');
        expect(description).toBeDefined();
        expect(description.textContent).toEqual('Current: 5 Miles from 66211');

        Simulate.change(input, {target: {value: ""}});
        description = findRenderedDOMComponentWithClass(component, 'distance__description');
        expect(description.textContent).toEqual('Current: All Miles from 66211');
    })

    it('should update zip code if it changes', () => {
        let description = findRenderedDOMComponentWithClass(component, 'distance__description');
        expect(description).toBeDefined();
        expect(description.textContent).toEqual('Current: 5 Miles from 66211');

        component = renderIntoDocument(
            <DistanceFilter distance={{value: "5"}} zipCode="66213" onDistanceChange={onDistanceChanged}/>
        );
        description = findRenderedDOMComponentWithClass(component, 'distance__description');
        expect(description.textContent).toEqual('Current: 5 Miles from 66213');
    })

})
