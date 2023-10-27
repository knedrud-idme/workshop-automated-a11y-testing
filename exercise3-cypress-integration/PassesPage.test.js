describe('Passes Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/passes')

        cy.injectAxe()
    })

    xit('should have no accessibility violations on load', () => {
        cy.checkA11y({
            exclude: ['div#portal-root']
        })
    })

    it('should open modal and manage focus when join button is clicked', () => {
        // click join button
        cy.get('#btn-join-basic').focus().click()

        // focus modal with role dialog
        cy.focused().should('have.attr', 'data-testid', 'payment-dialog')
        cy.focused().should('have.attr', 'role', 'dialog')

        // tab to close button
        cy.realPress(['Tab'])
        cy.focused().should('have.attr', 'data-testid', 'btn-close-dialog')
    })

    it('should close modal when Enter key is hit on the close button', () => {
        cy.get('#btn-join-basic').focus().click()

        // close - focus returns to join button
        cy.get('[data-testid="btn-close-dialog"]').focus()
        cy.realPress(['Enter'])
        cy.focused().should('have.attr', 'id', 'btn-join-basic')
    })

    it('should close modal when Esc key is hit', () => {
        cy.get('#btn-join-basic').focus().click()

        // close - focus returns to join button
        cy.realPress(['Escape'])
        cy.focused().should('have.attr', 'id', 'btn-join-basic')
    })


})
