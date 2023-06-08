<?php
	$SITE_TITLE = 'InnaMorrata';
	$SITE_DESCR = '';

	if ( isset($_POST) ) {
		$name = htmlspecialchars(trim($_POST['name']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$size = htmlspecialchars(trim($_POST['size']));
		$type = htmlspecialchars(trim($_POST['type']));

		$option_one = htmlspecialchars(trim($_POST['option_one']));
		$option_two = htmlspecialchars(trim($_POST['option_two']));
		$option_three = htmlspecialchars(trim($_POST['option_three']));
		$option_four = htmlspecialchars(trim($_POST['option_four']));
		$option_five = htmlspecialchars(trim($_POST['option_five']));

		$subject = $_POST['subject'] ? htmlspecialchars(trim($_POST['subject'])) : '';
		$comment = isset($_POST['comment']) ? htmlspecialchars(trim($_POST['comment'])) : '';
		$question = isset($_POST['question']) ? htmlspecialchars(trim($_POST['question'])) : '';
		$to = 'mail@innamorata.by';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1>";
		$data .= 'Имя: '.$name."<br>";
		$data .= 'Телефон: '.$phone."<br>";

		if ( $size != '' ) {
			$data .= 'Pазмер: ' . $size ."<br>";
		}
		
		if ( $type != '' ) {
			$data .= 'Тип: ' . $type ."<br>";
		}

		if ( $option_one != '' ) {
			$data .= 'Дополнительные опции: ' . $option_one ."<br>";
		}


		if ( $option_two != '' ) {
			$data .= 'Дополнительные опции: ' . $option_two ."<br>";
		}


		if ( $option_three != '' ) {
			$data .= 'Дополнительные опции: ' . $option_three ."<br>";
		}


		if ( $option_four != '' ) {
			$data .= 'Дополнительные опции: ' . $option_four ."<br>";
		}


		if ( $option_five != '' ) {
			$data .= 'Дополнительные опции: ' . $option_five ."<br>";
		}


		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();
?>