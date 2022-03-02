
/**
 * @param {*} check 
 */
 export function checkChecbox(locator, check)
 {
     cy.get(locator).check(check, {force: true});
 }

 /**
 * @description Selects the flighty.
 */
export function click(object)
{
    cy.get(object).click() ;
}