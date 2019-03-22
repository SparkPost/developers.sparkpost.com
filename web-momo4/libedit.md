| [Prev](smtp-response-codes)  | Part XI. Appendix |  [Next](libedit.extended) |
## Key Binding Reference for ec_console
**Table of Contents**

* [D.1\. Editor Commands](libedit#libedit.emacs.editor)
* [D.2\. Extended Commands](libedit.extended)

## D.1. Editor Commands
**ec_console** uses the `libedit` library to provide command line editing facilities. By default, libedit starts in Emacs mode, which provides built-in commands that you can combine into macros to automate your work. You can change the default setting by configuring your `.editrc` file.
<a name="emacs_and_editor_commands"></a>
**Table D.1. Editor Commands**
| Default Emacs Key Binding | Editor Command | Description |
| --- | --- | --- |
| Ctrl+@ | em-set-mark | Set the mark at cursor. |
| Ctrl+A | ed-move-to-beg | Move cursor to the beginning of line. |
| Ctrl+B | ed-prev-char | Move to the left one character. |
| Ctrl+C | ed-tty-sigint | Tty interrupt character. |
| Ctrl+D | em-delete-or-list | Delete character under cursor or list completions if at end of line. |
| Ctrl+E | ed-move-to-end | Move cursor to the end of line. |
| Ctrl+F | ed-next-char | Move to the right one character. |
| Ctrl+H | ed-delete-prev-char | Delete the character to the left of the cursor. |
| Ctrl+J, Ctrl+M | ed-newline | Execute command. |
| Ctrl+K, Ctrl+U | ed-kill-line | Cut to the end of line. |
| Ctrl+L | ed-clear-screen | Clear screen leaving current line at the top. |
| Ctrl+N | ed-next-history | Move to the next history line. |
| Ctrl+O | ed-tty-flush-output | Tty flush output characters. |
| Ctrl+P | ed-prev-history | Move to the previous history line. |
| Ctrl+Q | ed-tty-start-output | Tty allow output characters. |
| Ctrl+R | ed-redisplay | Redisplay everything. |
| Ctrl+S | ed-tty-stop-output | Tty disallow output characters. |
| Ctrl+T | ed-transpose-chars | Exchange the character to the left of the cursor with the one under it. |
| Ctrl+V | ed-quoted-insert | Add the next character typed verbatim. |
| Ctrl+W | em-kill-region | Cut area between mark and cursor and save in cut buffer. |
| Ctrl+Y | em-yank | Paste cut buffer at cursor position. |
| Ctrl+Z | ed-tty-sigtstp | Tty suspend character. |
| Ctrl+[ | em-meta-next | Add 8th bit to next character typed. |
| Ctrl+\ | ed-tty-sigquit | Tty quit character. |
| Ctrl+] | ed-tty-dsusp | Tty delayed suspend character. |
| Esc Backspace | ed-delete-prev-word | Delete from beginning of current word to cursor. |
| Esc Ctrl+_ | em-copy-prev-word | Copy current word to cursor. |
| Esc B | ed-prev-word | Move to the beginning of the current word. |
| Esc C | em-capital-case | Capitalize the characters from cursor to end of current word. |
| Esc D | em-delete-next-word | Cut from cursor to end of current word. |
| Esc F | em-next-word | Move next to end of current word. |
| Esc L | em-lower-case | Lowercase the characters from cursor to end of current word. |
| Esc N | ed-search-next-history | Search next in history for a line matching the current. |
| Esc P | ed-search-prev-history | Search previous in history for a line matching the current. |
| Esc U | em-upper-case | Uppercase the characters from cursor to end of current word. |
| Esc W | em-copy-region | Copy area between mark and cursor to cut buffer. |
|  | ed-argument-digit | Digit that starts argument. |
|  | ed-delete-next-char | Delete character under cursor. |
|  | ed-digit | Adds to argument or enters a digit. |
|  | ed-end-of-file | Indicate end of file. |
|  | ed-insert | Add character to the line. |
|  | ed-next-line | Move down one line. |
|  | ed-prev-line | Move up one line. |
|  | ed-sequence-lead-in | First character in a bound sequence. |
|  | ed-start-over | Erase current line and start from scratch. |
|  | ed-unassigned | Indicates unbound character. |
|  | em-exchange-mark | Exchange the cursor and mark. |
|  | em-gosmacs-traspose | Exchange the two characters before the cursor. |
|  | em-inc-search-next | Emacs incremental next search. |
|  | em-inc-search-prev | Emacs incremental reverse search. |
|  | em-kill-line | Cut the entire line and save in cut buffer. |
|  | em-toggle-overwrite | Switch from insert to overwrite mode or vice versa. |
|  | em-universal-argument | Universal argument (argument times 4). |
|  | vi-add | Vi enter insert mode after the cursor. |
|  | vi-add-at-eol | Vi enter insert mode at end of line. |
|  | vi-change-case | Vi change case of character under the cursor and advance one character. |
|  | vi-change-meta | Vi change prefix command. |
|  | vi-change-to-eol | Vi change to end of line. |
|  | vi-command-mode | Vi enter command mode (use alternative key bindings). |  |
|  | vi-delete-meta | Vi delete prefix command. |
|  | vi-delete-prev-char | Vi move to previous character (backspace). |
|  | vi-end-word | Vi move to the end of the current space delimited word. |
|  | vi-insert | Vi enter insert mode. |
|  | vi-insert-at-bol | Vi enter insert mode at the beginning of line. |
|  | vi-kill-line-prev | Vi cut from beginning of line to cursor. |
|  | vi-list-or-eof | Vi list choices for completion or indicate end of file if empty line. |
|  | vi-next-char | Vi move to the character specified next. |
|  | vi-next-space-word | Vi move to the next space delimited word. |
|  | vi-next-word | Vi move to the next word. |
|  | vi-paste-next | Vi paste previous deletion to the right of the cursor. |
|  | vi-paste-prev | Vi paste previous deletion to the left of the cursor. |
|  | vi-prev-char | Vi move to the character specified previous. |
|  | vi-prev-space-word | Vi move to the previous space delimited word. |
|  | vi-prev-word | Vi move to the previous word. |
|  | vi-repeat-next-char | Vi repeat current character search in the same search direction. |
|  | vi-repeat-prev-char | Vi repeat current character search in the opposite search direction. |
|  | vi-repeat-search-next | Vi repeat current search in the same search direction. |
|  | vi-repeat-search-prev | Vi repeat current search in the opposite search direction. |
|  | vi-replace-char | Vi replace character under the cursor with the next character typed. |
|  | vi-replace-mode | Vi enter replace mode. |
|  | vi-search-next | Vi search history next. |
|  | vi-search-prev | Vi search history previous. |
|  | vi-substitute-char | Vi replace character under the cursor and enter insert mode. |
|  | vi-substitute-line | Vi substitute entire line. |
|  | vi-to-end-word | Vi move to the end of the current word. |
|  | vi-to-next-char | Vi move up to the character specified next. |
|  | vi-to-prev-char | Vi move up to the character specified previous. |
|  | vi-undo | Vi undo last change. |
|  | vi-zero | Vi move to the beginning of line. |

| [Prev](smtp-response-codes)  | [Up](p.appendix) |  [Next](libedit.extended) |
| Appendix C. SMTP Response Codes  | [Table of Contents](index) |  D.2. Extended Commands |
