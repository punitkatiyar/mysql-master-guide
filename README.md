# mysql-master-guide

> create database myapp;

> show databases;

> use myapp;

> create table users (uid int primary key auto_increment,name varchar(50) not null, email varchar(255) not null );

> desc users;

> show tables;

> select * from users;






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

