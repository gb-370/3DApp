<script type='text/javascript' src='https://www.x3dom.org/download/x3dom.js'> </script>
<link rel='stylesheet' type='text/css' href='https://www.x3dom.org/download/x3dom.css'/>

<div class="card-title drinksText">
    <h2><?php echo $data[0]['x3dModelTitle'] ?></h2>
</div>
<div class="model3D">
    <x3d>
        <scene>
            <Inline nameSpaceName="model" mapDEFToID="true" onclick='animateModel("x");' url="assets/X3D/<?php echo $data[0]['modelLocation'] ?>"/>
        </scene>
    </x3d>
</div>
<div class="card-text drinksText">
    <p><?php echo $data[0]['x3dCreationMethod'] ?></p>
</div>