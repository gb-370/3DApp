<?php
    include '../../debug/ChromePhp.php';
    ChromePhp::log('modelDrinkDetails.php: Hello World');
    ChromePhp::log($_SERVER);

    ChromePhp::warn('modelDrinkDetails.php: Get Brand details');
    $brandName = $_GET['brand'];

    ChromePhp::warn('modelDrinksDetails.php: Make a connection to test1.db');

    try{
        $dbhandle = new PDO('sqlite:../../db/test1.db', 'user', 'password', array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        ));

        ChromePhp::warn('modelDrinkDetails.php: Connected to test1.db');

        ChromePhp::warn('modelDrinkDetails.php: Prepare PDO SQL statement');
        $sql = 'SELECT * FROM Model_3D WHERE brand = "'. $brandName. '"';
        ChromePhp::warn($stmt);

        $result = null;

        $i=0;

        while($data = $stmt->fetch()){
            ChromePhp::warn('modelDrinkDetails.php:PDO fetch() data from test1.db');
            ChromePhp::warn($data);

            $result[$i]['brand'] = $data['brand'];
            $result[$i]['x3dModelTitle'] = $data['x3dModelTitle'];
            $result[$i]['x3dCreationMethod'] = $data['x3dCreationMethod'];
            $result[$i]['modelTitle'] = $data['modelTitle'];
            $result[$i]['modelSubtitle'] = $data['modelSubtitle'];
            $result[$i]['modelDescription'] = $data['modelDescription'];

            $i++;
            ChromePhp::warn('modelDrinkDetails.php: Here is the test1.db data');
            ChromePhp::warn($result);
        }
    }

    catch(PDOEXception $e){
        ChromePhp::warn('modelDrinkDetails.php: Code error on server?');
        print new Exception($e->getMessage());
    }

    $dbhandle = NULL;
    ChromePhp::warn('modelDrinkDetails.php: echo result to frontend in JSON packet');
    ChromePhp::warn($result);
    echo json_encode($result);
?>