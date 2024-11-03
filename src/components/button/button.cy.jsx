import Button from './button';

describe('Button Component', () => {
  it('renders correctly', () => {
    cy.mount(<Button data-cy={'button'}>test</Button>);

    cy.getByDataCy('button').should('exist');
  });
});
