/*
CREATED BY: Aimal Khan
CREATE DATE: 02/03/2024
DESCRIPTION:  update the artist named "Bob Marley" to "Jackson Marley" in the `Artist` table?
*/
-- DML -> UPDATEing data

UPDATE
	Artist 
SET
	Name = "Jackson Marley"
WHERE
	ArtistId = 276;
