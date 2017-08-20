<!doctype html>
<head>
	<title>Lesson 1: Form Validation</title>
	<script src="assets/js/events.js"></script>
	<link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>

<section class="form__wrapper">
	<form action="/index.php" class="form">
		<ul class="form__error"></ul>
		<label>Name: <input type="text" class="name"></label>
		<label>Email: <input type="email" class="email"></label>
		<label>Password: <input type="password" class="password"></label>
		<label>Phone:<input type="tel" class="phonenumber"></label>
		<input type="submit" role="button" value="Opslaan" id="submit">
	</form>
</section>

</body>