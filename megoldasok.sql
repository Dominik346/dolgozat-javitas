1. feladat a termekek táblából az összes adat lekérdezése
SELECT * FROM termekek;
2. feladat listázd ki az összes adatot és legyen az ár csökkenő sorrendben
SELECT * FROM termekek ORDER BY ar DESC;
3. feladat listázd ki azoknak a termékek nevét ahol az ár kevesebb mint 2000
SELECT nev FROM termekek WHERE ar < 2000;
4. feladat kösd össze a termékek táblát a kategoriákkal és minden elemnél szerepeljen a hozzá tartózó kategória de legyen az ár szerint csökkenő sorrendben
SELECT termekek.id, termekek.nev, termekek.ar, termekek.keszlet, termekek.elerheto, kategoriak.nev FROM kategoriak INNER JOIN termekek ON kategoria_id ORDER BY termekek.ar ASC;
5. feladat írd ki azokat a termékeket amelyek elérhetőek és készleten is van belőle
SELECT nev FROM termekek WHERE elerheto = 1 AND keszlet > 0;

1. feladat azokat a termékeket amelynek van készleten írd át aktívra
UPDATE termekek
SET elerheto = 1
WHERE keszlet > 0
2. feladat nőveld az összes árat 10%-al 
UPDATE termekek
SET ar * 1.1;

1. feladat tüntesd el azokat az adatokat ahol az elérhető 0
DELETE FROM termekek WHERE elerheto = 0
2. feladat tüntesd el azokat az adatokat ahol a készlet 0
DELETE FROM termekek WHERE keszlet = 0

1. 


