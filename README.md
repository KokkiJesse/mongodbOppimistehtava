# NoSQL-Tietokanta Oppimistehtävä: Mongodb

--

## Kurssiseurantasovellus

**Kuvaus:**--

**Testaus:**

1. Kloonaa repositorio itselle ja siirry hakemistoon.
2. Käynnistä docker `docker compose up -d`
3. Aja `docker ps` komentorivillä ja ota kontin nimi talteen
4. Aja `docker exec -i <KONTINNIMI> mongoimport -u root -p password --
authenticationDatabase=admin --drop -d events -c users --jsonArray < kurssit.json` ja `docker exec -i <KONTINNIMI> mongoimport -u root -p password --
authenticationDatabase=admin --drop -d events -c users --jsonArray < opiskelijat.json` komentorivillä ja korvaa <KONTINNIMI> docker kontin nimellä.
5. Käynnistä Mongodb Compass ja päivitä näkymä tarvittaessa.
6. Testaa tietokantaa `queries.js` tiedostosta löytyvillä kyselyillä
