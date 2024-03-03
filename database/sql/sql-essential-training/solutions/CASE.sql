/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: The managerial team now wants as many customers as possible to spend between 7 and $15 when purchasing music from their online store. As a result, they've created the following categories; 
- A baseline purchase, which is anything that falls between 99 cent and 1.99 
- A low purchase which falls between $2 and 6.99
- The target purchase, which is the sales goal of $7 and $15
- Top performer category which is anything that is above $15.
*/

SELECT
	InvoiceDate,
	BillingAddress,
	BillingCity,
	total,
	CASE 
		WHEN total < 2 THEN "baseline purchase"
		WHEN total BETWEEN 2 AND 6.99 THEN "low purchase"
		WHEN total BETWEEN 7 AND 15 THEN "target purchase"
		ELSE "top performer"
	END AS purchaseCategory
FROM
	Invoice
WHERE
	purchaseCategory = 'top performer'
ORDER by
	InvoiceDate DESC