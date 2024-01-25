import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contacts(props) {
  let listrows = [];
  props.contacts.forEach(contact => {
    listrows.push(
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{contact.name}</h4>
          <h5 class="card-subtitle">{contact.email}</h5>
          <p class="card-text">{contact.company.catchPhrase}</p>
        </div>
      </div>
    )
  })

  return (
    <div>
      <h1>Contact List</h1>
      <div className="contactLists">
        { listrows }
      </div>
    </div>    
  )
}

export default Contacts;
