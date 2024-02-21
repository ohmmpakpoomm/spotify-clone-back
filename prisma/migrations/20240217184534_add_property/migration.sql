/*
  Warnings:

  - A unique constraint covering the columns `[uri]` on the table `tracks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tracks_uri_key` ON `tracks`(`uri`);
