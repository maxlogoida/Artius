import Input from './input';

describe('Input Component', () => {
  it('renders correctly', () => {
    cy.mountWithProviders(<Input />);

    cy.getByDataCy('input').should('exist');
  });

  it('renders with primary false', () => {
    cy.mount(<Input primary={false} />);

    cy.getByDataCy('input').should('exist');
  });
});
