import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('to cehck the Header Componen',()=>{
    const renderer = new ShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})