import Input from './input';

describe('Input Component', () => {
  it('renders correctly', () => {
    cy.mountWithProviders(<Input data-cy={'input'} />);

    cy.getByDataCy('input').should('exist');
  });

  it('renders with primary false', () => {
    cy.mount(<Input primary={false} data-cy={'input'} />);

    cy.getByDataCy('input').should('exist');
  });
});
