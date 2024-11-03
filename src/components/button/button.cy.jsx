import Button from './button';

describe('Button Component', () => {
  it('renders correctly', () => {
    cy.mount(<Button>test</Button>);

    cy.getByDataCy('button').should('exist');
  });
});
