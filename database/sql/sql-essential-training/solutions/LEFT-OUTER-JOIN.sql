/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: Left outer JOIN?
*/
SELECT
	C.FirstName,
	C.LastName,
	I.InvoiceId,
	I.CustomerId,
	I.InvoiceDate,
	I.total
FROM
	Invoice AS I
LEFT OUTER JOIN
	Customer AS C
ON
	I.CustomerId = C.CustomerId
ORDER BY
	C.CustomerId;