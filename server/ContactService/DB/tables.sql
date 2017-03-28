/* Table creation clause (for MySQL/MariaDB) */

CREATE TABLE `contacts` (
	`first_name` VARCHAR(64) NOT NULL,
	`last_name` VARCHAR(64) NOT NULL,
	`phone` VARCHAR(16) NULL DEFAULT NULL,
	`street_address` VARCHAR(64) NULL DEFAULT NULL,
	`city` VARCHAR(64) NULL DEFAULT NULL,
	UNIQUE INDEX `first_name_last_name` (`first_name`, `last_name`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;
