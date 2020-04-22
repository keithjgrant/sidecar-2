import React from 'react';
import App from 'next/app';
import { withRouter } from 'next/router';
import Context from '../src/AppContext';
import Meta from '../src/components/Meta';
import PageLayout from '../src/components/PageLayout';
import initialDrinks from '../static/data/drinks.json';
import '../src/styles.scss';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'Sidecar',
      // drinks: Object.keys(initialDrinks).map(key => initialDrinks[key]),
      drinks: [],
      getCurrentDrink: this.getCurrentDrink,
      getTags: this.getTags,
      getCurrentTag: this.getCurrentTag,
    };
  }

  componentDidMount() {
    this.fetchDrinks();
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Context.Provider value={this.state}>
        <Meta />
        <PageLayout route={router.route}>
          <Component {...pageProps} />
        </PageLayout>
      </Context.Provider>
    );
  }

  async fetchDrinks() {
    const response = await fetch('/static/data/drinks.json');
    const data = await response.json();
    const drinks = Object.keys(data).map(key => data[key]);
    this.setState({ drinks });
  }

  getCurrentDrink = () => {
    const { router } = this.props;
    if (router.route === '/drinks' && router.query.d) {
      return this.state.drinks.find(d => d.basename === router.query.d);
    }
    return null;
  };

  getTags = () => {
    const tags = {};
    this.state.drinks.forEach(drink => {
      drink.tags.forEach(t => (tags[t] = true));
    });
    return Object.keys(tags).sort();
  };

  getCurrentTag = () => {
    const { router } = this.props;
    if (router.route === '/tags') {
      return router.query.tag;
    }
    return null;
  };
}

export default withRouter(MyApp);
