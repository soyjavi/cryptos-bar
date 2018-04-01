import { func, node } from 'prop-types';
import React from 'react';
import { ConsumerData, ProviderData } from './ContextData';
import { ConsumerEvents, ProviderEvents } from './ContextEvents';
import { ConsumerPersist, ProviderPersist } from './ContextPersist';

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
  <ProviderPersist>
    <ConsumerPersist>
      { ({ favorites, hydrate }) => (
        <ProviderData favorites={favorites} hydrate={hydrate}>
          <ProviderEvents>
            { children }
          </ProviderEvents>
        </ProviderData>
      )}
    </ConsumerPersist>
  </ProviderPersist>
);

Provider.propTypes = {
  children: node.isRequired,
};

export {
  Consumer,
  Provider,
};
