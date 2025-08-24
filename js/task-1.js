document.addEventListener("DOMContentLoaded", function () {
  const categoriesList = document.getElementById("categories");

  const categoryItems = categoriesList.querySelectorAll(".item");
  console.log(`Toplam kategori sayisi: ${categoryItems.length}`);

  categoryItems.forEach((item) => {
    const categoryTitle = item.querySelector("h2").textContent;

    const categoryElements = item.querySelectorAll("li");
    const elementCount = categoryElements.length;

    console.log(`Kategori: ${categoryTitle}`);
    console.log(`Öğe sayisi: ${elementCount}`);
  });
});
