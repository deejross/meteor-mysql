meteor-mysql
============

Latest version of felixge's node-mysql NPM module packaged for Meteor<br>
https://github.com/felixge/node-mysql

The version of this package will match the version of node-mysql in NPM that this package requires for easier identification of the version of node-mysql that is being used.

Installation
------------
```
meteor add deejross:mysql
```

OR install the package manually if (like me) you can't use ```meteor add```.

```
mkdir packages
cd packages
git clone https://github.com/deejross/meteor-mysql.git
cd ..
meteor add deejross:meteor-mysql
```

Usage
-----

This is a simple wrapper around the NPM module. Follow the module's documentation for usage in Meteor, ignoring any ```var mysql = require('mysql')``` lines you see.
