// start of bonus in trying to add backrgound images
// Start of for loops for looping background images
for (let height = 5 ; height <= 957 / 100; height++) {
    for (let width = 0; width <=1800 / 100; width++) {
        newFeature(`assets/sky.png`, 0 + width * 100, 0 + height * 100)
    }
}

for (let height = 0 ; height <= 400 / 100; height++) {
    for (let width = 0; width <=1800 / 100; width++) {
        newFeature(`assets/grass.png`, 0 + width * 100, 0 + height * 100)
    }
}
// window.innerWidth is 1800
// window.innerHeight is 957
// adding function for image position and adding onto the page

function newFeature(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
// append at the end of previous line before return makes sure images appear on page

function newThing(url, left, bottom) {
    let object = newFeature(url, left, bottom)

    object.addEventListener('dblclick',()=> {
        object.remove()
    })
}
// end of event listener that removes object after user dbl clicks

newFeature('assets/green-character.gif',100,100)
newFeature('assets/tree.png',200,300)
newFeature('assets/pillar.png',350,100)
newFeature('assets/pine-tree.png',450,200)
newFeature('assets/crate.png',150,200)
newFeature('assets/well.png',500,425)

newThing('assets/sword.png',500, 405)
newThing('assets/shield.png',165, 185)
newThing('assets/staff.png',600, 100)

// end of adding images to page


