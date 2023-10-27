describe('Routing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/')
    })

    it('can be navigated by keyboard', () => {
        // open menu
        cy.get('[data-testid="megamenu-section1"]').focus()
        cy.realPress(['Enter'])

        // tab to first link
        cy.realPress(['Tab'])
        cy.focused().should('have.attr', 'data-testid', 'link-0')

        // navigate to page
        cy.realPress(['Enter'])
        cy.title().should('eq', 'Listings - CampSpots')
    })

    it('updates the title when navigating to new page', () => {
        cy.title().should('eq', 'CampSpots - Home')

        cy.visit('http://localhost:1234/about')

        cy.title().should('eq', 'About - CampSpots')
    })
})
