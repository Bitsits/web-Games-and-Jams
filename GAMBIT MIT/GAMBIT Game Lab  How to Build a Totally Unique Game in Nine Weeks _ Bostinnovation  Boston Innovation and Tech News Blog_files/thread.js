/*jslint evil:true */
/**
 * Dynamic thread loader
 *
 * 
 * 
 * 
 * 
*/

// 
var DISQUS;
if (!DISQUS || typeof DISQUS == 'function') {
    throw "DISQUS object is not initialized";
}
// 

// json_data and default_json django template variables will close
// and re-open javascript comment tags

(function () {
    var jsonData, cookieMessages, session;

    /* */ jsonData = {"reactions": [{"body": "RT @BostInnovation: GAMBIT Game Lab: How to Build a Totally Unique Game in Nine Weeks <a href=\"http://bostinnovation.com/2010/03/31/gambit-game-lab-how-to-build-a-totally-unique-game-in-nine-weeks/\">http://bit.ly/bbHJoo</a>", "author_name": "MITBiG", "source_url": "http://www.backtype.com/search?q=http%3A//bostinnovation.com/2010/03/31/gambit-game-lab-how-to-build-a-totally-unique-game-in-nine-weeks/", "id": 24935410, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/MITBiG/status/11502130293", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a3.twimg.com/profile_images/703616683/SMALLmitbig_banner_normal.jpg", "author_url": "http://twitter.com/MITBiG/", "date_created": "6 months ago", "retweets": [{"url": "http://twitter.com/CreateMA/status/11428639367", "author_name": "CreateMA"}, {"url": "http://twitter.com/getnicebos/status/11384795906", "author_name": "getnicebos"}, {"url": "http://twitter.com/sliggity/status/11381541229", "author_name": "sliggity"}]}, {"body": "Neat! @KylePs80 writes about GAMBIT in @bostinnovation: How to Build a Totally Unique Game in Nine Weeks <a href=\"http://bostinnovation.com/2010/03/31/gambit-game-lab-how-to-build-a-totally-unique-game-in-nine-weeks/\">http://bit.ly/bbHJoo</a>", "author_name": "GambitGameLab", "source_url": "http://www.backtype.com/search?q=http%3A//bostinnovation.com/2010/03/31/gambit-game-lab-how-to-build-a-totally-unique-game-in-nine-weeks/", "id": 24738678, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/GambitGameLab/status/11381548858", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a3.twimg.com/profile_images/88586105/gambit_logo_for_twitter2_normal.jpg", "author_url": "http://twitter.com/GambitGameLab/", "date_created": "6 months ago", "retweets": []}, {"body": "@GambitGameLab has it going on! RT @bostinnovation GAMBIT Game Lab: How to Build a Totally Unique Game in Nine Weeks <a href=\"http://bostinnovation.com/2010/03/31/gambit-game-lab-how-to-build-a-totally-unique-game-in-nine-weeks/\">http://bit.ly/bbHJoo</a>", "author_name": "KylePs80", "source_url": "http://www.backtype.com/search?q=http%3A//bostinnovation.com/2010/03/31/gambit-game-lab-how-to-build-a-totally-unique-game-in-nine-weeks/", "id": 24738676, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/KylePs80/status/11380773964", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a3.twimg.com/profile_images/539214499/3313_525932599736_4500801_31172557_2886436_n_normal.jpg", "author_url": "http://twitter.com/KylePs80/", "date_created": "6 months ago", "retweets": []}, {"body": "GAMBIT Game Lab: How to Build a Totally Unique Game in Nine Weeks <a href=\"http://bostinnovation.com/2010/03/31/gambit-game-lab-how-to-build-a-totally-unique-game-in-nine-weeks/\">http://bit.ly/bbHJoo</a>", "author_name": "bostinnovation", "source_url": "http://www.backtype.com/search?q=http%3A//bostinnovation.com/2010/03/31/gambit-game-lab-how-to-build-a-totally-unique-game-in-nine-weeks/", "id": 24738677, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/bostinnovation/status/11380694975", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a1.twimg.com/profile_images/563834624/bostinno_b_normal.PNG", "author_url": "http://twitter.com/bostinnovation/", "date_created": "6 months ago", "retweets": []}, {"body": "RT @GambitGameLab: Neat! @KylePs80 writes about GAMBIT in @bostinnovation: How to Build a Totally Unique Game in Nine Weeks http://bit.ly/bbHJoo", "author_name": "r_j_nichols", "source_url": "http://www.ubervu.com/conversations/bostinnovation.com/2010/03/31/gambit-game-lab-how-to-build-a-totally-unique-game-in-nine-weeks/", "id": 24738675, "get_service_url": "http://twitter.com/", "title": "RT @GambitGameLab: Neat! @KylePs80 writes about GAMBIT in @bostinnovation: How to Build a Totally Unique Game in Nine Weeks http://bit.ly/bbHJoo", "url": "http://twitter.com/r_j_nichols/status/11382300377", "source": "ubervu", "get_service_name": "twitter", "avatar_url": "http://a3.twimg.com/profile_images/644358653/revolucion_normal.jpg", "author_url": "", "date_created": "6 months ago", "retweets": []}], "has_more_reactions": false, "users": {}, "forum": {"use_media": false, "avatar_size": 32, "mobile_theme_disabled": false, "is_early_adopter": false, "login_buttons_enabled": false, "streaming_realtime": false, "reply_position": false, "default_avatar_url": "http://mediacdn.disqus.com/1286416296/images/noavatar32.png", "template": {"url": "http://mediacdn.disqus.com/1286416296/build/themes/narcissus.js?1286481819", "name": "Narcissus", "css": "http://mediacdn.disqus.com/1286416296/build/themes/narcissus.css?1286481819"}, "use_new_iframe": false, "max_depth": 0, "linkbacks_enabled": true, "allow_anon_votes": true, "revert_new_login_flow": false, "show_avatar": true, "reactions_enabled": true, "disqus_auth_disabled": false, "name": "BostInnovation", "language": "en", "url": "bostinnovation", "allow_anon_post": true, "thread_votes_disabled": false, "moderate_all": false}, "realtime_enabled": false, "request": {"sort": 4, "has_unmerged_users": false, "is_authenticated": false, "subscribe_on_post": 0, "missing_perm": null, "remote_domain_name": "", "remote_domain": "", "is_verified": false, "email": "", "profile_url": "", "username": "", "is_global_moderator": false, "sharing": {}, "timestamp": "2010-10-10_17:58:57", "is_moderator": false, "forum": "bostinnovation", "is_initial_load": true, "display_username": "", "points": null, "moderator_can_edit": false, "is_remote": false, "userkey": "", "page": 1}, "ordered_posts": [], "realtime_paused": false, "posts": {}, "integration": {"receiver_url": null, "hide_user_votes": false, "reply_position": false, "disqus_logo": false}, "thread": {"voters_count": 0, "offset_posts": 0, "slug": "gambit_game_lab_how_to_build_a_totally_unique_game_in_nine_weeks", "paginate": false, "num_pages": 1, "days_alive": 0, "moderate_none": false, "voters": {}, "total_posts": 0, "realtime_paused": true, "queued": false, "pagination_type": "append", "user_vote": null, "likes": 0, "num_posts": 0, "closed": false, "per_page": 0, "id": 81228988, "killed": false, "moderate_all": false}, "reactions_limit": 10, "context": {"show_reply": true, "use_fb_connect": false, "active_switches": ["slim_paginator", "new_importer", "community_icon", "show_captcha_on_links"], "forum_facebook_key": "6f290d3be62e0232a428b4e4403bf091", "use_yahoo": false, "subscribed": false, "use_twitter_signin": true, "use_openid": false, "realtime_speed": 15000, "switches": {"overview_trending_threads": false, "slim_paginator": true, "show_captcha_on_links": true, "ssl_auth": false, "embed_sdk_loader": false, "new_importer": true, "community_icon": true, "auto_blacklist_spammers": false, "enable_random_recommendations": false}}, "mediaembed": [], "reactions_start": 0, "settings": {"read_only": false, "realtime_url": "http://disqus.com/forums/realtime.js", "minify_js": true, "debug": false, "disqus_url": "http://disqus.com", "uploads_url": "http://media.disqus.com/uploads", "recaptcha_public_key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "media_url": "http://mediacdn.disqus.com/1286416296"}, "media_url": "http://mediacdn.disqus.com/1286416296"}; /* */
    /* */ cookieMessages = {"user_created": null, "post_has_profile": null, "post_twitter": null, "post_not_approved": null}; session = {"url": null, "name": null, "email": null}; /* */

    DISQUS.jsonData = jsonData;
    DISQUS.jsonData.cookie_messages = cookieMessages;
    DISQUS.jsonData.session = session;
}());

DISQUS.jsonData.context.csrf_token = '21bc467119200cb06806902fa8e2f5b0';

DISQUS.jsonData.urls = {
    login: 'http://disqus.com/profile/login/',
    logout: 'http://disqus.com/logout/',
    reply: 'http://bostinnovation.disqus.com/gambit_game_lab_how_to_build_a_totally_unique_game_in_nine_weeks/reply.html',
    stats: 'http://bostinnovation.disqus.com/stats.html',
    request_user_profile: 'http://disqus.com/AnonymousUser/',
    request_user_avatar: 'http://mediacdn.disqus.com/1286416296/images/noavatar92.png',
    verify_email: 'http://disqus.com/verify/',
    remote_settings: 'http://bostinnovation.disqus.com/_auth/embed/remote_settings/',
    embed_thread: 'http://bostinnovation.disqus.com/thread.js',
    embed_profile: 'http://disqus.com/embed/profile.js',
    embed_vote: 'http://bostinnovation.disqus.com/vote.js',
    embed_thread_vote: 'http://bostinnovation.disqus.com/thread_vote.js',
    embed_thread_share: 'http://bostinnovation.disqus.com/thread_share.js',
    embed_login: 'http://disqus.com/embed/login.html',
    embed_edit: 'http://disqus.com/embed/edit.html',
    embed_report: 'http://bostinnovation.disqus.com/gambit_game_lab_how_to_build_a_totally_unique_game_in_nine_weeks/post_report/',
    embed_queueurl: 'http://bostinnovation.disqus.com/queueurl.js',
    embed_hidereaction: 'http://bostinnovation.disqus.com/hidereaction.js',
    embed_more_reactions: 'http://bostinnovation.disqus.com/more_reactions.js',
    embed_subscribe: 'http://bostinnovation.disqus.com/subscribe.js',
    embed_highlight: 'http://bostinnovation.disqus.com/highlight.js',
    embed_kill: 'http://bostinnovation.disqus.com/kill.js',
    embed_block: 'http://bostinnovation.disqus.com/block.js',
    toggle_thread_killed: 'http://bostinnovation.disqus.com/toggle_thread_killed.js',
    toggle_thread_closed: 'http://bostinnovation.disqus.com/toggle_thread_closed.js',
    update_moderate_all: 'http://bostinnovation.disqus.com/update_moderate_all.js',
    update_days_alive: 'http://bostinnovation.disqus.com/update_days_alive.js',
    show_user_votes: 'http://bostinnovation.disqus.com/show_user_votes.js',
    report_spam: 'http://bostinnovation.disqus.com/reportspam.js',
    forum_view: 'http://bostinnovation.disqus.com/gambit_game_lab_how_to_build_a_totally_unique_game_in_nine_weeks',
    get_comment_message: 'http://bostinnovation.disqus.com/get_comment_message.js',
    cnn_saml_try: 'http://disqus.com/saml/cnn/try/',
    realtime: DISQUS.jsonData.settings.realtime_url,
    thread_view: 'http://bostinnovation.disqus.com/gambit_game_lab_how_to_build_a_totally_unique_game_in_nine_weeks/',
    twitter_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/twitter/begin/',
    yahoo_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/yahoo/begin/',
    openid_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/openid/begin/',
    tweetbox_frame: DISQUS.jsonData.settings.disqus_url + '/forums/integrations/twitter/tweetbox.html',
    community: 'http://bostinnovation.disqus.com/community.html'
};
