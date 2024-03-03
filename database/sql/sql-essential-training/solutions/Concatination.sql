/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Create a field with US customer's full address?
*/
-- Concatinatio: ||
SELECT
	FirstName,
	LastName,
	Address,
	City,
	FirstName || " " || LastName || " " || Address || ", " || City ||" "|| State ||" "|| PostalCode AS "Mailing Address"	
FROM
	Customer
WHERE
	Country = "USA";