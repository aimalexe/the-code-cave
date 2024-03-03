/*
CREATED BY: Aimal Khan
CREATE DATE: 01/03/2024
DESCRIPTION: Modify a basic VIEW AvgTotal?
*/
-- JOINing Views
CREATE VIEW V_TrackInvoiceLine AS
SELECT
	il.InvoiceId,
	il.UnitPrice,
	t.Name,
	t.Composer,
	t.Milliseconds
FROM
	InvoiceLine AS il
INNER JOIN
	Track t
ON
	il.TrackId = t.TrackId