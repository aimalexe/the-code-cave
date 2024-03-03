/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: RIGHT outer JOIN?
*/
SELECT
	C.FirstName,
	C.LastName,
	I.InvoiceId,
	I.CustomerId,
	I.InvoiceDate,
	I.total
FROM
	Customer AS C
LEFT OUTER JOIN
	Invoice AS I
ON
	I.CustomerId = C.CustomerId
ORDER BY
	C.CustomerId;