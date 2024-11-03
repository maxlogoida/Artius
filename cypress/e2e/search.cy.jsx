describe('Search', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('search-link').click();
  });
  it('renders search-link', () => {
    cy.getByDataCy('search-input').type('lite');
    cy.getByDataCy('post-link').should('have.length', 1);
  });
});
