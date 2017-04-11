import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Navigation from './Navigation.jsx';
import NavigationLinks from 'components/global/NavigationLinks';
import styles from './Navigation.scss';

describe('<Navigation/>', function() {
    it('has the right classes', function() {
        const wrapper = shallow(<Navigation/>);
        expect(wrapper.find(`.${styles.container}`)).to.have.length(1);
        expect(wrapper.find(`.${styles.navigation}`)).to.have.length(1);
    });
    it('has a <Logo/>', function() {
        const wrapper = shallow(<Navigation/>);
        expect(wrapper.find('Logo').exists()).to.equal(true);
    });
    it('has <NavigationLinks/>', function() {
        const wrapper = shallow(<Navigation/>);
        expect(wrapper.find(NavigationLinks).exists()).to.equal(true);
    });
});