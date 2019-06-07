# How do I use both Lua and Sieve simultaneously?

Unfortunately, there is no stable way to use both Lua and Sieve on the same MTA at the same time. The order in which Lua and Sieve modules are executed within each phase can vary; sometimes Lua will execute first, and other times Sieve will execute first. This can put your message in a bad state. We recommend against having both Lua and Sieve modules running at the same time.

If you currently have Sieve code and are on a version of Momentum 3.x, it is strongly suggested to convert the code to Lua and decommission the Sieve code. Lua is a full programming language and, as such, is much more powerful and flexible than Sieve.

