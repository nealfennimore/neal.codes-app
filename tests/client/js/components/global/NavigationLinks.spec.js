import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import NavigationLinks, {links} from 'components/global/NavigationLinks.jsx';
import styles from 'components/global/NavigationLinks.scss';

describe('<NavigationLinks/>', function() {
    it('has the right classes', function() {
        const wrapper = shallow(<NavigationLinks/>);
        expect(wrapper.find(`.${styles.links}`)).to.have.length(1);
    });
    it('has the right elements', function() {
        const wrapper = shallow(<NavigationLinks/>);
        expect(wrapper.find('li')).to.have.length(links.length);
        expect(wrapper.find('Link')).to.have.length(links.length);
    });
    it('renders <Link/> properly', function() {
        const wrapper = shallow(<NavigationLinks/>);
        wrapper.find('Link').forEach((node, i)=>{
            expect(node.prop('activeClassName')).to.equal(styles.active);
            expect(node.prop('to')).to.equal(links[i].path);
            expect(node.html()).to.contain(links[i].title);
        });
    });
});