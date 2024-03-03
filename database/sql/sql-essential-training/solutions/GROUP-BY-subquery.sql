/*
CREATED BY: Aimal Khan
CREATE DATE: 01/03/2024
DESCRIPTION: Constructing a query that calculates and displays the average metric for each city alongside the global average metric?
*/
-- Aggregated Subquery 

SELECT
	BillingCity,
	AVG(total) AS [City Average],
	(
		SELECT
			AVG(total)
		FROM
			Invoice
	) AS [Global Average]
FROM
	Invoice
GROUP BY
	BillingCity
ORDER BY
	BillingCity;

