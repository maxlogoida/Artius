describe('About', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('about').click();
  });
  it('renders about-page-title', () => {
    cy.getByDataCy('about').should('exist');
  });
});
