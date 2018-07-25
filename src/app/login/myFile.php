<?php
    $nameFile = fopen("testFile.php", "w") or die("Unable to open file!");
    $txt = uName + "\n";
        fwrite($nameFile, $txt);
    $txt = pWord + "\n";  
        fwrite($nameFile, $txt);
        fclose($nameFile);
?>