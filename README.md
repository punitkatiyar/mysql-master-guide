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

