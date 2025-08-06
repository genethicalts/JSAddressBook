class AddressBook {
constructor() {
this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
this.editIndex = null;
this.init();
}

init() {
this.renderContacts();
this.bindEvents();
}

bindEvents() {
document.getElementById('addContact').addEventListener('click', () => this.addContact());
document.getElementById('updateContact').addEventListener('click', () => this.updateContact());
document.getElementById('cancelEdit').addEventListener('click', () => this.cancelEdit());
document.getElementById('search').addEventListener('input', (e) => this.searchContacts(e.target.value));
}

addContact() {
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const address = document.getElementById('address').value.trim();

if (name && email && phone && address) {
this.contacts.push({ name, email, phone, address });
this.saveContacts();
this.renderContacts();
this.clearForm();
} else {
alert('Please fill in all fields');
}
}

updateContact() {
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const address = document.getElementById('address').value.trim();

if (name && email && phone && address) {
this.contacts[this.editIndex] = { name, email, phone, address };
this.saveContacts();
this.renderContacts();
this.clearForm();
this.editIndex = null;
document.getElementById('addContact').classList.remove('hidden');
document.getElementById('updateContact').classList.add('hidden');
document.getElementById('cancelEdit').classList.add('hidden');
} else {
alert('Please fill in all fields');
}
}

cancelEdit() {
this.clearForm();
this.editIndex = null;
document.getElementById('addContact').classList.remove('hidden');
document.getElementById('updateContact').classList.add('hidden');
document.getElementById('cancelEdit').classList.add('hidden');
}

editContact(index) {
this.editIndex = index;
const contact = this.contacts[index];
document.getElementById('name').value = contact.name;
document.getElementById('email').value = contact.email;
document.getElementById('phone').value = contact.phone;
document.getElementById('address').value = contact.address;
document.getElementById('addContact').classList.add('hidden');
document.getElementById('updateContact').classList.remove('hidden');
document.getElementById('cancelEdit').classList.remove('hidden');
}

deleteContact(index) {
if (confirm('Are you sure you want to delete this contact?')) {
this.contacts.splice(index, 1);
this.saveContacts();
this.renderContacts();
}
}

searchContacts(query) {
const filteredContacts = this.contacts.filter(contact =>
contact.name.toLowerCase().includes(query.toLowerCase()) ||
contact.email.toLowerCase().includes(query.toLowerCase()) ||
contact.phone.includes(query) ||
contact.address.toLowerCase().includes(query.toLowerCase())
);
this.renderContacts(filteredContacts);
}

saveContacts() {
localStorage.setItem('contacts', JSON.stringify(this.contacts));
}

clearForm() {
document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('phone').value = '';
document.getElementById('address').value = '';
}

renderContacts(contacts = this.contacts) {
const contactList = document.getElementById('contactList');
contactList.innerHTML = '';
contacts.forEach((contact, index) => {
const card = document.createElement('div');
card.className = 'contact-card bg-white rounded-lg shadow-md p-4';
card.innerHTML = `
<h3 class="text-lg font-semibold text-gray-800">${contact.name}</h3>
<p class="text-gray-600"><strong>Email:</strong> ${contact.email}</p>
<p class="text-gray-600"><strong>Phone:</strong> ${contact.phone}</p>
<p class="text-gray-600"><strong>Address:</strong> ${contact.address}</p>
<div class="mt-4 flex space-x-2">
<button class="edit-btn bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600" data-index="${index}">Edit</button>
<button class="delete-btn bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600" data-index="${index}">Delete</button>
</div>
`;
contactList.appendChild(card);
});

document.querySelectorAll('.edit-btn').forEach(btn => {
btn.addEventListener('click', (e) => this.editContact(e.target.dataset.index));
});
document.querySelectorAll('.delete-btn').forEach(btn => {
btn.addEventListener('click', (e) => this.deleteContact(e.target.dataset.index));
});
}
}
const addressBook = new AddressBook();