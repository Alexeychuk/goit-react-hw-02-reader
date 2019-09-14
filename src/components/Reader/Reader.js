import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

export default class Reader extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
    };
  }

  handlePage = e => {
    const { name } = e.target;

    this.setState(prevState => ({
      currentPage:
        name === 'increase'
          ? prevState.currentPage + 1
          : prevState.currentPage - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { currentPage } = this.state;

    return (
      <div className={styles.reader}>
        <Publication item={items[currentPage]} />
        <Counter currentPage={currentPage} length={items.length} />
        <Controls
          handlePage={this.handlePage}
          length={items.length}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};
