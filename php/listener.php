<?php
    $metodo = count($_POST) ? "POST" : "GET";
    $data = $metodo == "POST" ? $_POST : $_GET;

    $datos = $data["data"];//$datos es un objeto json
    $datos = json_decode($datos);//$datos es un objeto PHP

    $file = fopen("log.txt", "w");


    //$datos = $data["data"];
    fwrite($file, "Datos: " . implode(",",$data) . "por el metodo: " . $metodo . PHP_EOL);
      /*fwrite($file, "Matricula" . ": " . $datos->matricula . PHP_EOL);
    fwrite($file, "Alumno" . ": " . $datos->alumno . PHP_EOL);
    fwrite($file, "Semestre" . ": " . $datos->semestre . PHP_EOL);
    fwrite($file, "Programacion" . ": " . $datos->programacion . PHP_EOL);
    fwrite($file, "Matematicas" . ": " . $datos->matematicas . PHP_EOL);
    fwrite($file, "Fisica" . ": " . $datos->fisica . PHP_EOL);
    fwrite($file, "Redes" . ": " . $datos->redes . PHP_EOL);
    fwrite($file, "Investigacion" . ": " . $datos->investigacion . PHP_EOL);
  */
    // foreach ($data as $name => $valor)
    //     fwrite($file, $name . ": " . $valor . PHP_EOL);
    //($file, $data["comentario"] . PHP_EOL);
    //$comentario = $data["comentario"];
    //fwrite($file, $comentario . PHP_EOL)
    fclose($file);
    //Quitar formato JSON para convertir a objeto PHP
   // $obj = json_decode($dato);
    //Convertir a JSON
   // $obj = json_encode($dato);
    header('Location' . getenv('HTTP_REFERER'));
    ?>