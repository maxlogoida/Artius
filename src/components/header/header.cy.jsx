import Header from './header';

describe('Header Component', () => {
  it('renders correctly', () => {
    cy.mountWithProviders(<Header />);

    cy.getByDataCy('header').should('exist');
  });
});
