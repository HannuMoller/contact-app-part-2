/* Table creation clause (for MySQL/MariaDB) */

CREATE TABLE `contacts` (
	`id` SMALLINT(5) UNSIGNED NOT NULL,
	`first_name` VARCHAR(64) NOT NULL,
	`last_name` VARCHAR(64) NOT NULL,
	`phone` VARCHAR(16) NULL DEFAULT NULL,
	`street_address` VARCHAR(64) NULL DEFAULT NULL,
	`city` VARCHAR(64) NULL DEFAULT NULL,
	UNIQUE INDEX `id` (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;
