describe('defaultButton.shinyInput()', () => {
  it('contents gets sent to server and displayed in an output', () => {
    cy.visit('/');

    cy.get('button#actionButtons-defaultButton').click().then(() => {
      cy.get('#actionButtons-clicks').should('contain', 'Number of clicks: 1');
    });
  });
});

describe('primaryButton.shinyInput()', () => {
  it('contents gets sent to server and displayed in an output', () => {
    cy.visit('/');

    cy.get('button#actionButtons-primaryButton').click().then(() => {
      cy.get('#actionButtons-clicks').should('contain', 'Number of clicks: 1');
    });
  });
});

describe('compoundButton.shinyInput()', () => {
  it('contents gets sent to server and displayed in an output', () => {
    cy.visit('/');

    cy.get('button#actionButtons-compoundButton').click().then(() => {
      cy.get('#actionButtons-clicks').should('contain', 'Number of clicks: 1');
    });
  });
});

describe('actionButton.shinyInput()', () => {
  it('contents gets sent to server and displayed in an output', () => {
    cy.visit('/');

    cy.get('button#actionButtons-actionButton').click().then(() => {
      cy.get('#actionButtons-clicks').should('contain', 'Number of clicks: 1');
    });
  });
});
