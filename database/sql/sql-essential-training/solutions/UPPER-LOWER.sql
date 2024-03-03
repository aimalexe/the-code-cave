/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Create a field with US customer's full address with 5 digit zip code having FirstName in All Caps and LastName in all lower?
*/
-- upper case: upper
-- lower case: lower

SELECT
	FirstName,
	LastName,
	Address,
	City,
	FirstName || " " || LastName || " " || Address || ", " || City ||" "|| State ||" "|| PostalCode AS "Mailing Address",
	upper(FirstName) AS "FIRSTNAME",
	lower(LastName) AS "lastname"
FROM
	Customer
WHERE
	Country = "USA";