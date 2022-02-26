import testdata, * as tdata from "../../fixtures/testdata/data" ; 
import * as pageobject from '../../fixtures/pageclasses/submitformPO' ;
import * as action from '../../fixtures/pageclasses/submitformCC' ;

/**
 * @description Test case for form submission capable to handle multiple test data sets.
 *  Usage of page objects, custom commands. 
 * @author Sindhu Koti
 */
context('Submit Form', () => {
    beforeEach(() => {
      cy.visit('https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html');
    });
  
    testdata.forEach(element => {     
        it('Form Filling with multiple data! It submits hopefully!!',function(){
            action.enterName(element.name);
            action.enterStreet(element.street);
            action.enterEmail(element.email);
            action.selectCountry(element.country); 
            action.clickPrincipalInvestorRadio(element.principalInvestorRadio);
            action.checkResearchApplicantChecbox(element.researchApplicantChecbox);   
            action.submitForm(); 
      });

    });
   
});
  