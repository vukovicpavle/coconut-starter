import React from 'react';
import StackNavigatorFactory from '../views/components/StackNavigatorFactory';
import Search from '../views/pages/Search';

export default function SearchNavigator() {
  return (
    <StackNavigatorFactory
      routes={[
        {
          name: 'Search',
          component: Search,
        },
      ]}
    />
  );
}
