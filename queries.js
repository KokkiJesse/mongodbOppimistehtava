// Indeksi opiskelijanumerolle.
db.opiskelijat.createIndex({ studentId: 1 }, { unique: true });

// Indeksi kurssitunnukselle.
db.kurssit.createIndex({ courseId: 1 }, { unique: true });

// hae opiskelija opiskelijanumeron perusteella.
db.opiskelijat.find({ studentId: 'ag1234' });

// hae kurssi kurssitunnuksen perusteella.
db.kurssit.find({ courseId: 'HT00CF01' });

// Hae kurssit, joiden opintopisteet ovat 3 tai enemmän
db.kurssit.find({ credits: { $gte: 3 } });

// Päivittää opiskelijan säpön
db.opiskelijat.updateOne(
  { studentId: 'ag1234' },
  { $set: { email: 'uusi.email@example.com' } },
);

// Muuttaa kurssin opettaja
db.kurssit.updateOne(
  { courseId: 'HT00CF01' },
  { $set: { teacher: 'Uusi Opettaja' } },
);

// Laskee opiskelijoiden kokonaismaara
db.opiskelijat.aggregate([{ $count: 'opiskelijoita' }]);

// Laskee opiskelijakohtaisesti arvosanojen keskiarvo
db.opiskelijat.aggregate([
  { $unwind: '$courses' },
  {
    $group: {
      _id: '$studentId',
      keskiarvoArvosana: { $avg: '$courses.grade' },
    },
  },
]);

// Poista opiskelija studentId:lla
db.opiskelijat.deleteOne({ studentId: 'ag1234' });

// Poista kurssi courseId:lla
db.kurssit.deleteOne({ courseId: 'HT00CF01' });
