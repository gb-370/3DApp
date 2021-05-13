var counter = 0;

$(document).ready(function() {

    selectPage();
    selectModel();

    function selectPage() {

        $('#home').show();
        $('#about').hide();
        $('#SOO').hide();
        $('#ref').hide();
        $('#models').hide();
        $('#x3dContainer').hide();
        $('#interaction').hide();
        $('#cokeDescription').hide();
        $('#spriteDescription').hide(); 
        $('#pepperDescription').hide(); 


        $('#navHome').click(function(){
            $('#home').show();
            $('#about').hide();
            $('#SOO').hide();
            $('#ref').hide();
            $('#models').hide();
            $('#interaction').hide();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide(); 
            $('#pepperDescription').hide();
        });

        $('#navAbout').click(function(){
            $('#home').hide();
            $('#about').show();
            $('#SOO').hide();
            $('#ref').hide();
            $('#models').hide();
            $('#interaction').hide();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide(); 
            $('#pepperDescription').hide();
        });

        $('#link_SOO').click(function(){
            $('#home').hide();
            $('#about').hide();
            $('#SOO').show();
            $('#ref').hide();
            $('#models').hide();
            $('#interaction').hide();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide(); 
            $('#pepperDescription').hide();
        });

        $('#link_ref').click(function(){
            $('#home').hide();
            $('#about').hide();
            $('#SOO').hide();
            $('#ref').show();
            $('#models').hide();
            $('#interaction').hide();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide(); 
            $('#pepperDescription').hide();
        });

        $('#navModels').click(function(){
            $('#home').hide();
            $('#about').hide();
            $('#SOO').hide();
            $('#ref').hide();
            $('#models').show();
            $('#x3dContainer').show();
            $('#x3dContainer').load('./scripts/php/index.php/apiGetDataCoke');
            $('#interaction').show(); 
            $('#cokeDescription').show();
            $('#spriteDescription').hide(); 
            $('#pepperDescription').hide(); 
        });
    }

    function selectModel() {

        $('#navCoke').click(function(){
           $('#x3dContainer').load('./scripts/php/index.php/apiGetDataCoke'); 
        });

        $('#navSprite').click(function(){
            $('#x3dContainer').load('./scripts/php/index.php/apiGetDataSprite');
        });

        $('#navPepper').click(function(){
            $('#x3dContainer').load('./scripts/php/index.php/apiGetDataPepper');
        });
    }

});

function changeLook(){
    counter += 1;
    switch(counter){
        case 1:
            document.getElementById('body').style.backgroundColor = 'lightblue';
            document.getElementById('header').style.backgroundColor = '#FF0000';
            document.getElementById('footer').style.backgroundColor = '#FF9900';
            break;
        case 2:
            document.getElementById('body').style.backgroundColor = '#FF6600';
            document.getElementById('header').style.backgroundColor = '#FF9999';
            document.getElementById('footer').style.backgroundColor = '#996699';
            break;
        case 3:
            document.getElementById('body').style.backgroundColor = 'coral';
            document.getElementById('header').style.backgroundColor = 'darkcyan';
            document.getElementById('footer').style.backgroundColor = 'darksalmon';
            break;
        case 4:
            counter = 0;
            document.getElementById('body').style.backgroundColor = 'lightgray';
            document.getElementById('header').style.backgroundColor = 'chocolate';
            document.getElementById('footer').style.backgroundColor = 'dimgrey';
            break;

    }
}

function changeBack(){
    document.getElementById('body').style.backgroundColor = '#FFFFFF';
    document.getElementById('header').style.backgroundColor = 'rbga(175, 0, 0, 1)';
    document.getElementById('footer').style.backgroundColor = 'rbga(175, 0, 0, 1)';
}