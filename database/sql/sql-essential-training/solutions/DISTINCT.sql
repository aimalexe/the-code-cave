/*
CREATED BY: Aimal Khan
CREATE DATE: 01/03/2024
DESCRIPTION: identify music tracks that have not been sold?
*/
-- DISTINCT in Subquery
SELECT
	TrackId,
	Composer,
	Name
FROM
	Track
WHERE
	TrackId NOT IN (
		SELECT
			DISTINCT TrackId
		FROM
			InvoiceLine
	)
ORDER BY
	TrackId ASC;