import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});



// matrialUI mocking needed.
// custom window.style obj needed in node.
// jsdom in jest strugling with this lib.
it.skip('renders correctly', () => {
    const tree = renderer
        .create(<App tdd={true} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});



