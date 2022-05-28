var item, myArray;

myArray = [
  "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

document.getElementById("next").addEventListener("click", (event) => {
  item = myArray[0];
  myArray.push(item);
  let element_image = document.getElementById("image");
  element_image.setAttribute("src", myArray.shift());
});

document.getElementById("previous").addEventListener("click", (event) => {
  item = myArray.slice(-1)[0];
  myArray.unshift(item);
  let element_image2 = document.getElementById("image");
  element_image2.setAttribute("src", myArray.pop());
});
