import { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.renderer = renderer;
