describe('Home', () => {
  beforeEach(() => {
    cy.visitApp();
  });

  it('should render the home page with a banner', () => {
    cy.get('[data-cy=banner]').should('be.visible');
  });

  it('should display posts', () => {
    cy.get('.list-wrapper').children().should('have.length.greaterThan', 0);
  });

  it('should render the correct number of posts', () => {
    cy.get('.list-wrapper').children().should('have.length', 3);
  });

  it('should navigate to a post when clicked', () => {
    const postId = 1;

    cy.get(`[data-cy=post-link-${postId}]`).should('be.visible').click();

    cy.url().should('include', `/post/${postId}`);

    cy.get(`[data-cy=post-${postId}]`).should('be.visible');
  });
});
