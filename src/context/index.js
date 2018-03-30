import { func, node } from 'prop-types';
import React from 'react';
import { ConsumerData, ProviderData } from './ContextData';
import { ConsumerEvents, ProviderEvents } from './ContextEvents';

const Consumer = ({ children }) => (
  <ConsumerData>
    {data => (
      <ConsumerEvents>
        {events => children({ ...data, ...events }) }
      </ConsumerEvents>
    )}
  </ConsumerData>
);

Consumer.propTypes = {
  children: func.isRequired,
};

const Provider = ({ children }) => (
  <ProviderData>
    <ProviderEvents>
      { children }
    </ProviderEvents>
  </ProviderData>
);

Provider.propTypes = {
  children: node.isRequired,
};

export {
  Consumer,
  Provider,
};
