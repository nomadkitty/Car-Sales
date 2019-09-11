import React from 'react';
import { connect } from 'react-redux';

// actions
import { removeFeature, buyItem } from './actions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  console.log(props);
  const { state, removeFeature, buyItem } = props

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures 
        car={state.car}
        removeFeature={removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures 
        store={state.store} 
        buyItem={buyItem}
        />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('hi', state);
  return {
    state
  }
}

export default connect(mapStateToProps, { removeFeature, buyItem })(App);
