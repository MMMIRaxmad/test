
let _name = document.getElementById("name");
let _number = document.getElementById("number");
let _address = document.getElementById("address");
let _form = document.getElementById("form");
let _modal = document.querySelector(".modal");
let _close_btn = document.querySelector(".x");
let _select = document.querySelector(".select");
let _razmer_size = document.querySelector(".ramer_size");
let _atvet = document.querySelector(".atvet");
let _check_item = document.querySelector(".check_item")
let _tuzi = document.querySelector(".tuzi")
let _non = document.querySelector(".non")







// let _name_error = document.querySelector(".name_error");
// let _number_error = document.querySelector(".number_error");
// let _address_error = document.querySelector(".address_error");





 _form.addEventListener("submit", (e) => {
    e.preventDefault()
   _modal.classList.add("modal_box");
 });
_close_btn.addEventListener("click", () => {
_modal.classList.remove("modal_box");
});





// let userArray = [];
// _form.addEventListener("submit", (evt) => {
//   evt.preventDefault();

//   var { user_name, user_phone, user_email, size, thikness } =
//     evt.target.elements;

//   var pizza_ar = [];
//   var price_pizza = [];

//   for (var i = 0; i < pizza.length; i++) {
//     if (_check_item[i].checked) {
//       pizza_ar.push(_check_item[i].value);
//       price_pizza.push(Number(_check_item[i].dataset.price2));
//     }
//   }

//   var arr = [];
//   var price_ar = [];
//   for (var i = 0; i < added.length; i++) {
//     if (_tuzi[i].checked) {
//       arr.push(_tuzi[i].value);
//       price_ar.push(Number(_tuzi[i].dataset.price1));
//     }
//   }
//   var arr1 = [];
//   var price_arr1 = [];
//   for (var i = 0; i < _non.length; i++) {
//     if (_non[i].checked) {
//       arr1.push(_non[i].value);
//       price_arr1.push(Number(_non[i].dataset.price));
//     }
//   }

//   var arr2 = [];
//   var price_arr2 = [];
//   for (var i = 0; i < _select.length; i++) {
//     if (_select[i].selected) {
//       arr2.push(_select[i].value);
//       price_arr2.push(Number(opt[i].dataset.price));
//     }
//   }
//   var num_one = price_pizza.map((i) => (x += i), (x = 0)).reverse()[0],
//     num_two = price_arr.map((i) => (x += i), (x = 0)).reverse()[0],
//     num_tree = price_arr2.map((i) => (x += i), (x = 0)).reverse()[0],
//     num_four = price_arr1.map((i) => (x += i), (x = 0)).reverse()[0],
//     sum = num_one + num_two + num_tree + num_four;

//   var newObj = {
//     id: userArray.length + 1,
//     name: user_name.value.trim(),
//     phone: user_phone.value.trim(),
//     email: user_email.value.trim(),
//     thick: thikness.value.trim(),
//     size: size.value.trim(),
//     on: pizza_arr.join(", "),
//     add: arr.join(", "),
//     Total: sum,
//   };
//   userArray.push(newObj);
//   renderFunction(userArray, _atvet);


  
// });



// var renderFunction = (array, element) => {
//   element.innerHTML = null;
//   for (var i = 0; i < array.length; i++) {
//     element.innerHTML += 
//     `
//             <li class="spat">
//             <p class="add">Order: ${array[i].id}</p>
//             <p class="add">User name: ${array[i].name}</p>
//             <p class="add">Phone number: ${array[i].phone}</p>
//             <p class="add">Adress: ${array[i].email}</p>
//             <p class="add">Dough thickness: ${array[i].thick}</p>
//             <p class="add">Size: ${array[i].size}</p>
//             <p class="add">On pizza: ${array[i].on}</p>
//             <p class="add">Add: ${array[i].add}</p>
            
//             <p class="add">Total: ${array[i].Total}$</p>
//             </li>
//         `;
//   }
// };











