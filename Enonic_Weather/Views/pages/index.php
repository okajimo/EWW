<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Enonic weather</title>
    <link rel="icon" href="../../img/logo.png" type="image/gif" sizes="16x16">
    
    <!-- css -->
    <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../Styles/custom.css">
</head>
<body>
    <nav><?php include_once "../inc/navbar.php" ?></nav>
    <div id="main" class="container">
        
        <div id="updated">
            Siste oppdatering ble gjort: <br> 
            <strong><span id="time"></span></strong>
        </div>
        <div class="row">
            <div id="oslo" class="col-4">
                <h3>Oslo</h3>
                <div class="OsloTemp">
                    <span id="OsloTemp"></span>°C
                </div>
            </div>
            <div id="London" class="col-4">
                <h3>London</h3>
                <div class="temperatur">
                    <span id="LondonTemp"></span>°C
                </div>
            </div>
            <div id="Minsk" class="col-4">
                <h3>Minsk</h3>
                <div class="temperatur">
                    <span id="MinskTemp"></span>°C
                </div>
            </div>
        </div>
    </div>

    <footer class="bg-dark"><?php include_once "../inc/footer.php" ?></footer>
    <!-- scripts -->
    <script src="../../bower_components/moment/moment.js"></script>
    <script src="../../bower_components/jquery/dist/jquery.min.js"></script>
    <script src="../../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../../js/custom.js"></script>
    <script src="../../js/refresh.js"></script>
</body>
</html>