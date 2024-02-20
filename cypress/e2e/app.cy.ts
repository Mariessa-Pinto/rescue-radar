import Link from "next/link";
import LargeButton from "@/components/LargeButton";
import Navbar from "@/components/Navbar";

describe('Home Page', () => {
    it('have one element of h1 tag', () => {
        cy.visit('http://localhost:3000');

        cy.get('main').find('h1').should('have.length', 1)
    })
    it('have Images', () => {
        cy.visit('http://localhost:3000');

        cy.get('main').find('img').should('exist');
    })
    it('should have a LargeButton component with specific text and link', () => {
        cy.visit('http://localhost:3000')
        const buttonText = 'Take Quiz';
        const buttonLink = '/quiz';

        cy.get('a[href="' + buttonLink + '"]').find('[data-testid="large-button"]')
            .should('exist')
            .should('contain', buttonText);
       })
    it('should have a navbar', () => {
        cy.visit('http://localhost:3000')

        cy.get('main').find('[data-testid="navbar"]').should('exist')
    })
    it('should have a quiz container component', () => {
        cy.visit('http://localhost:3000/quiz')

        cy.get('main').find('[data-testid="quizCon"]').should('exist')
    })

})