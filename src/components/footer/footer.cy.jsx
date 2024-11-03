import Footer from './footer';

it('Footer Component', () => {
  cy.mountWithProviders(<Footer />);

  cy.getByDataCy('header-container').should('exist');
});
