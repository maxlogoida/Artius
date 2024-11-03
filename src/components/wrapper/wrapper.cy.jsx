import { Wrapper } from './wrapper';

describe('Wrapper Component', () => {
  it('renders correctly', () => {
    cy.mountWithProviders(<Wrapper>test</Wrapper>);

    cy.get('div').should('contain', 'test');
  });
});
