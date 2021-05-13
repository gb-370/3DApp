var spinning = false;

function spin(rot)
{
    var timer = 'model__RotationTimer_' + rot;
    spinning = !spinning;
    document.getElementById(timer).setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
    spinning = false;
    document.getElementById('model__RotationTimer_x').setAttribute('enabled', spinning.toString());
    document.getElementById('model__RotationTimer_y').setAttribute('enabled', spinning.toString());
    document.getElementById('model__RotationTimer_z').setAttribute('enabled', spinning.toString());
}

function animateModel(rot)
{
    var timer = 'model__RotationTimer_' + rot;
    if(document.getElementById(timer).getAttribute('enabled')!= 'true')
        document.getElementById(timer).setAttribute('enabled', 'true');
    else
        document.getElementById(timer).setAttribute('enabled', 'false');
}

function wireframe()
{
    var e = document.getElementById('model');
    e.runtime.togglePoints(true);
    e.runtime.togglePoints(true);
}

var lightOn = true;

function headlight()
{
    lightOn = !lightOn;
    document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
}

function cameraFront()
{
    document.getElementById('model__CameraFront').setAttribute('bind', 'true');
}

function cameraBack()
{
    document.getElementById('model__CameraBack').setAttribute('bind', 'true');
}

function cameraLeft()
{
    document.getElementById('model__CameraLeft').setAttribute('bind', 'true');
}

function cameraRight()
{
    document.getElementById('model__CameraRight').setAttribute('bind', 'true');
}

function cameraTop()
{
    document.getElementById('model__CameraTop').setAttribute('bind', 'true');
}

function cameraBottom()
{
    document.getElementById('model__CameraBottom').setAttribute('bind', 'true');
}