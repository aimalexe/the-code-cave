/*
CREATED BY: Aimal Khan
CREATE DATE: 24/02/2024
DESCRIPTION: JOIN more than two tables. Hhat employees are responsible for the 10 highest individual sales?
*/
SELECT
	E.FirstName,
	E.LastName,
	E.EmployeeId,
	C.FirstName,
	C.LastName,
	C.SupportRepId,
	I.CustomerId,
	I.total
FROM
	Invoice AS I
INNER JOIN
	Customer AS C
ON
	I.CustomerId = C.CustomerId
INNER JOIN
	Employee as E
ON
	C.SupportRepId = E.EmployeeId
ORDER BY
	I.total DESC
LIMIT 10;