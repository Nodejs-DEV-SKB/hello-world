var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area : (x,y) => (x*y)
}
var expRect = require("./rect")

// Using Same file var
function calculateArea(l,b){
    if(l <= 0 || b <= 0){
        console.log('Value is Zero')
    }else{
        console.log('Area Value is =', rect.area(l,b))
        console.log('Perimeter Value is =', rect.perimeter(l,b))

    }
}

// Using exported var
function calculateAreaUsingExport(l,b){
    if(l <= 0 || b <= 0){
        console.log('Value is Zero')
    }else{
        console.log('Area Value is =', expRect.area(l,b))
        console.log('Perimeter Value is =', expRect.perimeter(l,b))

    }
}

calculateArea(0,1)
calculateArea(0,0)
calculateArea(33,35)

console.log('\n\n')

calculateAreaUsingExport(0,1)
calculateAreaUsingExport(0,0)
calculateAreaUsingExport(33,35)