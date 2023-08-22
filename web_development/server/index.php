<?php
   // php -S localhost:8000



    // $request = $_SERVER['REQUEST_URI'];
    // $viewDir = '/views/';
    
    // switch ($request) {
    //     case '':
    //     case '/':
    //         require __DIR__ . $viewDir . 'home.php';
    //         break;
    
    //     case '/views/users':
    //         require __DIR__ . $viewDir . 'users.php';
    //         break;
    
    //     case '/contact':
    //         require __DIR__ . $viewDir . 'contact.php';
    //         break;
    
    //     default:
    //         http_response_code(404);
    //         require __DIR__ . $viewDir . '404.php';
    // }

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }

    $response = (object) ["euae" => "tu ae"];
    echo json_encode($response);
?>
