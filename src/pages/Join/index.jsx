import EntryForm from '../../components/EntryForm';
import Footer from '../../components/Footer';
import React from 'react';
import Section from '../../components/Section';

export default function Join() {
  return (
    <div>
      <Section>
        <EntryForm />
      </Section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
