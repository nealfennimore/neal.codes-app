import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import NotFound from 'components/common/404.jsx';
import styles from 'components/common/404.scss';

describe('<404/>', function() {
    it('has the right class', function() {
        const wrapper = shallow(<NotFound/>);
        const classNames = styles._404.replace(/\s+/, '.');
        expect(wrapper.find(`.${classNames}`)).to.have.length(1);
    });
});