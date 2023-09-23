// adding function for image position and adding onto the page

function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
// append at the end of previous line before return makes sure images appear on page
// return object does not seem to be necessary? 

function newItem(url, left, bottom) {
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick',()=> {
        object.remove()
    })
}
// end of event listener that removes object after user dbl clicks

newImage('assets/green-character.gif',100,100)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/pine-tree.png',450,200)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)

newItem('assets/sword.png',500, 405)
newItem('assets/shield.png',165, 185)
newItem('assets/staff.png',600, 100)

// end of adding images to page

// start of bonus in trying to add backrgound images

const background = ['assets/sky.png','assets/grass.png']

for (let i = 0; i < background.length; i++) {
    document.body.append(background)
}
// window.innerWidth is 1800
// window.innerHeight is 957
// failed to do background bonus portion