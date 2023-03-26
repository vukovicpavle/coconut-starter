import React from 'react';
import StackNavigatorFactory from '../views/components/StackNavigatorFactory';
import Projects from '../views/pages/Projects';

export default function ProjectsNavigator() {
  return (
    <StackNavigatorFactory
      routes={[
        {
          name: 'Projects',
          component: Projects,
        },
      ]}
    />
  );
}
