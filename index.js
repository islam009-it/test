const list = document.querySelector('#List')
const inputs = document.querySelectorAll('input')
const add = document.querySelector('#add')
// CRUD Http methods
// C-Create
// Read-Get
// U-update
// D-Delete

const url = 'https://dummyjson.com/recipes'
async function getProducts() {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.recipes);
        showProducts(data.recipes)

    } catch (err) {
        console.log(err);

    }

}
getProducts()
function showProducts(arr) {
    for (const pr of arr) {

        list.innerHTML += `
        <li onclick="delProduсt(${pr.id})">
        <h4>${pr.name}</h4>
        <img style = "width: 200px;" src=${pr.image} />
        
        </li>
        `

    }
}
async function delProduсt(id) {
    try {
        const res = await fetch(url + '/' + id, {
            method: 'DELETE'
        })
        const data = await res.json()
        console.log(data);
        // showProducts()
        getProducts()
    }


    catch (err) {
        console.log(err);

    }
}







// async function changeProduct(id) {
//     const inputTitle = prompt("Enter title")
//     const img = prompt("Enter image url")
//     const res = await fetch(`${url}/${id}`{
//         method: "PUT",
//         headers: {
//             'content-type': 'application/json'
//         }
//         body: JSON.stringify({ title: inputTitle, image: imageUrl })
//     })
//     const data = await res.json()
//     getProducts()
// }



// async function createProduct(params) {
//     const res = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: inputs[0].value
//             price: inputs[1].value
//             image: inputs[2].value
//         })
//     })
//     const data = await res.json()
//     console.log(data);
//     getProducts()
// }
// add.onlick = () => {
//     createProduct()
// }




