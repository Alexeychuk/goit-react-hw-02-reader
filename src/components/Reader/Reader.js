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

  decreasePage = () => {
    this.setState(prevState => {
      if (prevState === 0) return { currentPage: prevState.currentPage };
      return {
        currentPage: prevState.currentPage - 1,
      };
    });
  };

  increasePage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
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
          decreasePage={this.decreasePage}
          increasePage={this.increasePage}
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
