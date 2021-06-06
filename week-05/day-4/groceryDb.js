const addStoreTextBox = document.getElementById("addStoreTextBox")
const deleteStoreTextBox = document.getElementById("deleteStoreTextBox")
const itemTextBox = document.getElementById("itemTextBox")
const btnAddStore = document.getElementById("btnAddStore")
const btnDeleteStore = document.getElementById("btnDeleteStore")
const btnViewStores = document.getElementById("btnViewStores")
const btnViewToDelete = document.getElementById("btnViewToDelete")
const btnAddItems = document.getElementById("btnAddItems")
const movieUL = document.getElementById("movieUL")
const storeUL = document.getElementById("storeUL")
const itemsUL = document.getElementById("itemsUL")
const storeDIV = document.getElementById("storeDIV")

// View current list of stores on button click
btnViewStores.addEventListener("click", function() {
  getAllStores()
})

btnViewToDelete.addEventListener("click", function() {
  getAllStores()
})


// Add a store and see updated list of stores on button click
btnAddStore.addEventListener("click", function() {
  const name = addStoreTextBox.value

  db.collection("stores")
  .add({
      name,
  }).then(function(DocRef) {
    getAllStores()
  })
  addStoreTextBox.value = ""
})


// Display refreshed list of stores when called
function getAllStores() {
    storeUL.innerHTML = ""
    db.collection("stores")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {            
            let data = doc.data()
            let storeItem = `<li>
                                <b>${data.name}</b>&nbsp;&nbsp;
                                <button class="button" onclick="deleteStore('${doc.id}')">Delete Store</button><p>
                                <ul id="itemsUL"></ul>
                                </li>`
            storeUL.insertAdjacentHTML('beforeend', storeItem)
        })
      })
    
}


// Delete a store and see updated list of stores on button click
function deleteStore(documentId) {
  db.collection("stores")
    .doc(documentId)
    .delete()
    .then(()=> {
      getAllStores()
    })
}



//All code below is related to the half-baked/unfinished attempt to add items to stores


//Version of getAllStores that includes "Add Items" button


//function getAllStores() {
//   storeUL.innerHTML = ""
//   db.collection("stores")
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {            
//           let data = doc.data()
//           console.log(data)
//           let storeItem = `<li>
//                               <b>${data.name}</b>&nbsp;&nbsp;
//                               <button class="button" onclick="createItemEntryField('${data.name}','${doc.id}')">Add Items</button>&nbsp;&nbsp;
//                               <button class="button" onclick="deleteStore('${doc.id}')">Delete Store</button><p>
//                               <ul id="itemsUL"></ul>
//                               </li>`
//           storeUL.insertAdjacentHTML('beforeend', storeItem)
//       })
//     })
// }




// Create HTML fields for item entry upon "Add Items" button click


// function createItemEntryField(store, documentId) {
//   console.log(store)
//   console.log(documentId)
  
//   let itemEntryField = `<h4>Items to Add to ${store} List:</h4>
//                   <input type="text" id="itemTextBox" placeholder="Item" />
//                   <button class="button" id="btnAddItems" onclick="addItems('${documentId}')">Save</button>`
//   itemsUL.insertAdjacentHTML('beforeend', itemEntryField)
// }  
 


// Add items to store  


// function addItems(documentId, item) {
//   console.log(item)  
// }

