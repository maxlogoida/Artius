import Nav from './nav';

describe('Nav Component', () => {
  it('renders correctly', () => {
    cy.mountWithProviders(<Nav />);

    cy.getByDataCy('nav').should('exist');
  });
});
