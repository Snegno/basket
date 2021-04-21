<?php 

$name = $_POST['name'];

$email = $_POST['email'];

$phone = $_POST['phone'];

//необходимые фильтры:
//преобразует все символы, которые пользователь попытается добавить в форму
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);

//функция декодирует url, если пользователь попытается его добавить в форму.
$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);
//Третей функцией мы удалим пробелы с начала и конца строки, если таковые имеются:
$name = trim($name);
$email = trim($email);
$phone = trim($phone);

/*Проверка данных, передаваемых от HTML формы в файл PHP

Для того, чтобы проверить, работает ли этот код, передаются ли данные можно просто их вывести на экран при помощи функции echo:*/

echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $phone;







 ?>