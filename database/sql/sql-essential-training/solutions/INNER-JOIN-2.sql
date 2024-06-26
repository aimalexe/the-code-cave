/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: list of customer names, first and last names, next to all the invoices generated by that customer??
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
INNER JOIN
	Customer AS C
ON
	I.CustomerId = C.CustomerId
ORDER BY
	C.CustomerId;