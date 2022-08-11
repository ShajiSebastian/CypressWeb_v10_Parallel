it.skip('Upload file',() => {
  cy.visit('')
  cy.get('.edit__logo').click();
  cy.get('.image-upload__upload-btn').click();
  cy.fixture("rebelbaselogo.png").then((fileContent) => {
  cy.get('input[type="file"]').attachFile({
    fileContent,
    fileName: "rebelbaselogo.png",
    encoding: "base64",
    mimeType: "image/png",
    });
  });
  cy.get('.image-upload__save-btn')
  .contains('Save logo to project page')
  .click();
})
