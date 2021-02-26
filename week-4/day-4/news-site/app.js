//Version 2 - somehow version 1 never got uploaded to GH and then got deleted in my local??

let allNewsUL = document.getElementById("allNewsUL")

function nullCheck (label) {
    if (label == null) {
        return label = ""
    }
    else {
        return label
    }
}

for (let index = 0; index < news.articles.length; index++) {
    let story = news.articles[index]  
    let storyItem = `
                        <li>
                            <h3><b><a href = "${story.url}">${story.title}</a></b></h3>
                            <p>${nullCheck(story.author)}</p>
                            <p><img src="${story.urlToImage}" width="200px" height = "150px" /></p>
                            <p><i>${nullCheck(story.description)}</i></p>
                            <p>Published: ${story.publishedAt}</p>
                        </li>
                        <br>
                        `
    allNewsUL.insertAdjacentHTML('beforeend', storyItem)
}

// const startersUL = document.getElementById("startersUL")
// const entreesUL = document.getElementById("entreesUL")
// const dessertsUL = document.getElementById("dessertsUL")
// const btnAll = document.getElementById("btnAll");
// const btnStarters = document.getElementById("btnStarters");
// const btnEntrees = document.getElementById("btnEntrees");
// const btnDesserts = document.getElementById("btnDesserts");

// const starters = dishes.filter(function(dish) {
//     return dish.course == "Starters"
// })

// const entrees = dishes.filter(function(dish) {
//     return dish.course == "Entrees"
// })

// const desserts = dishes.filter(function(dish) {
//     return dish.course == "Desserts"
// })

// const all = dishes.filter(function(dish) {
//     return dish.title
// })


// // To have all dishes visible on initial page load:
// for (let index = 0; index < dishes.length; index++) {
//     let dish = dishes[index]  
//     let dishItem = `
//                         <li>
//                             <h3><b>${dish.title}</b>&nbsp&nbsp&nbsp&nbsp$${dish.price}&nbsp&nbsp</h3>
//                             <p><img src="${dish.imageURL}" width="200px" height = "150px" /></p>
//                             <p><i>${dish.description}</i></p>
//                         </li>
//                         <br>
//                         `
//     allDishesUL.insertAdjacentHTML('beforeend', dishItem)
// }


// btnStarters.addEventListener("click", function() {
//     allDishesUL.innerHTML = ''
//     startersUL.innerHTML = ''
//     entreesUL.innerHTML = ''
//     dessertsUL.innerHTML = ''
//     for (let index = 0; index < starters.length; index++) {
//         let starter = starters[index]  
//         let starterItem = `
//                             <li>
//                                 <h3><b>${starter.title}</b>&nbsp&nbsp&nbsp&nbsp$${starter.price}</h3>
//                                 <p><img src="${starter.imageURL}" width = "200px" height = "150px" /></p>
//                                 <p><i>${starter.description}</i></p>
//                             </li>
//                             <br>
//                             `
//         startersUL.insertAdjacentHTML('beforeend', starterItem)
//     }
// })  

// btnEntrees.addEventListener("click", function() {
//     allDishesUL.innerHTML = ''
//     startersUL.innerHTML = ''
//     entreesUL.innerHTML = ''
//     dessertsUL.innerHTML = ''
//     for (let index = 0; index < entrees.length; index++) {
//         let entree = entrees[index]  
//         let entreeItem = `
//                             <li>
//                                 <h3><b>${entree.title}</b>&nbsp&nbsp&nbsp&nbsp$${entree.price}</h3>
//                                 <p><img src="${entree.imageURL}" width="200px" height = "150px" /></p>
//                                 <p><i>${entree.description}</i></p>
//                             </li>
//                             <br>
//                             `
//         entreesUL.insertAdjacentHTML('beforeend', entreeItem)
//     }
// })  

// btnDesserts.addEventListener("click", function() {
//     allDishesUL.innerHTML = ''
//     startersUL.innerHTML = ''
//     entreesUL.innerHTML = ''
//     dessertsUL.innerHTML = ''
//     for (let index = 0; index < desserts.length; index++) {
//         let dessert = desserts[index]  
//         let dessertItem = `
//                             <li>
//                                 <h3><b>${dessert.title}</b>&nbsp&nbsp&nbsp&nbsp$${dessert.price}</h3>
//                                 <p><img src="${dessert.imageURL}" width ="200px" height = "150px" /></p>
//                                 <p><i>${dessert.description}</i></p>
//                             </li>
//                             <br>
//                             `
//         dessertsUL.insertAdjacentHTML('beforeend', dessertItem)
//     }
// })  

// btnAll.addEventListener("click", function() {
//     allDishesUL.innerHTML = ''
//     startersUL.innerHTML = ''
//     entreesUL.innerHTML = ''
//     dessertsUL.innerHTML = ''
//     for (let index = 0; index < dishes.length; index++) {
//         let dish = dishes[index]  
//         let dishItem = `
//                         <li>
//                             <h3><b>${dish.title}</b>&nbsp&nbsp&nbsp&nbsp$${dish.price}</h3>
//                             <p><img src="${dish.imageURL}" width = "200px" height = "150px" /></p>
//                             <p><i>${dish.description}</i></p>
//                         </li>
//                             <br>
//                             `
//         allDishesUL.insertAdjacentHTML('beforeend', dishItem)
//     }
// })  