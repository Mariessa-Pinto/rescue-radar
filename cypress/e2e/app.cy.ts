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
    it('should have a bar chart', () => {
        cy.visit('http://localhost:3000/whyAdopt')

        cy.get('main').find('[data-testid="barchart"]').should('exist')
    })
    it('should have the petfinder Api', () => {
        cy.visit('http://localhost:3000/availableDogs');

        cy.get('main').find('[data-testid="petfinder"]').should('exist')
    })
 
       it('should have a RedButton component with specific text and link to go back', () => {
        cy.visit('http://localhost:3000/formSent')
        const buttonText = 'Back To Home';
        const buttonLink = '/';

        cy.get('a[href="' + buttonLink + '"]').find('[data-testid="redBtn"]')
            .should('exist')
            .should('contain', buttonText);
       })
       it('should have the adoptapet Api', () => {
        cy.visit('http://localhost:3000/results');

        cy.get('main').find('[data-testid="adoptapet"]').should('exist')
    })

    it('completes the quiz, navigates to results, and verifies API request includes correct query parameters', () => {
        cy.intercept('GET', 'https://api.api-ninjas.com/v1/dogs*', (req) => {
          expect(req.url).to.include('min_life_expectancy=1');
        }).as('fetchDogs');
    
        cy.visit('http://localhost:3000/quiz');
        cy.get('[data-testid="quiz-option"]').each(($option) => {
      
          cy.wrap($option).first().click({ force: true }); 
        });

        cy.get('[data-testid="large-button"]').click();
    
        cy.wait('@fetchDogs').then((interception) => {
          expect(interception.request.url).to.include('min_life_expectancy=1');
        });
    
        cy.url().should('include', '/results');
      });
   /* - methods to add: 

    .within – limit the scope of cypress commands to within a specific element for example within a form - maybe adoption form - phone number and name

    */

})