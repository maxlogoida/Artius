import Banner from './banner';

describe('Banner Component', () => {
  it('renders correctly', () => {
    cy.mount(<Banner />);

    cy.getByDataCy('banner').should('exist');
  });
});
