/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Clean up the result of the average sales calculation by rounding it to two decimal places?
*/
-- Nesting Function:
SELECT
	SUM(total) AS [Total Sales],
	ROUND(AVG(total), 2) AS [Average Sales], --Nested avg in round...
	MIN(total) AS [Minimum Sale],
	MAX(total) AS [Maximum Sale],
	COUNT(*) AS [Sales Count]	
FROM
	Invoice;