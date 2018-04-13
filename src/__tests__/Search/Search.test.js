import React from 'react';
import ReactDOM from 'react-dom';
import {
    findRenderedDOMComponentWithClass,
    findRenderedDOMComponentWithTag,
    renderIntoDocument,
    Simulate
} from 'react-dom/test-utils';
import Search from '../../components/Search/Search';

describe('Search', () => {
    let component; 

    beforeEach(() => {
        component = renderIntoDocument(
            <Search zipCode={{value: ""}} />
        );
    })
    it('renders a field', () => {
        const field = findRenderedDOMComponentWithClass(component, 'field');
        expect(field).toBeDefined();

        const label = findRenderedDOMComponentWithTag(component, 'label');
        const input = findRenderedDOMComponentWithTag(component, 'input');

        expect(label).toBeDefined();
        expect(label.textContent).toEqual('Zip Code');
    
        expect(input).toBeDefined();
    })

    it('renders a button', () => {
        const button = findRenderedDOMComponentWithTag(component, 'button');
        expect(button).toBeDefined();
        expect(button.textContent).toEqual('Search');
    })

    it('disables button if no input', () => {
        const button = findRenderedDOMComponentWithTag(component, 'button');
        const input = findRenderedDOMComponentWithTag(component, 'input');
        
        expect(input.value).toBeFalsy();
        expect(button.disabled).toEqual(true);
    })

    it('enables button if input', () => {
        const button = findRenderedDOMComponentWithTag(component, 'button');
        const input = findRenderedDOMComponentWithTag(component, 'input');
        const inputVal = 'test';
        
        expect(input.value).toBeFalsy();
        expect(button.disabled).toEqual(true);
        
        Simulate.change(input, {target: {value: inputVal}});
        expect(component.state.inputValue).toEqual(inputVal);
        expect(button.disabled).toEqual(false);
    })

    xit('should trigger search on button click', () => {

    });
})
