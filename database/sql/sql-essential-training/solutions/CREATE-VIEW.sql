/*
CREATED BY: Aimal Khan
CREATE DATE: 01/03/2024
DESCRIPTION: Creating a basic VIEW AvgTotal?
*/
-- Views

CREATE VIEW IF NOT EXISTS V_AvgTotal AS
SELECT 
	round(avg(total), 2) AS [Total Average]
FROM
	Invoice