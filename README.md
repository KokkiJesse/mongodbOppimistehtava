# NoSQL-Tietokanta Oppimistehtävä: Mongodb

MongoDB-tietokanta opintojen seurantaan

## Kurssiseurantasovellus

**Kuvaus:** MongoDB-tietokanta joka sisältää dataa kursseista, opiskelijoista ja heidän opintosuorituksistaan. MongoDB valittiin, koska se sopii joustavasti muuttuviin tietoihin ja skaalautuvuuteen. MongoDB tukee tehokkaita hakuja, indeksointia ja aggregaatioita, joiden avulla voidaan tehdä monipuolisia kyselyjä.

**Testaus:**

1. Kloonaa repositorio itselle ja siirry hakemistoon.
2. Käynnistä docker `docker compose up -d`
3. Aja `docker ps` komentorivillä ja ota kontin nimi talteen
4. Lisää kurssidata ajamalla `docker exec -i <KONTINNIMI> mongoimport -u root -p password --authenticationDatabase=admin --drop -d kurssiseuranta -c kurssit --jsonArray < kurssit.json` komentorivillä ja korvaa <KONTINNIMI> docker kontin nimellä.
5. Lisää opiskelijadata ajamalla `docker exec -i <KONTINNIMI> mongoimport -u root -p password --authenticationDatabase=admin --drop -d kurssiseuranta -c opiskelijat --jsonArray < opiskelijat.json` komentorivillä ja korvaa <KONTINNIMI> docker kontin nimellä.
6. Käynnistä Mongodb Compass ja päivitä näkymä tarvittaessa.
7. Testaa tietokantaa `queries.js` tiedostosta löytyvillä kyselyillä
