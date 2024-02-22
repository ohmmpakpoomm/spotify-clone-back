-- DropForeignKey
ALTER TABLE `playlist_lists` DROP FOREIGN KEY `playlist_lists_playlist_id_fkey`;

-- DropForeignKey
ALTER TABLE `playlist_lists` DROP FOREIGN KEY `playlist_lists_track_id_fkey`;

-- DropForeignKey
ALTER TABLE `playlists` DROP FOREIGN KEY `playlists_user_id_fkey`;

-- AddForeignKey
ALTER TABLE `playlists` ADD CONSTRAINT `playlists_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlist_lists` ADD CONSTRAINT `playlist_lists_playlist_id_fkey` FOREIGN KEY (`playlist_id`) REFERENCES `playlists`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlist_lists` ADD CONSTRAINT `playlist_lists_track_id_fkey` FOREIGN KEY (`track_id`) REFERENCES `tracks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
