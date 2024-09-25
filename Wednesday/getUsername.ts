import {Expect, Equal} from "@total-typescript/helpers"
function getUsername(username: string | null){
    if (username !== null){
        return `User: ${username}`
    }
    else{
        return `Guest`
    }
}

const result = getUsername('Alice')

const result2 = getUsername(null)
