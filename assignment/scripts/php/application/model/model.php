<?php
class Model {
    public $dbhandle;

    public function __construct(){
        $dsn = 'sqlite:./db/test1.db';

        try{
            $this->dbhandle = new PDO($dsn, 'user', 'password', array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false,));
    
        } catch (PDOEXception $e){
            echo "I'm sorry. I'm afraid I can't connect to the database!";
            // Generate an error message if the connection fails
            print new Exception($e->getMessage());
        }
    }

    function dbCreateTable() {
        try{
            $this->dbhandle->exec("CREATE TABLE Model_Data (Id INTEGER PRIMARY KEY, x3dModelTitle TEXT,
            x3dCreationMethod TEXT, modelLocation TEXT)");
            return "Model_3D table is successfully created inside test1.db file";
        }
        catch (PD0EXception $e){
            print new Exception($e->getMessage());
        }
        $this->dbhandle = NULL;
    }

    function dbInsertData(){
        try{
            $this->dbhandle->exec(
                "INSERT INTO Model_Data (Id, x3dModelTitle, x3dCreationMethod, modelLocation)
                    VALUES (1, 'Coca Cola X3D Model', 'This X3D model of the Coke bottle, has been created in 3ds Max, exported to VRML97 and converted, using the instantreality transcoders to X3D for dislapy online.', 'Coke.x3d');".
                "INSERT INTO Model_Data (Id, x3dModelTitle, x3dCreationMethod, modelLocation)
                    VALUES (2, 'Sprite X3D Model', 'This X3D model of the Sprite cup, has been created in 3ds Max, exported to VRML97 and converted, using the instantreality transcoders to X3D for dislapy online.', 'Sprite.x3d');".
                "INSERT INTO Model_Data (Id, x3dModelTitle, x3dCreationMethod, modelLocation)
                    VALUES (3, 'Dr Pepper X3D Model', 'This X3D model of the Dr Pepper can, has been created in 3ds Max, exported to VRML97 and converted, using the instantreality transcoders to X3D for dislapy online.', 'DrPepper.x3d');");
                    return "X3D Model data inserted successfully inside test1.db";
        }catch(PD0EXception $e) {
            print new Exception($e->getMessage());
        }
        $this->dbhandle = NULL;
    }

    function dbGetData($load){
        try{
            $sql = 'SELECT * FROM Model_Data WHERE Id = "'.$load.'"';

            $stmt = $this->dbhandle->query($sql);

            $result = null;

            $i = -0;

            while ($data = $stmt->fetch()){
                $result[$i]['x3dModelTitle'] = $data['x3dModelTitle'];
                $result[$i]['x3dCreationMethod'] = $data['x3dCreationMethod'];
                $result[$i]['modelLocation'] = $data['modelLocation'];
                $i++;
            }
        }catch(PD0EXception $e){
            print new Exception($e->getMessage());
        }
        $this->dbhandle = NULL;
        return $result;
    }
}
?>