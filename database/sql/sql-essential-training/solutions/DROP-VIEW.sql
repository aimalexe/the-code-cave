/*
CREATED BY: Aimal Khan
CREATE DATE: 01/03/2024
DESCRIPTION: Modify a basic VIEW AvgTotal?
*/
-- Views
DROP VIEW IF EXISTS V_AvgTotal;

CREATE VIEW V_AvgTotal AS
SELECT 
	avg(total) AS [Total Average]
FROM
	Invoice