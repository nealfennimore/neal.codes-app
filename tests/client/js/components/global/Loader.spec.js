import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Loader from 'components/global/Loader.jsx';
import styles from 'components/global/Loader.scss';

describe('<Loader/>', function() {
    it('has the right class', function() {
        const wrapper = shallow(<Loader/>);
        const classNames = styles.loader.replace(/\s+/, '.');
        expect(wrapper.find(`.${classNames}`)).to.have.length(1);
    });
});