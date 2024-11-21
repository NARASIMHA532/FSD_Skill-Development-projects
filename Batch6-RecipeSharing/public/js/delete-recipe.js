const deleteRecipeHandler = async (event) => {
  event.preventDefault();
  console.log("HELLO");

  const id = window.location.toString().split("/").pop();

  const response = await fetch(`/api/recipes/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ recipe_id: id }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/feed");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#delete-recipe-btn")
  .addEventListener("click", deleteRecipeHandler);
