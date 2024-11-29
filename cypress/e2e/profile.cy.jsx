describe('Profile', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('sign-in').click();
    cy.getByDataCy('sign-up-link').click();
    cy.getByDataCy('username').type('exist');
    cy.getByDataCy('password').type('exist');
    cy.getByDataCy('confirm-password').type('exist');
    cy.getByDataCy('submit').click();
  });
  it('renders profile-name', () => {
    cy.getByDataCy('profile-link').click();
    cy.getByDataCy('profile-name').should('exist');
  });
});
