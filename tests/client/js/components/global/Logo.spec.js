import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Logo from 'components/global/Logo.jsx';
import styles from 'components/global/Logo.scss';

describe('<Logo/>', function() {
    it('has the right classes', function() {
        const wrapper = shallow(<Logo/>);
        expect(wrapper.find(`.${styles.logoLink}`)).to.have.length(1);
        expect(wrapper.find(`.${styles.logo}`)).to.have.length(1);
        expect(wrapper.find(`.${styles.letter}`)).to.have.length(10);
        expect(wrapper.find(`.${styles.startBracket}`)).to.have.length(1);
        expect(wrapper.find(`.${styles.forwardSlash}`)).to.have.length(1);
        expect(wrapper.find(`.${styles.endBracket}`)).to.have.length(1);
    });
    it('has a <Link/>', function() {
        const wrapper = shallow(<Logo/>);
        const link = wrapper.find('Link');
        expect(link.exists()).to.equal(true);
        expect(link.prop('to')).to.equal('/');
    });
});