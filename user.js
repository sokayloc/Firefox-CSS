/* Enable userChrome customisations */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

/* Don't close the bookmark menu when middle-clicking the entries */
user_pref("browser.bookmarks.openInTabClosesMenu", false);

/* Increase the minimum tab width so that the tab title can be read */
user_pref("browser.tabs.tabMinWidth", 140);

/* Prevent middle-click (to autoscroll) from deselecting text */
/* Relevant bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1714810 */
user_pref("general.autoscroll.prevent_to_collapse_selection_by_middle_mouse_down", true);

/* Make PDFs sent as attachments open directly in Firefox without downloading */
/* Relevant bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1772569 */
user_pref("browser.download.open_pdf_attachments_inline", true);

/* Disable pocket */
user_pref("extensions.pocket.enabled", false);
