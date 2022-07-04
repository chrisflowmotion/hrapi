CREATE DATABASE hr_app;

CREATE TABLE `hr_app`.`employees` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`is_manager` TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
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
	CONSTRAINT `emergency_contact` FOREIGN KEY (`emergency_contact`) REFERENCES `hremergencycontacts` (`id`) ON UPDATE NO ACTION ON DELETE CASCADE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=3
;

CREATE TABLE `hr_app`.`emergencycontacts` (
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
AUTO_INCREMENT=2
;

CREATE TABLE `hr_app`.`holidayrequests` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` TINYTEXT NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`startDate` DATE NOT NULL,
	`endDate` DATE NOT NULL,
	`status` ENUM('PENDING','ACCEPTED','REJECTED') NOT NULL DEFAULT 'PENDING' COLLATE 'utf8mb4_0900_ai_ci',
	`daysUsed` TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
	`employee` INT(10) UNSIGNED NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `employeeFK` (`employee`) USING BTREE,
	CONSTRAINT `employeeFK` FOREIGN KEY (`employee`) REFERENCES `hremployees` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;

CREATE TABLE `hr_app`.`sickdays` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`start_date` DATE NOT NULL,
	`end_date` DATE NOT NULL,
	`employee` INT(10) UNSIGNED NULL DEFAULT NULL,
	`reason` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `employee` (`employee`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;
