### 1.16.2 - *2015-07-15*
- Add support for Appchan X
 - Fix script not running at all when using Appchan X
 - Fix settings button not being displayed anywhere when using Appchan X (it will now be added to the header)
 - Note: Appchan X's styling breaks the settings menu, this will not be fixed. Disable Appchan X if you want to change the settings properly

### 1.16.1 - *2015-07-10*
- Fix fileinfo not displaying for e621 and tumblr images

### 1.16.0 - *2015-07-09*
- Major code refactoring
- Direct links to e621 images with md5 filenames will now be resolved to the post page (similar to derpibooru links)

### 1.15.6 - *2015-06-26*
- Fix vocaroo embeds having incorrect dimensions

### 1.15.5 - *2015-06-25*
- Fix the inline extension's post menu not opening on posts with embedded links

### 1.15.4 - *2015-06-24*
- Fix dimensions displaying as `nullxnull` for e621 webms, they are not provided by the API so they should not display
- Fix scores not displaying at all when they were `0`
- Add tags and score to e621 link file info

### 1.15.3 - *2015-06-13*
- Fix derpibooru regexp not matching some full direct image urls

### 1.15.2 - *2015-06-11*
- Update b4k.js

### 1.15.1 - *2015-06-10*
- Fix settings button not being present in the 4chan catalog
- Always show all filtered tags instead of only the first one found

### 1.15.0 - *2015-05-30*
- Use specific asset versions in @require scripts

### 1.14.1 - *2015-05-19*
- Settings dialog will now use correct background colors according to the current theme when using the native extension

### 1.14.0 - *2015-04-28*
- Remove timeout for loading derpibooru filters (will now be loaded on every page load)
- Ignore derpibooru filters if the user is not logged in
- Add tags and score to derpibooru file info

### 1.13.2 - *2015-04-01*
- Update metadata
 - Use a metadata-only (.meta.js) file to check for updates

### 1.13.1 - *2015-04-01*
- Fix an issue with the settings functions that caused the script to fail on a clean install

### 1.13.0 - *2015-03-31*
- Derpibooru processor now uses derpiboo.ru instead of derpibooru.org
- Add "Load Derpibooru Filter" option to the Derpibooru processor
 - Automatically loads the current filter from Derpibooru and uses it to filter images
 - Filter is redownloaded and applied on each page load, with a minimum delay of 10 minutes between reloads
 - Must be logged in to [derpiboo.ru](https://derpiboo.ru/), other domains (derpibooru.org, etc.) will not work. If not logged in, the default Derpibooru filter will still be used
- Derpibooru filtered images will now have a "Filtered" tag in the file info, hovering over it will display the filtered tag

### 1.12.4 - *2015-03-24*
- Update b4k.js

### 1.12.3 - *2015-03-08*
- Fix *.media.tumblr.com images sometimes not loading
- Rewrite settings storage (settings will be reset, sorry!)

### 1.12.2 - *2015-03-07*
- Support for derpibooru.org/images/ links
- Enable script on the fg.b4k.co archive

### 1.12.1 - *2015-01-15*
- Improve accuracy of inline expansion scrollback position

### 1.12.0 - *2015-01-08*
- Fixed hover expansion displaying a broken image while loading on Firefox
- Added a "reload" button to the settings menu to re-process all posts
- Improved image load state detection for inline expansion
- Tumblr posts with multiple images will now display the first image in the post

### 1.11.2 - *2014-12-30*
- Minor bugfixes
- Fixed thumbnail placeholding
- Fixed text fields in the settings menu sometimes not being saved
- All settings will now update without having to reload the page, including text field settings
- Images won't be updated after closing the settings menu unless a setting has changed

### 1.11.1 - *2014-12-26*
- Fixed vocaroo processor

### 1.11.0 - *2014-12-24*
- Code cleanup
- Bugfixes

### 1.10.5 - *2014-12-19*
- Sorry

### 1.10.4 - *2014-12-19*
- Fixed some cases where the 4chan X header button wasn't added

### 1.10.3 - *2014-12-18*
- Improved inline expansion

### 1.10.2 - *2014-12-17*
- Updated the settings menu button added to the 4chan X header
 - Now uses a FontAwesome icon (`fa-info-circle`) instead of text
 - Is now placed alongside the rest of the buttons (placed on the right of the updater/thread stats, if these are enabled)
 - No longer supports non-seaweedchan forks
- Fixed text input fields in the settings menu being too small when using OneeChan

### 1.10.1 - *2014-12-14*
- Fixed Tumblr thumbnails sometimes not being detected correctly
- Generic processor will now ignore www.dropbox.com/s/* URLs since they can't be loaded directly

### 1.10.0 - *2014-12-14*
- Updated imgur processor
 - Now always links to an image's imgur page, regardless of the link matched (imgur.com or i.imgur.com)
 - Better handling of .gifv links
- Improved Inline Expansion and Hover Expansion
 - Updated the position calculation on hover-expanded images
- Moved the vocaroo_player.swf to files.b4k.co

### 1.9.0 - *2014-12-08*
- Added Tumblr processor
 - Loads images from tumblr posts
 - Currently only works on single-image posts, ignores all other post types
 - Example: blog.tumblr.com/image/123456 or blog.tumblr.com/post/123456/post-text
- Updated b4k.co archive url
- Fixed a possible issue with URL truncating in links

### 1.8.5 - *2014-11-29*
- Fixed hover-expanded images being layered under the 4chan X header instead of over it
- Fixed some issues with the youtube and 4chan processors
- File extension is now shown on 4chan images

### 1.8.4 - *2014-11-24*
- Fixed hover-expanded images being positioned incorrectly due to the mouse position not being detected

### 1.8.3 - *2014-11-22*
- Update b4k.js
- Image data cache is now preserved when the script restarts

### 1.8.2 - *2014-11-22*
- Fixed an undeclared variable causing the script to not run on Firefox

### 1.8.1 - *2014-11-22*
- Fix/update b4k.js

### 1.8.0 - *2014-11-22*
- Code refactoring
- Improved loading of derpibooru and e261 image data: if loading fails, the script will try again after 3 seconds (up to 5 times)
 - This should make derpibooru images fail to load less often when the servers are being slow
- Static derpibooru image links (derpicdn.net) are now recognized and embedded as normal derpibooru links
- Script will no longer try to load WEBMs from e264 as normal images (shows the e264 video thumbnail for now)

### 1.7.10 - *2014-11-19*
- Fixed detection of links that were replaced/embedded by other extensions (ex: 4chan X youtube link titles)
- Updated menu links to link to the new repo

### 1.7.9 - *2014-11-14*
- Move to [bakugo/4chan-imgur](https://github.com/bakugo/4chan-imgur)

### 1.7.8 - *2014-11-12*
- Made "auto scroll back to post" more accurate when using 4chan X (now takes the header height into account aswell)

### 1.7.7 - *2014-09-14*
- More fixes to the generic URL regexp

### 1.7.6 - *2014-09-13*
- Fixed generic processor ignoring URLs where the filename has more than one period

### 1.7.5 - *2014-09-11*
- Fixed 4chan thumbnails sometimes failing to load
- Settings button in 4chan x's header now displays properly in some other forks

### 1.7.4 - *2014-08-14*
- Fixed hover expansion sometimes not working at all

### 1.7.3 - *2014-08-14*
- Fixed hover images sometimes being positioned too low until the mouse was moved (position is now updated when the image begins loading)

### 1.7.2 - *2014-07-27*
- Force https on media.tumblr.com again, always use 1.media.tumblr.com to avoid bad certificates

### 1.7.1 - *2014-07-19*
- Minor update to fix hover expansion

### 1.7.0 - *2014-07-19*
- Improved inline expansion
- Added swf inline expansion (for 4chan and e621)
- Added a new thumbnail for swf files
- Fixed thumbnails not working on 4chan links to boards with a number in their name

### 1.6.3 - *2014-06-14*
- Changed @require scripts domain

### 1.6.2 - *2014-06-14*
- Middle mouse click no longer expands images
- Fix some whitespace issues with post comment parsing
- Removed autogif option from derpibooru since thumbnails are already animated (wow, that was dumb)

### 1.6.1 - *2014-06-02*
- Fix vocaroo embeds not working
- Fix derpibooru duplicate images with redirects causing errors

### 1.6.0 - *2014-05-31*
- More code cleanup
- Fix 4chan x's index search sometimes causing multiple thumbnails in the same post
- Fix menu link sometimes not being added to 4chan x's header bar
- Fix the script trying to load imgur.com/gallery/ urls
- Script no longer forces https on media.tumblr.com links
 - The media.tumblr.com domain sometimes has a bad https certificate, preventing the images from loading (blame the idiots in charge of that site)
- e621 SWF files can no longer be expanded and break the script
 - (maybe I'll add actual swf expansion in the future)
- Image format and dimensions are now displayed for derpibooru and e621 images
 - Filesize is also displayed for e621 images only
- Vocaroo embedding now works in https (mirrored player.swf on a domain that supports https)
- Long image filenames will now be truncated and expand on mouse hover
- Added new error/loading/placeholder images
- Added autogif option to 4chan, e621
- Removed tiny thumb option from imgur since it was pretty useless
- When closing the settings menu, if any setting has been changed, all thumbnails will be regenerated with the new settings applied
- Changed menu link in 4chan x's header to be in the same style as the other buttons on it
- When an expanded image is closed, automatically scroll to the post the image is in
 - For example, when you expand a large image and scroll down to see more of it, when you close it you won't be halfway down the page
- Removed code that imported settings from old versions
- Page can no longer be scrolled when the settings menu is open
- Added tag blacklist for derpibooru
 - Comma-separated
 - Any images with a blacklisted tag will not be auto-loaded

### 1.5.0 - *2014-05-04*
- Add e621.net embedding
- Better fix for inline extension breaking click events

### 1.4.2 - *2014-05-04*
- Parse posts using the post itself instead of the blockquote element

### 1.4.1 - *2014-05-04*
- Automatically add wildcard to tumblr.com allowed domain imported from previous version

### 1.4.0 - *2014-05-03*
- Major code rewrite
- Now uses jQuery
- Script will not run if it's not installed in Greasemonkey/Tampermonkey
- Implemented userscript thing from b4k.js
 - Settings are now saved using GM_setValue and all in the same value (using JSON)
  - Settings from previous versions will automatically be converted
  - Settings will no longer be different when browsing with http or https
 - Added GM_xmlhttpRequest wrapper for jQuery.ajax() to allow cross-domain requests
- HTTP requests are now made with jQuery.ajax()
- Fixed derpibooru embedding not working on Chrome
- Fixed deleted derpibooru images causing an error
- Prevent the native 4chan extension from breaking click events (inline expand, etc.)
- Fixed incorrect vocaroo embed size
- Updated 4chan regexp for new image urls (i.4cdn.org, no /src/ or /thumb/ folders)
- URL black/whitelist fields now allow wildcards (* and ?)
- When browsing with HTTPS, images are also loaded over HTTPS
- Improved style adding
- Completely changed menu layout
 - Now compatible with different themes/user styles
 - Added changelog link
- Probably a few more changes that I forgot I even made
- Note: vocaroo embeds currently do not work on HTTPS due to the vocaroo site having an invalid HTTPS certificate.
