<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $choice = $_GET['v'] ?? 'N/A';

        switch ($choice) {
            case 'N/A':
                echo "<h1><strong>Please select a country.</strong></h1>";
                break;
            case 'U':
                echo "<h1><strong>Visa required for most applicants.</strong></h1>";
                break;
            case 'C':
                echo "<h1><strong>Visa required unless you have an eTA.</strong></h1>";
                break;
            case 'I':
                echo "<h1><strong>Visa required before travel.</strong></h1>";
                break;
            case 'UK':
                echo "<h1><strong>Visa depends on the duration of stay.</strong></h1>";
                break;
            case 'AUS':
                echo "<h1><strong>eVisa available for eligible travelers.</strong></h1>";
                break;
            default:
                echo "<h1><strong>Invalid selection.</strong></h1>";
        }
    }
    ?>
</body>
</html>
