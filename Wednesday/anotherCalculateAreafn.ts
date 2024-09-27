type Circle = {
    kind?: 'circle'
    radius: number
}

type Square = {
    kind: 'square'
    sideLength: number
}

type Shape = Circle | Square

export function anotherCalculateArea (shape: Shape){
    if (shape.kind === 'square'){
        return shape.sideLength * shape.sideLength
        
    }
    else{
        const {radius} = shape

        return Math.PI * radius * radius; 
    }
}