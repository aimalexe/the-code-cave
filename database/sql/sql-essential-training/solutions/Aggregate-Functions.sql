/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Calculate the grand total of global sales for WSDA Music?
*/
-- Aggregate Functions:
SELECT
	SUM(total) AS [Total Sales],
	AVG(total) AS [Average Sales],
	MIN(total) AS [Minimum Sale],
	MAX(total) AS [Maximum Sale],
	COUNT(*) AS [Sales Count]	
FROM
	Invoice;