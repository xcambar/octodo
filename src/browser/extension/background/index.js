import configureStore from 'app/store/configureStore';

configureStore(store => {
  window.store = store;

  if (process.env.NODE_ENV !== 'production') {
    require('./inject');
  }

}, true);
