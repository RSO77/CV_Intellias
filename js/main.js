let List = document.querySelectorAll('.border')
List.forEach(item => {
   item.addEventListener('click', (e) => {
      item.classList.toggle('border_scrol')
   })
})