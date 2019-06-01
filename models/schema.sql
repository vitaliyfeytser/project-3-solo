DROP DATABASE IF EXISTS bookClub_db;
CREATE DATABASE bookClub_db;

use bookClub_db;

create table readers
(
	id int NOT NULL AUTO_INCREMENT,
	firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    city varchar(100) NOT NULL,
    stateUS varchar(50) NOT NULL,
    gender varchar(50),
	ageRange varchar(50) NOT NULL,
    bio varchar(500),
    email varchar(100),
    createdAt datetime, 
    updatedAt datetime,
	PRIMARY KEY (id)
);

INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Kristal", "Murphy", "Sacramento", "CA", "female", "0", "A short bio.", "iknow@mystuff.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Tyler", "Niccols", "Sacramento", "CA", "male", "0", "A short bio.", "awesomecoder@youknowthis.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Vitaliy", "Feytser", "Sacramento", "CA", "male", "0", "A short bio.", "theukrainetrain@muzhik.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Alex", "Tardif", "Sacramento", "CA", "male", "0", "A short bio.", "myfrontendisbetter@thanyours.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Patrick", "Thompson", "Sacramento", "CA", "male", "0", "A short bio.", "pt@alongfortheride.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Captain", "Marvel", "Sacramento", "CA", "female", "0", "A short bio.", "badmamajama@marvel.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Wonder", "Wonder", "Sacramento", "CA", "female", "0", "A short bio.", "imawonder@dc.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Billy", "Gruff", "Sacramento", "CA", "male", "0", "A short bio.", "thegoat@gruff.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Joe", "Bob", "Sacramento", "CA", "male", "0", "A short bio.", "jb@redneck.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Super", "Man", "Sacramento", "CA", "male", "0", "A short bio.", "imsuper@dc.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Aunt", "Sally", "Sacramento", "CA", "female", "0", "A short bio.", "icanhelp@withalgebra.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Bille", "Jean", "Sacramento", "CA", "female", "0", "A short bio.", "bj@notmylover.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Mark", "Morris", "Sacramento", "CA", "male", "0", "A short bio.", "onehit@wonder.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Leo", "Qiu", "Sacramento", "CA", "male", "0", "A short bio.", "leo@goesger.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");
INSERT INTO readers (firstName, lastName, city, stateUS, gender, ageRange, bio, email, createdAt, updatedAt) VALUES ("Mark", "Davis", "Sacramento", "CA", "male", "0", "A short bio.", "thehead@raider.com", "2019-04-06 22:18:59", "2019-04-06 22:18:59");

create table locations
(
	id int NOT NULL AUTO_INCREMENT,
    placeName varchar(50),
    placeAddress varchar(50),
    meetingTimes varchar(50),
    createdAt datetime, 
    updatedAt datetime,
    PRIMARY KEY (id)
);

INSERT INTO locations (placeName, placeAddress, meetingTimes, createdAt, updatedAt) VALUES ('Starbucks-1', '1401 Alhambra Blvd. Sacramento, CA' ,'Friday Night', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO locations (placeName, placeAddress, meetingTimes, createdAt, updatedAt) VALUES ('Starbucks-1', '1401 Alhambra Blvd. Sacramento, CA' ,'Saturday Night', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO locations (placeName, placeAddress, meetingTimes, createdAt, updatedAt) VALUES ('Starbucks-1', '1401 Alhambra Blvd. Sacramento, CA' ,'Sunday Night', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO locations (placeName, placeAddress, meetingTimes, createdAt, updatedAt) VALUES ('Starbucks-2', '1020 16th St. Sacramento, CA','Friday Night', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO locations (placeName, placeAddress, meetingTimes, createdAt, updatedAt) VALUES ('Starbucks-2', '1020 16th St. Sacramento, CA','Saturday Night', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO locations (placeName, placeAddress, meetingTimes, createdAt, updatedAt) VALUES ('Starbucks-2', '1020 16th St. Sacramento, CA','Sunday Night', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO locations (placeName, placeAddress, meetingTimes, createdAt, updatedAt) VALUES ('Starbucks-3', '5300 Folsom Blvd. Sacramento, CA','Friday Night', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO locations (placeName, placeAddress, meetingTimes, createdAt, updatedAt) VALUES ('Starbucks-3', '5300 Folsom Blvd. Sacramento, CA','Saturday Night', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO locations (placeName, placeAddress, meetingTimes, createdAt, updatedAt) VALUES ('Starbucks-3', '5300 Folsom Blvd. Sacramento, CA','Sunday Night', '2019-04-06 22:18:59', '2019-04-06 22:18:59');

create table promotedBooks
(
	id int NOT NULL AUTO_INCREMENT,
    title varchar(50),
    author varchar(150),
    caption varchar(2500),
    coverImage varchar(2500),
    monthAndYearPromoted varchar(50),
    createdAt datetime, 
    updatedAt datetime,
    PRIMARY KEY (id)
);

INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('Fire And Blood', 'George R.R. Martin', 'Centuries before the events of A Game of Thrones, House Targaryen—the only family of dragonlords to survive the Doom of Valyria—took up residence on Dragonstone...A Targeryan History', './images/fireandblood.jpeg', '06-2019', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('Tangled up in Ice', 'Charlotte Byrd', 'The recluse billionaire of New York... once, he had everything a man could want. Then, he lost the only thing that he ever loved', './images/tangledupinice.jpeg', '05-2019', '2019-04-06 22:18:58', '2019-04-06 22:18:58');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('Howard Stern Comes Again', 'Howard Stern', 'Rock stars and rap gods. Comedy legends and A-list actors. Supermodels and centerfolds. Moguls and mobsters. A president. Which interviews are his favorite?', './images/howardstern.jpeg', '04-2019', '2019-04-06 22:18:57', '2019-04-06 22:18:57');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('Unfreedom of the Press', 'Mark R. Levin', 'Levin shows how those entrusted with news reporting today are destroying freedom of the press from within: not government oppression or suppression...', './images/unfreedom.jpeg', '03-2019', '2019-04-06 22:18:56', '2019-04-06 22:18:56');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('A Game Of Thrones', 'George R.R. Martin', 'Lavishly illustrated special edition of A Game of Thrones—featuring gorgeous full-page artwork as well as black-and-white illustrations in every chapter—revitalizes the fantasy masterpiece that became a cultural phenomenon', './images/got.jpeg', '02-2019', '2019-04-06 22:18:55', '2019-04-06 22:18:55');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('Unfu*k Yourself: Get Out of Your Head and into Your Life', 'Gary John Bishop', 'A refreshing, BS-free, self-empowerment guide that offers an honest, no-nonsense, tough-love approach to help you move past self-imposed limitations.', './images/unfuck.jpeg', '01-2019', '2019-04-06 22:18:54', '2019-04-06 22:18:54');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('Cant Hurt Me: Master Your Mind and Defy the Odds', 'David Goggins', 'The only man in history to complete elite training as a Navy SEAL, Army Ranger, and Air Force Tactical Air Controller.', './images/canthurtme.jpeg', '12-2018', '2019-04-06 22:18:53', '2019-04-06 22:18:53');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('It', 'Stephen King', 'Seven adults who return to their hometown to confront a nightmare they had first stumbled on as teenagers…an evil without a name: It.', './images/it.jpeg', '11-2018', '2019-04-06 22:18:52', '2019-04-06 22:18:52');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('Tiamats Wrath', 'James S. A. Corey', 'Thirteen hundred gates have opened to solar systems around the galaxy. But as humanity builds its interstellar empire in the alien ruins, the mysteries and threats grow deeper.', './images/wrath.jpeg', '10-2018', '2019-04-06 22:18:51', '2019-04-06 22:18:51');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('Batman: The Complete Hush', 'Jeph Loeb', 'Batman sets out to discover the identity of a mysterious mastermind using the Joker, Riddler, Ras al Ghul and the Dark Knights other enemies-and allies-as pawns in a plan to wreak havoc.', './images/batman.jpeg', '09-2018', '2019-04-06 22:18:50', '2019-04-06 22:18:50');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('1984', 'Geore Orwell', 'George Orwell’s 1984 takes on new life with extraordinary relevance and renewed popularity.', './images/1984.jpeg', '08-2018', '2019-04-06 22:18:49', '2019-04-06 22:18:49');
INSERT INTO promotedBooks (title, author, caption, coverImage, monthAndYearPromoted, createdAt, updatedAt) VALUES ('The Alchemist', 'Paulo Coelho', 'Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.', './images/alchemist.jpeg', '07-2018', '2019-04-06 22:18:48', '2019-04-06 22:18:48');

create table favoriteBooks
(
	id int NOT NULL AUTO_INCREMENT,
	bookId int NOT NULL,
    readerId int NOT NULL,
    createdAt datetime, 
    updatedAt datetime,
    PRIMARY KEY (id)
);

INSERT INTO favoriteBooks (bookId, readerId, createdAt, updatedAt) VALUES ('1', '3', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO favoriteBooks (bookId, readerId, createdAt, updatedAt) VALUES ('2', '7', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO favoriteBooks (bookId, readerId, createdAt, updatedAt) VALUES ('10', '4', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO favoriteBooks (bookId, readerId, createdAt, updatedAt) VALUES ('7', '2', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO favoriteBooks (bookId, readerId, createdAt, updatedAt) VALUES ('1', '6', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO favoriteBooks (bookId, readerId, createdAt, updatedAt) VALUES ('3', '3', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO favoriteBooks (bookId, readerId, createdAt, updatedAt) VALUES ('2', '3', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO favoriteBooks (bookId, readerId, createdAt, updatedAt) VALUES ('4', '3', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO favoriteBooks (bookId, readerId, createdAt, updatedAt) VALUES ('5', '3', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO favoriteBooks (bookId, readerId, createdAt, updatedAt) VALUES ('6', '3', '2019-04-06 22:18:59', '2019-04-06 22:18:59');

create table bookClubs
(
	id int NOT NULL AUTO_INCREMENT,
	bookId int NOT NULL,
    readerId int NOT NULL,
    locationId int NOT NULL,
    createdAt datetime, 
    updatedAt datetime,
    PRIMARY KEY (id)
);

INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('1', '3', '3', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('1', '2', '3', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('1', '1', '3', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('1', '6', '3', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('2', '7', '2', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('2', '6', '2', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('2', '3', '2', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('2', '8', '2', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('2', '10', '2', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('3', '11', '1', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('3', '15', '1', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('3', '9', '1', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('3', '12', '1', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('3', '4', '1', '2019-04-06 22:18:59', '2019-04-06 22:18:59');
INSERT INTO bookClubs (bookId, readerId, locationId, createdAt, updatedAt) VALUES ('3', '5', '1', '2019-04-06 22:18:59', '2019-04-06 22:18:59');


SELECT * FROM locations;
SELECT * FROM promotedBooks;
SELECT * FROM favoriteBooks;
SELECT * FROM bookClubs;

SELECT * FROM readers;


-- WRITE SCHEMA FOR JOINING BOOKS WITH USERS