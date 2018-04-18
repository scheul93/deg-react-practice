import React from 'react';
import ReactDOM from 'react-dom';
import {
    findRenderedDOMComponentWithClass,
    findRenderedDOMComponentWithTag,
    scryRenderedDOMComponentsWithClass,
    renderIntoDocument,
    Simulate
} from 'react-dom/test-utils';
import GenderFilter from '../../components/GenderFilter/GenderFilter';

describe('GenderFilter', () => {
    let component;
    const onGenderChange = jest.fn();

    beforeEach(() => {
        component = renderIntoDocument(
            <GenderFilter onGenderChange={onGenderChange} currentGender="all"/>
        );
    })

    it('should render 3 gender options', () => {
        const field = findRenderedDOMComponentWithClass(component, 'field');
        expect(field).toBeDefined();

        const fieldGroup = findRenderedDOMComponentWithClass(component, 'field-group');
        expect(fieldGroup).toBeDefined();

        const checkboxFields = scryRenderedDOMComponentsWithClass(component, 'field-group__list-item');
        expect(checkboxFields).toHaveLength(3);

        const inputs = scryRenderedDOMComponentsWithClass(component, 'input');
        expect(inputs).toHaveLength(3);

        const labels = scryRenderedDOMComponentsWithClass(component, 'label');
        expect(labels).toHaveLength(4);
        expect(labels[0].textContent).toBe('Gender');
        expect(labels[1].textContent).toBe('Female');
        expect(labels[2].textContent).toBe('Male');
        expect(labels[3].textContent).toBe('No Preference');
    })

    it('should default to No Preference', () => {
        const inputs = scryRenderedDOMComponentsWithClass(component, 'input');
        expect(inputs[2].checked).toBeTruthy();
    })

    it('should trigger callback when input changes', () => {
        const inputs = scryRenderedDOMComponentsWithClass(component, 'input');
        Simulate.change(inputs[0], {target: {value: 'female'}});

        expect(onGenderChange).toHaveBeenCalled();
    })
})