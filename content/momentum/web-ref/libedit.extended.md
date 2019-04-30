| [Prev](libedit.editor.commands)  | Appendix G. Key Binding Reference for ec_console |  [Next](disclaimer.php) |

## G.3. Extended Commands

The following extended commands may appear in your `.editrc` or may be entered directly into the console by entering extended command mode ( **Esc** **X** by default), and then typing in the extended command and pressing **Enter**.

### G.3.1. bind

`bind [-a] [-e] [-k] [-l] [-r] [-s] [-v] [key [command]]`

Without options, list all bound keys, and the editor command to which each is bound. If key is supplied, show the bindings for key. If key command is supplied, bind command to key. Options include:

<dl className="variablelist">

<dt>-e</dt>

<dd>

Bind all keys to the standard GNU Emacs-like bindings

</dd>

<dt>-v</dt>

<dd>

Bind all keys to the standard vi(1) -like bindings.

</dd>

<dt>-a</dt>

<dd>

List or change key bindings in the vi(1) mode alternate (command mode) key map.

</dd>

<dt>-k</dt>

<dd>

*`key`* is interpreted as a symbolic arrow key name, which may be one of `up', `down', `left' or `right'.

</dd>

<dt>-l</dt>

<dd>

List all editor commands and a short description of each.

</dd>

<dt>-r</dt>

<dd>

Remove a key's binding.

</dd>

<dt>-s</dt>

<dd>

*`command`* is taken as a literal string and treated as terminal input when *`key`* is typed. Bound keys in *`command`* are themselves reinterpreted, and this continues for ten levels of interpretation.

</dd>

</dl>

*`command`* may be one of the commands documented in EDITOR COMMANDS below, or another key.

*`key`* and *`command`* can contain control characters of the form `^character` (e.g. `^A`), and the following backslashed escape sequences:

<dl className="variablelist">

<dt>\a</dt>

<dd>

Bell

</dd>

<dt>\b</dt>

<dd>

Backspace

</dd>

<dt>\e</dt>

<dd>

Escape

</dd>

<dt>\f</dt>

<dd>

Formfeed

</dd>

<dt>\n</dt>

<dd>

Newline

</dd>

<dt>\r</dt>

<dd>

Carriage return

</dd>

<dt>\t</dt>

<dd>

Horizontal tab

</dd>

<dt>\v</dt>

<dd>

Vertical tab

</dd>

<dt>\nnn</dt>

<dd>

The ASCII character corresponding to the octal number nnn.

</dd>

</dl>

`\' nullifies the special meaning of the following character, if it has any, notably `\' and `^'.

### G.3.2. echotc

`echotc [-sv] arg ...`

Exercise terminal capabilities given in arg .... If arg is ‘baud’, ‘cols’, ‘lines’, ‘rows’, ‘meta or’ ‘tabs’, the value of that capability is printed, with “yes” or “no” indicating that the terminal does or does not have that capability.

-s returns an emptry string for non-existent capabilities, rather than causing an error. -v causes messages to be verbose.

### G.3.3. edit

`edit [on | off]`

Enable or disable the editline functionality in a program.

### G.3.4. history

`history`

List the history.

### G.3.5. telltc

`telltc`

List the values of all the terminal capabilities (see termcap(5) ).

### G.3.6. settc

`settc cap val`

Set the terminal capability cap to val, as defined in termcap(5). No sanity checking is done.

### G.3.7. setty

`setty [-a] [-d] [-q] [-x] [+mode] [-mode] [mode]`

Control which tty modes that editrc won’t allow the user to change. -d, -q or -x tells setty to act on the ‘edit’, ‘quote’ or ‘execute’ set of tty modes respectively; defaulting to -x.

Without other arguments, setty lists the modes in the chosen set which are fixed on (‘+mode’) or off (‘-mode’). -a lists all tty modes in the chosen set regardless of the setting. With +mode, -mode or mode, fixes mode on or off or removes control of mode in the chosen set.

|     |     |     |
| --- | --- | --- |
| [Prev](libedit.editor.commands)  | [Up](libedit.php) |  [Next](disclaimer.php) |
| G.2. Editor Commands  | [Table of Contents](index) |  Appendix H. Disclaimer |
