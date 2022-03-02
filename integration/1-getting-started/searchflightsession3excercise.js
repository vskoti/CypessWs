import searchflightPO from '../../fixtures/pageclasses/searchflightPO';

import * as action from '../../fixtures/pageclasses/searchflightCC';

/**
 * searches the flight and selects the first package group
 */
context('Search flights', () => {
    it('Search flights', function () {
      cy.visit(searchflightPO.url);
      cy.get("body").then($body => {
        if ($body.find(searchflightPO.popUpClose).length > 0) {   
            action.click(searchflightPO.popUpClose);
        }
    });
      action.click(searchflightPO.directFlightsCheckboxLocator,);
      cy.get(searchflightPO.showAllLocator).click();
      action.checkChecbox(searchflightPO.saudiaAirlineCheckboxLocator, 'Saudia'); 
      action.click(searchflightPO.selectFirstPackageGroupLocator);
      } )

  });

  