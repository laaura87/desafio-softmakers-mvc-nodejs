const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for (item of menuItems) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}

// Paginação
function paginate(selectedPage, totalPages) {
  let pages = [],
    oldPage;

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const firstAndLastPage = currentPage == 1 || currentPage == totalPages;
    const pagesAfterSelectedpage = currentPage <= selectedPage + 2;
    const pagesBeforeSelectedpage = currentPage >= selectedPage - 2;
    if (
      firstAndLastPage ||
      (pagesBeforeSelectedpage && pagesAfterSelectedpage)
    ) {
      if (oldPage && currentPage - oldPage > 2) {
        pages.push("...");
      }
      if (oldPage && currentPage - oldPage == 2) {
        pages.push(currentPage - 1);
      }

      pages.push(currentPage);

      oldPage = currentPage;
    }
  }
  return pages;
}
function createPagination(pagination) {
  const currentPage = pagination.dataset.page;
  const total = pagination.dataset.total;

  const pages = paginate(currentPage, total);

  let elements = "";

  for (let page of pages) {
    if (String(pages).includes("...")) {
      elements += `<span> ${page} </span>`;
    } else {
      if (page == currentPage) {
        elements += `<a class="active" href="?page=${page} "> ${page} </a>`;
      } else {
        elements += `<a href="?page=${page}"> ${page} </a>`;
      }
    }
  }

  pagination.innerHTML = elements;
}

const pagination = document.querySelector(".pagination");

if (pagination) {
  createPagination(pagination);
}
