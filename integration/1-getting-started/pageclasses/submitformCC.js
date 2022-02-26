import formPageObject, * as pageobject from '../../fixtures/pageclasses/submitformPO' ;

/**
 * @param {*} name 
 */

export function enterName(name)
{
    cy.get(formPageObject.nameInput).type(name) ;
}

/**
 * @param {*} email 
 */
export function enterEmail(email)
{
    cy.get(formPageObject.emailInput).type(email) ;
}

/**
 * 
 * @param {*} country 
 */
export function selectCountry(country)
{
    cy.get(formPageObject.countrySelect).select(country) ;
}

/**
 * 
 * @param {*} radio 
 */
export function clickPrincipalInvestorRadio(radio)
{
    cy.get(formPageObject.principalInvestorRadio).check(radio, { force: true }); ;
}

/**
 * @param {*} check 
 */
export function checkResearchApplicantChecbox(check)
{
    cy.get(formPageObject.researchApplicantChecbox).check(check, {force: true});
}

/**
 * @param {*} street 
 */
export function enterStreet(street)
{
    cy.get(formPageObject.streetInput).type(street) ;
}

/**
 * @description Submits the form.
 */
export function submitForm()
{
    cy.get(formPageObject.submit).click() ;
}
