import React from 'react';
import {Link} from 'react-router';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Footer from 'components/global/Footer.jsx';
import styles from 'components/global/Footer.scss';

describe('<Footer/>', function() {
    it('has the right class', function() {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.find(`.${styles.footer}`)).to.have.length(1);
    });
    it('contains a link', function() {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.contains(<Link to='/'>neal.codes</Link>)).to.equal(true);
    });
    it('contains a copyright and year', function() {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.text()).contains(`© ${new Date().getFullYear()}`);
    });
});