/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Create a field with US customer's full address with 5 digit zip code?
*/
-- Truncation: SUBSTR
SELECT
	FirstName,
	LastName,
	Address,
	City,
	FirstName || " " || LastName || " " || Address || ", " || City ||" "|| State ||" "|| PostalCode AS "Mailing Address",
	length(PostalCode),
	substr(PostalCode, 0, 6) AS "5 Digit Zip"
FROM
	Customer
WHERE
	Country = "USA";