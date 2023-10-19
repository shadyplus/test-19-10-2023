<?php

        $apiKey = 'AhXrUun1vqMN0IfZ5goqc8eybmJNtqqvR0K1W';
        $offer_id = 9793; // для каждого оффера свой айди, надо уточнять его в админке или у суппортов
        $stream_hid = 'EZyFO7Wb'; // не обязательное, если указано, заявка будет привязана к потоку
        $apiUrl = 'http://api.cpa.tl/api/lead/send';

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $data_post = $_POST;
        if (isset($data_post['phone']) and ($data_post['phone'] !== '') ) {
            $data = array(
                    'key' => $apiKey,
                    'id' => microtime(true), // тут лучше вставить значение, по которому вы сможете идентифицировать свой лид; можно оставить microtime если у вас нет своей crm
                    'offer_id' => $offer_id,
                    'stream_hid' => $stream_hid,
                    'name' => $data_post['name'],
                    'phone' => $data_post['phone'],
					'email' => $data_post['email'],
                    'comments' => $data_post['comments'],
                    'country' => 'DZ', // формат ISO 3166-1 Alpha-2 - https://ru.wikipedia.org/wiki/ISO_3166-1
                    'address' => $data_post['address'],
                    'tz' => $data_post['timezone_int'], // очень желательно получать его с ленда, но если никак лучше оставить пустым или 3 (таймзона мск)
                   // 'web_id' => '',
                    'ip_address' => $_SERVER['REMOTE_ADDR'],
                    'user_agent' => $_SERVER['HTTP_USER_AGENT'],
					'utm_source' => $data_post['sub1'],
                    'utm_medium' => $data_post['sub2'],
                    'utm_campaign' => $data_post['sub3'],
                    'utm_content' => $data_post['utm_content'],
                    'utm_term' => $data_post['utm_term'],
					'sub1' => $data_post['subid'],
					//'sub2' => '',
					//'sub3' => '',
            );

            $options = array(
                    'http' => array(
                        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                        'method' => 'POST',
                        'content' => http_build_query($data),
                    )
            );

            $context = stream_context_create($options);
            $result = file_get_contents($apiUrl, false, $context);
 
            $obj = json_decode($result);
 
            if (null === $obj) {
                    // Ошибка в полученном ответе
                    print("Invalid JSON");
                } else if (!empty($obj->errmsg)) {
                    // Ошибка в отправленом запросе
                    print("Error: " . $jsonObj->errmsg);
                } else {
                   // print('ID заявки: ' . $obj->id);
					header('Location: ok.php');
            } 
			
	} else {
	echo 'Ошибка 2!';
}
}
