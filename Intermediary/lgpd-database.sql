DROP TABLE public."courses" CASCADE;

DROP TABLE public."evaluations" CASCADE;

DROP TABLE public."teachers" CASCADE;

DROP TABLE public."users" CASCADE;


CREATE TABLE "users" (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR ( 50 ) NOT NULL,
	last_name VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) NOT NULL,
	gender VARCHAR(55) NOT NULL
);

create table "courses" (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

create table "teachers" (
	id SERIAL PRIMARY KEY,
	name VARCHAR ( 50 ) NOT NULL,
	course_id INTEGER NOT null,
	CONSTRAINT fk_courses
      FOREIGN KEY(course_id) 
	  REFERENCES "Courses"(id)
);


create table "evaluations" (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL,
	concept VARCHAR (50) NOT null,
	course_id INTEGER NOT null,
	CONSTRAINT fk_courses
      FOREIGN KEY(course_id) 
	  REFERENCES "Courses"(id),
	CONSTRAINT fk_users
      FOREIGN KEY(user_id) 
	  REFERENCES "Users"(id)
);

select * from users;
select * from teachers;
select * from evaluations;
select * from courses;