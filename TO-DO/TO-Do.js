$("#btn").click(function () {
  let task = $("#input").val().trim();
  if (task !== "")  {
    let html = `<li>${task} <button class=edit>Edit</button> <button id="close">X</button></li>`;
    $("#ul").append(html);
    // $("#ul").append(html2);
    $("#input").val("");
  }
});

$("#ul").on("click", "#close", function () {
  $(this)
    .parent()
    .fadeOut(400, function () {
      $(this).remove();
    });
});

$("#ul").on("click", ".edit", function () {
  let liitem = $(this).parent();
  //  let task = liitem.text().trim();
  let newtask = prompt("edit your task");

  if (newtask !== null && newtask.trim() !== "") {
    liitem.text(newtask);
  }
});
