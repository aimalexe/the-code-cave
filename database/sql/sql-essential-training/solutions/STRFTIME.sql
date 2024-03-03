/*
CREATED BY: Aimal Khan
CREATE DATE: 27/02/2024
DESCRIPTION: Calculate the ages of employees using their birth dates.?
*/
SELECT
	FirstName,
	LastName,
	BirthDate,
	strftime('%Y-%m-%d', BirthDate) AS [No timstamp BirthDate],
	strftime('%Y/%m/%d', 'now') - strftime('%Y-%m-%d', BirthDate) AS Age
FROM
	Employee