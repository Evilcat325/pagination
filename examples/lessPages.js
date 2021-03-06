/* eslint func-names: 0, no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.less';

const App = React.createClass({
  getInitialState() {
    return {
      current: 3,
    };
  },
  onChange(page) {
    console.log(page);
    this.setState({
      current: page,
    });
  },
  render() {
    return (
      <div>
        <Pagination onChange={this.onChange} lessPages current={this.state.current} total={80} />
        <Pagination lessPages defaultCurrent={1} total={60} />
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('__react-content'));
