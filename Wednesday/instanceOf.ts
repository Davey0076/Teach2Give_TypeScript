const somethingDangerous = () => {
    if (Math.random() > 0.5){
        throw new Error("Something went wrong")
 
    }
    return "All good"
}

try{
    somethingDangerous()

}
catch(error){
    if (error instanceof Error){
        console.log(error.message)
    }

}

