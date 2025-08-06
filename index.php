<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JS - Address Book</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>
body {
font-family: 'Inter', sans-serif;
}
.contact-card {
transition: all 0.3s ease;
}
.contact-card:hover {
transform: translateY(-2px);
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
</head>
<body class="bg-gray-100 min-h-screen">
<div class="container mx-auto p-6">
<h1 class="text-3xl font-bold text-gray-800 mb-6">Address Book</h1>
<!-- Add/Edit Contact Form -->
<div class="bg-white rounded-lg shadow-md p-6 mb-6">
<h2 class="text-xl font-semibold mb-4">Add New Contact</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<input id="name" type="text" placeholder="Name" class="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
<input id="email" type="email" placeholder="Email" class="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
<input id="phone" type="tel" placeholder="Phone" class="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
<input id="address" type="text" placeholder="Address" class="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
</div>
<button id="addContact" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add Contact</button>
<button id="updateContact" class="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 hidden">Update Contact</button>
<button id="cancelEdit" class="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 hidden">Cancel</button>
</div>
<!-- Search Bar -->
<div class="mb-6">
<input id="search" type="text" placeholder="Search contacts..." class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
</div>
<!-- Contact List -->
<div id="contactList" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
</div>
<script src="assets/addressbook.js"></script>
</body>
</html>