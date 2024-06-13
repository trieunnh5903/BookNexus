import React from 'react';
import { useAppSelector } from '@/hooks';
import BottomTab from './BottomTab';
import Authentication from './Authentication';

const ApplicationNavigator = () => {
  const userToken = useAppSelector(state => state.auth.userToken);

  if (userToken) {
    return <BottomTab />;
  }
  return <Authentication />;
};

export default ApplicationNavigator;
