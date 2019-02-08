import React from 'react';
import App, {Container} from 'next/app';
import {withRouter} from 'next/router';
import Context from '../src/AppContext';
import Meta from '../src/components/Meta';
import PageLayout from '../src/components/PageLayout';
import '../src/styles.scss';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'Sidecar',
      drinks: [],
      getCurrentDrink: this.getCurrentDrink,
    };
  }

  componentDidMount() {
    this.fetchDrinks();
  }

  render() {
    const {Component, pageProps, router} = this.props;

    return (
      <Container>
        <Context.Provider value={this.state}>
          <Meta />
          <PageLayout route={router.route}>
            <Component {...pageProps} />
          </PageLayout>
        </Context.Provider>
      </Container>
    );
  }

  async fetchDrinks() {
    const response = await fetch('/static/data/drinks.json');
    const data = await response.json();
    const drinks = Object.keys(data).map(key => data[key]);
    this.setState({drinks});
  }

  getCurrentDrink = () => {
    const {router} = this.props;
    if (router.route === '/drinks' && router.query.d) {
      return this.state.drinks.find(d => d.basename === router.query.d);
    }
    return null;
  };
}

export default withRouter(MyApp);
