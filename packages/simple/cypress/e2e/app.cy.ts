describe('API hello', () => {
  it('should return a 200 status code and a message', () => {
    cy.request('http://localhost:3000/api/hello').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.eq('Hello, Next.js!')
    })
  })
})

describe('App Home', () => {
  it('should render the home page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Yay')
  })
})
