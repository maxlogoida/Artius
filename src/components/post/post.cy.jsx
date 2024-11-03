import Post from './post';

describe('Post Component', () => {
  const post = {
    img: 'https://that-which.com/wp-content/uploads/2023/07/The-Roots-of-Existentialism-Socrates--1024x1012.jpeg',
    category: 'Philosophy',
    title: 'The Roots of Existentialism',
    author: 'John',
    date: '21.06.1943',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum reprehenderit molestiae veritatis non, animi nulla cupiditate, sunt autem, eveniet ipsum sapiente quis deleniti?',
  };

  it('renders correctly', () => {
    cy.mountWithProviders(<Post post={post} />);

    cy.getByDataCy('post').should('exist');
  });
});
