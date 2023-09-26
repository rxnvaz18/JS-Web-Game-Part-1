// start of bonus in trying to add background images
// Start of for loops for looping background images
// starting loop at 5 since sky will be above grass.
for (let height = 5 ; height <= 957 / 100; height++) {
    for (let width = 0; width <=1800 / 100; width++) {
        newFeature(`assets/sky.png`, 0 + width * 100, 0 + height * 100) 
        // accesses sky image from assets and gives width and height of the picture
    }
}
// starting  is at 0 since grass will be under sky. 100px is the height and width of the images
for (let height = 0 ; height <= 400 / 100; height++) {
    for (let width = 0; width <=1800 / 100; width++) {
        newFeature(`assets/grass.png`, 0 + width * 100, 0 + height * 100)
        // accesses grass image from assets and gives width and height of the picture
    }
}
// window.innerWidth is 1800
// window.innerHeight is 957

// adding function for image position and adding onto the page
function newFeature(url, left, bottom) { 
    let object = document.createElement('img')
    // creates an object element for images that are to be placed on the screen
    object.src = url
    object.style.position = 'fixed' 
    // makes sure object's position is fixed to what was originally entered below where the pathways are
    object.style.left = left + 'px'
    // defines what the numbers are referring to in the bottom paths
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
    // return makes sure that object is appended on the screen
}
// append at the end of previous line before return makes sure images appear on page

function newThing(url, left, bottom) {
    let object = newFeature(url, left, bottom)
// start of eventListener that will store info on user dbl clicking 
    object.addEventListener('dblclick',()=> {
        object.remove()
// removes the object that is recognized under newThing that is double clicked
    })
}
// end of event listener that removes object after user dbl clicks
// paths and the numbers give the left, bottom px position of images to be appended onto the screen
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


