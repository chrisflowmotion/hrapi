CREATE DATABASE hr_app;

CREATE TABLE `emergencycontacts` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`forename` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`middlename` TINYTEXT NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`surname` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`email` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`phone` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address_line_1` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address_line_2` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address_line_3` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address_city` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address_postcode` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `employees` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`forename` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`middlename` TINYTEXT NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`surname` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`email` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`phone` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address_line_1` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address_line_2` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address_line_3` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address_city` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`address_postcode` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`holiday_allowance` TINYINT(3) UNSIGNED NOT NULL DEFAULT '28',
	`emergency_contact` INT(10) UNSIGNED NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `emergency_contact` (`emergency_contact`) USING BTREE,
	CONSTRAINT `emergency_contact` FOREIGN KEY (`emergency_contact`) REFERENCES `emergencycontacts` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=4
;

CREATE TABLE `holidayrequests` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`start_date` DATE NOT NULL,
	`end_date` DATE NOT NULL,
	`status` ENUM('PENDING','ACCEPTED','REJECTED') NOT NULL DEFAULT 'PENDING' COLLATE 'utf8mb4_0900_ai_ci',
	`days_used` TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
	`employee` INT(10) UNSIGNED NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `employeeFK` (`employee`) USING BTREE,
	CONSTRAINT `employeeFK` FOREIGN KEY (`employee`) REFERENCES `employees` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `privileges` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`privilege` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`description` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `sickdays` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`start_date` DATE NOT NULL,
	`end_date` DATE NOT NULL,
	`days_used` TINYINT(3) UNSIGNED NULL DEFAULT NULL,
	`reason` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`employee` INT(10) UNSIGNED NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `employee` (`employee`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `userprivileges` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`user` INT(10) UNSIGNED NOT NULL,
	`privilege` INT(10) UNSIGNED NOT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	UNIQUE INDEX `row` (`user`, `privilege`) USING BTREE,
	INDEX `privilege` (`privilege`) USING BTREE,
	CONSTRAINT `privilege` FOREIGN KEY (`privilege`) REFERENCES `privileges` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT `user` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `users` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`username` TEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`password` TEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`salt` TEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`profile` INT(10) UNSIGNED NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `profile` (`profile`) USING BTREE,
	CONSTRAINT `profile` FOREIGN KEY (`profile`) REFERENCES `employees` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;
