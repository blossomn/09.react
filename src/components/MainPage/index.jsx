import MainHeader from './MainHeader';
import MainSection from './MainSection';
import MainTopBar from './MainTopBar';
import React from 'react';

export default function MainPage() {
  return (
    <div>
      <nav style={{ width: '100%', borderBottom: '1px solid #dbdbdb', backgroundColor: 'white' }}>
        <MainTopBar />
      </nav>
      <header
        style={{
          width: '935px',
          margin: '0 auto',
        }}>
        <MainHeader />
      </header>
      <section
        style={{
          width: '935px',
          margin: '0 auto',
        }}>
        <MainSection />
      </section>
    </div>
  );
}
