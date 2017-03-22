/**
 * Created by ekoodi on 15/03/2017.
 */

var contacts = [];

function fullAddress(contact) {
    return contact.StreetAddress+', '+contact.City;
}

function saveContact() {

    var contact = new Object();
    contact.FirstName = $('#first_name').val();
    contact.LastName = $('#last_name').val();
    contact.StreetAddress = $('#address').val();
    contact.Phone = $('#phone').val();
    contact.City = $('#city').val();

    var index = $('#index').val();
    if (index < 0) {
        contacts.push(contact);
        $.ajax("http://localhost:50172/api/contacts",
            {
                method: "POST",
                contentType : 'application/json',
                data: JSON.stringify(contact)
            });
    } else {
        contact.OriginalFirstName = contacts[index].FirstName;
        contact.OriginalLastName = contacts[index].LastName;

        $.ajax("http://localhost:50172/api/contacts",
            {
                method: "PUT",
                contentType : 'application/json',
                data: JSON.stringify(contact)
            });

        contacts[index] = contact;
        $('#index').val(-1);
        $('#save').html('Add Contact');
        $('#formheader').html('New Contact');
    }

    showContacts(contacts);

    $('#first_name').val('');
    $('#last_name').val('');
    $('#address').val('');
    $('#phone').val('');
    $('#city').val('');
}

function showContacts(all_contacts) {
    var tbody = $('#contacts');
    tbody.empty();
    all_contacts.forEach(function(contact, ind) {
        var values = [contact.FirstName, contact.LastName, contact.Phone];
        var tr = $('<tr></tr>');
        values.forEach(function(value) {
            tr.append($('<td></td>').text(value));
        });

        var link = $('<a></a>');
        link.attr('target','_new');
        link.attr('href','https://www.google.fi/maps/place/'+fullAddress(contact));
        link.text(fullAddress(contact));
        var td = $('<td></td>');
        td.html(link);
        tr.append(td);

        td = $('<td></td>');
        var button_mod = $('<button onclick="editContact('+ind+')">Modify</button>');
        td.append(button_mod);
        var button_del = $('<button onclick="deleteContact('+ind+')">Delete</button>');
        td.append(button_del);
        tr.append(td);

        tbody.append(tr);
    });
}

function editContact(ind) {
    var contact = contacts[ind];
    $('#first_name').val(contact.FirstName);
    $('#last_name').val(contact.LastName);
    $('#address').val(contact.StreetAddress);
    $('#phone').val(contact.Phone);
    $('#city').val(contact.City);
    $('#index').val(ind);
    $('#formheader').html('Edit Contact');
    $('#save').html('Save Contact');
}

function deleteContact(ind) {
    var contact = contacts[ind];

    if (confirm('Ok to remove ' + contact.FirstName + ' ' + contact.LastName + ' ?')) {
        contacts.splice(ind, 1);

        $.ajax("http://localhost:50172/api/contacts",
            {
                method: "DELETE",
                contentType : 'application/json',
                data: JSON.stringify(contact)
        });

        showContacts(contacts);
    }
}

/*
 function loadContacts() {
    contacts = contactsApp.storage.loadContacts();
    showContacts();
}
*/

function loadContacts() {

$.getJSON("http://localhost:50172/api/contacts",
    function (data) {
        contacts = data;
        showContacts(data)
        });

}

