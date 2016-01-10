import React from 'react';
import { render } from 'react-dom';
import Root from 'app/containers/Root';
import configureStore from 'app/store/configureStore';

let injectDiv;

configureStore(store => {

  window.addEventListener('load', () => {
    injectDiv = document.createElement('div');
    injectDiv.style.width = '0';
    injectDiv.style.height = '0';
    injectDiv.style.position = 'fixed';
    injectDiv.style.top = '-1px';
    injectDiv.style.left = '-1px';
    injectDiv.style.overflow = 'hidden';

    injectDiv.className = 'browser-redux';
    document.body.appendChild(injectDiv);

    renderExtension();
  });


  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  if (MutationObserver) {
    const obs = new MutationObserver((mutations) => {
      const container = mutations
      .filter(({ target }) => target.id === 'js-repo-pjax-container')
      .reduce((value, candidate) => {
        return value || candidate;
      }, undefined);
      if (container) {
        renderExtension();
      }
    });

    obs.observe(document.body, {
      childList : true,
      subtree : true
    });
  }

  const iconName = 'pin';
  function appendContainerTo(root) {
    const element = document.createElement('div');
    element.className = ['xc_octodo-pin', 'octicon', `octicon-${iconName}`].join(' ');
    root.appendChild(element);
    return element;
  }

  function renderExtension() {
    const nodeList = document.querySelectorAll('.table-list-issues .table-list-cell-type')
    Array.from(nodeList)
    .map(cell => cell.querySelector(`octicon-${iconName}`) || appendContainerTo(cell) )
    .map((star)=> render(<Root store={store} />, star))
  }
});
