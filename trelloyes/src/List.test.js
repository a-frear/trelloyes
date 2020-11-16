import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const card = [
        { id: 'a', title: 'Amy', content: 'Philly' },
        { id: 'b', title: 'Tini', content: 'Tahoe' }
    ]
    const tree = renderer
    .create(<List key={1} header={'First list'} cards={card} />)
    .toJSON();
expect(tree).toMatchSnapshot();
})
});