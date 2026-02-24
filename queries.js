// Indeksi opiskelijanumerolle.
db.opiskelijat.createIndex({ studentId: 1 }, { unique: true });

// Indeksi kurssitunnukselle.
db.kurssit.createIndex({ courseId: 1 }, { unique: true });

// Hae kaikki opiskelijat
db.opiskelijat.find({});

// Hae opiskelijat, joilla on arvosana 4 tai korkeampi
db.opiskelijat.find({ 'courses.grade': { $gte: 4 } });

// Hae kurssit, joiden opintopisteet ovat 3 tai enemmän
db.kurssit.find({ credits: { $gte: 3 } });

// Päivitä opiskelijan säpö
db.opiskelijat.updateOne(
  { _id: ObjectId('650f1234567890abcdef1234') },
  { $set: { email: 'uusi.email@example.com' } },
);

// Päivitä kurssin opettaja
db.kurssit.updateOne(
  { courseId: 'HT00CF01' },
  { $set: { teacher: 'Uusi Opettaja' } },
);

// Laske opiskelijoiden kokonaismaara
db.opiskelijat.aggregate([{ $count: 'opiskelijoita' }]);

// Laske kurssien keskiarvo opintopisteistä
db.kurssit.aggregate([
  { $group: { _id: null, keskiarvoPisteet: { $avg: '$credits' } } },
]);

// Poista opiskelija studentId:lla
db.opiskelijat.deleteOne({ studentId: 'ag1234' });

// Poista kurssi courseId:lla
db.kurssit.deleteOne({ courseId: 'HT00CF01' });
