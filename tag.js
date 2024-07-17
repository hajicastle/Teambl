let tag = document.getElementById('tag');
let addBtn = document.getElementById('button');

addBtn.addEventListener('click', function () {
  let content = tag.value;
  let newtag = document.createElement('div');
  let tagAll = document.getElementById('tag-container');
  newtag.classList.add('tag-item');

  newtag.textContent = content;
  console.log(newtag);
  tagAll.appendChild(newtag);
  tag.value = '';
});
