# mysql-master-guide
PHP with my sql database 

```
<?php
// make connection
// database function mysqli_connect()
// parameter : 4

$hostName="localhost";
$userName="root";
$userPass='';
$dbName="contact-app";

mysqli_connect("localhost","root","","contact-app");

mysqli_connect($hostName,$userName,$userPass,$dbName);

?>
```

# Insert Query

```
INSERT INTO `classRoom` (`id`, `firstName`, `lastName`, `mobile`, `email`, `course`)
VALUES (NULL, 'Punit', 'Katiyar', '0000000000', 'punit@techunitbook.com', 'PHP Full stack');
```

