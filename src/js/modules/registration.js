const registr = document.querySelectorAll('.registration li')
registr.forEach(item =>{
item.addEventListener('click', (e) =>{
registr.forEach(el=>{ el.classList.remove('active'); });
item.classList.add('active')
})
})

const borderActive = document.querySelectorAll('.agree div')
borderActive.forEach(item =>{
item.addEventListener('click', (e) =>{
borderActive.forEach(el=>{ el.classList.remove('active'); });
item.classList.add('active')
})
})

const fop = document.querySelectorAll('.form-min__forms-1 .form-fop-list')
fop.forEach(item =>{
item.addEventListener('click', (e) =>{
fop.forEach(el=>{ el.classList.remove('active'); });
item.classList.add('active')
})
})


