/**
 * @description Page objects for form flight search page.
 * @author Sindhu Koti
 */

 const searchPageObject = {
    url : 'https://next-staging-ae.almosafer.com/en/flights/DXB-JED/2022-05-22/2022-05-25/Economy/1Adult',
    directFlightsCheckboxLocator : '[data-testid="direct_flights_only_stops_filter_enabled"]', 
    saudiaAirlineCheckboxLocator : '[data-testid="FlightSearchResult__AirlinesFilter__Airline_SV_Checkbox"]',
    leisurePopUpLocator : '[data-testid=TripReasonModal__Option_Leisure]',
    selectFirstPackageGroupLocator : '[data-testid=Group0__SelectFlightButton]' ,
    popUpClose : '[data-testid="TripReasonModal__CloseIcon"]' ,
    showAllLocator : '.sc-MKjYC' 
}

export default searchPageObject ;