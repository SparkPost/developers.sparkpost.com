| [Prev](postgresql.server)  | Chapter 29. PostgreSQL |  [Next](postgresql.migrating) |

## 29.3. Using the PostgreSQL Client Program

<a class="indexterm" name="idp3961632"></a>

The PostgreSQL client program `psql` enables you to inspect the PostgreSQL database installed by Momentum.

To use this program, do the following:

1.  Log in as the `ecuser` user, which was created during installation.

2.  Start the PostgreSQL client by issuing the command

    `shell> /opt/msys/3rdParty/bin/psql ecelerity ecuser`

    PostgreSQL is configured to run on the default port, 5432, so there is no need to specify a port when running the PostgreSQL client.

### Warning

We strongly advise against building applications to interface with our database and make no guarantees that the database will remain the same between minor revisions of the product.

Additionally, applications that interface directly may be incompatible with future upgrades to the version of PostgreSQL used with Momentum.

| [Prev](postgresql.server)  | [Up](postgresql) |  [Next](postgresql.migrating) |
| 29.2. Running the PostgreSQL Server  | [Table of Contents](index) |  29.4. Dumping and Restoring the Database |

