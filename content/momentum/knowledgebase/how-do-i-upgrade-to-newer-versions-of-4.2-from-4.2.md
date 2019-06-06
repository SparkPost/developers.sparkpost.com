# How Do I Upgrade to Newer Versions of 4.2 from 4.2?

As new versions for 4.2 comes out, you will want to upgrade but the release notes and the documentation can be vague about what this process will look like. Once you download the bundle you want to upgrade to, follow these instructions to update your 4.2 instance:

1. Untar/unzip the bundle.

	*tar -xvzf momentum-bundle-4.2.1.50062.rhel6.x86_64.tar.gz*

2. Change to the bundle directory.

	*cd momentum-4.2.1.50062*

3. Add the local yum repository to upgrade Momentum.

	*./setrepodir -i*

4. Run the upgrade

	*yum –disablerepo=* --enablerepo=momentum upgrade*
