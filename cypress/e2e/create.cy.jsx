describe('Create', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('create').click();
  });

  it('renders create-page-title', () => {
    cy.getByDataCy('create-title').should('exist');
  });

  it('renders create-posts', () => {
    cy.getByDataCy('create-input-img').type('exist');
    cy.getByDataCy('create-input-title').type('exist');
    cy.getByDataCy('create-input-category').type('exist');

    cy.get('iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).as('editorBody');
    cy.get('@editorBody').clear();
    const textToType = 'Hello, TinyMCE!';
    cy.get('@editorBody').type(textToType);

    cy.getByDataCy('create-input-submit').click();
  });
});
