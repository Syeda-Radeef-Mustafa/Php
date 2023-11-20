import React from 'react';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection';

const Header = () => {
  return (
    <div className="header">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default Header;
