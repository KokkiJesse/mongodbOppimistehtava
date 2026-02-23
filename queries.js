// 1) Listaa kaikki opiskelijat.
db.opiskelijat.find({});

// 2) Hae yksi opiskelija sahkopostilla.
db.opiskelijat.findOne({ email: 'jesse@email.com' });

// 3) Listaa kaikki kurssit.
db.kurssit.find({});

// 4)
db.kurssit.find({ nimi: 'Tietokannat' });

// 5) Opiskelijat, joilla on arvosana 5 jossain kurssissa.
db.opiskelijat.find({ 'courses.grade': 5 });

// 6) Järjestä opiskelijat rekisteröitymispäivän mukaan (uusimmat ensin).
db.opiskelijat
  .find({}, { name: 1, registeredAt: 1, _id: 0 })
  .sort({ registeredAt: -1 });

// 7) Indeksi opiskelijanumerolle.
db.opiskelijat.createIndex({ opiskelijanumero: 1 }, { unique: true });

// 8) Indeksi kurssitunnukselle.
db.kurssit.createIndex({ kurssitunnus: 1 }, { unique: true });
