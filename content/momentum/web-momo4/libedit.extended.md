| [Prev](libedit)  | Appendix D. Key Binding Reference for ec_console |  [Next](glossary) |

## D.2. Extended Commands

The following extended commands may appear in your `.editrc` or may be entered directly into the console by entering extended command mode ( **Esc** **X** by default), and then typing in the extended command and pressing **Enter**.

<a name="extended_commands"></a>

**Table D.2. Extended Commands**

| Extended Command | Description |
| --- | --- |
| bind | `bind [-a] [-e] [-k] [-l] [-r] [-s] [-v] [key [command]]`

Without options, list all bound keys, and the editor command to which each is bound. If key is supplied, show the bindings for key. If key command is supplied, bind command to key. Options include:

*   `-a` - List or change key bindings in the vi(1) mode alternate (command mode) key map.

*   `-e` - Bind all keys to the standard GNU Emacs-like bindings

*   `-k` - *`key`* is interpreted as a symbolic arrow key name, which may be one of `up', `down', `left' or `right'.

*   `-l` - List all editor commands and a short description of each.

*   `-r` - Remove a key's binding.

*   `-s` - *`command`* is taken as a literal string and treated as terminal input when *`key`* is typed. Bound keys in *`command`* are themselves reinterpreted, and this continues for ten levels of interpretation. *`command`* may be one of the commands documented in [Section D.1, “Editor Commands”](libedit#libedit.emacs.editor "D.1. Editor Commands").

*   `-v` - Bind all keys to the standard vi(1) -like bindings.

*   `key [command]` - *`key`* and *`command`* can contain control characters of the form `^character` (e.g., `^A`), and the following backslashed escape sequences:

    *   `\a` - Bell

    *   `\b` - Backspace

    *   `\e` - Escape

    *   `\f` - Formfeed

    *   `\n` - Newline

    *   `\r` - Carriage return

    *   `\t` - Horizontal tab

    *   `\v` - Vertical tab

    *   `\nnn` - The ASCII character corresponding to the octal number nnn.

    NOTE: `\' nullifies the special meaning of the following character, if it has any, notably `\' and `^'.

 |
| echotc | `echotc [-sv] arg ...`

Exercise terminal capabilities given in `arg ...`. If arg is ‘baud’, ‘cols’, ‘lines’, ‘rows’, ‘meta or’ ‘tabs’, the value of that capability is printed, with “yes” or “no” indicating that the terminal does or does not have that capability.

`-s` returns an emptry string for non-existent capabilities, rather than causing an error. `-v` causes messages to be verbose.

 |
| edit | `edit [on | off]`

Enable or disable the editline functionality in a program.

 |
| history | `history`

List the history.

 |
| telltc | `telltc`

List the values of all the terminal capabilities (see termcap(5)).

 |
| settc | `settc cap val`

Set the terminal capability cap to val, as defined in termcap(5). No sanity checking is done.

 |
| setty | `setty [-a] [-d] [-q] [-x] [+mode] [-mode] [mode]`

Control which tty modes that editrc won’t allow the user to change. `-d`, `-q`, or `-x` tells setty to act on the ‘edit’, ‘quote’, or ‘execute’ set of tty modes respectively; defaulting to `-x`.

Without other arguments, setty lists the modes in the chosen set that are fixed on (‘+mode’) or off (‘-mode’). `-a` lists all tty modes in the chosen set regardless of the setting. With +mode, -mode or mode, fixes mode on or off or removes control of mode in the chosen set.

 |

|     |     |     |
| --- | --- | --- |
| [Prev](libedit)  | [Up](libedit) |  [Next](glossary) |
| Appendix D. Key Binding Reference for ec_console  | [Table of Contents](index) |  Glossary |

