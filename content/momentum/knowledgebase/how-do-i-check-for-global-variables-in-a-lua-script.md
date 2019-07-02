# How Do I Check for Global Variables in a Lua Script?

Lua is very permissive when it comes to undefined variables. Any variable that is not defined is implicitly considered global. This is almost never what you want, and yet it's really easy to do by just typo'ing a variable name (or for example, declaring a variable as evalBind but referencing it as evalBinding). This can result in strange unexpected behavior, where the logic of the script fails, values are missing, Nil errors crop up where they shouldn't, values get swapped between different messages, etc.

To avoid this, it's simple. You define your variables as local:

local var;
If you don't do local var, it's global. There is a way to call the command-line Lua parser to deal with this:

```
[root@localhost ~]# /opt/msys/3rdParty/bin/rcluac -p -l setbinding.lua |grep -i ETGLOBAL
1 [1] GETGLOBAL 0 -1 ; require
4 [2] GETGLOBAL 0 -1 ; require
7 [3] GETGLOBAL 0 -1 ; require
10 [4] GETGLOBAL 0 -1 ; require
13 [5] GETGLOBAL 0 -1 ; require
38 [148] GETGLOBAL 4 -29 ; msys
16 [59] GETGLOBAL 10 -8 ; msys
23 [65] GETGLOBAL 11 -8 ; msys
31 [66] GETGLOBAL 11 -8 ; msys
38 [67] GETGLOBAL 11 -17 ; string
48 [69] SETGLOBAL 11 -22 ; midSiteid
50 [70] GETGLOBAL 13 -8 ; msys
60 [74] GETGLOBAL 13 -8 ; msys
94 [96] GETGLOBAL 17 -8 ; msys
100 [100] GETGLOBAL 15 -8 ; msys
10 [118] GETGLOBAL 8 -3 ; msys
18 [125] GETGLOBAL 6 -3 ; msys
24 [127] GETGLOBAL 6 -3 ; msys
29 [127] SETGLOBAL 6 -9 ; evalBindingGrp
36 [132] GETGLOBAL 6 -9 ; evalBindingGrp
50 [143] GETGLOBAL 6 -3 ; msys
[root@localhost ~]#
```

You can ignore the msys, string and require statements (you'll also see things like 'table' and other proper external components), and you can exclude those items from the output using "grep -v msys" for example, but you will want to ensure you do not have any variables that include the word "msys" in the name). However, what jumps out here is midSiteid and evalBindingGrp. Both of those are unintentional globals. The issue is that the global variable is accessed by multiple threads at a time, so it's a classic race condition. The thread might get expected results, but it might have its value overwritten by another thread in the mean time, thus causing major problems. 

Note that sometimes global variables are fine, but that accounts for a very, very small minority of cases. They should at least be commented in the code as explicitly global and initialized as such just to make sure.