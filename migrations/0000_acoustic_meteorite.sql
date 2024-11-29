CREATE TABLE `trademark_registration` (
	`id` integer PRIMARY KEY NOT NULL,
	`brand` text NOT NULL,
	`owner` text NOT NULL,
	`status` text DEFAULT 'active' NOT NULL
);
