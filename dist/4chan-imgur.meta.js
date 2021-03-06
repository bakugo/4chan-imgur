// ==UserScript==
// @name        4chan imgur thumbnail (fix)
// @version     1.17.6
// @namespace   b4k
// @description Embeds image links in 4chan posts as normal thumbnails. Supports Imgur, 4chan, YouTube, Derpibooru, e621, Tumblr, Vocaroo and direct image links.
// @match       *://boards.4chan.org/*
// @match       *://fg.b4k.co/arch/*/thread/*
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// @require     http://b4k.co/code/lib/jquery/2.1.4/jquery.min.js
// @require     http://b4k.co/code/lib/b4k-js/1.0.0-beta.11/b4k.min.js
// @connect     b4k.co
// @connect     derpibooru.org
// @connect     e621.net
// @connect     api.tumblr.com
// @run-at      document-end
// @updateURL   https://github.com/bakugo/4chan-imgur/raw/master/dist/4chan-imgur.meta.js
// @downloadURL https://github.com/bakugo/4chan-imgur/raw/master/dist/4chan-imgur.user.js
// ==/UserScript==
