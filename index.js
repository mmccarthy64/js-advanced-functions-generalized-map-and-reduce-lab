// Add your functions here
function map(ray, callback){
    const r  = [];

    for (let i = 0; i < ray.length; i++){
        const ele = ray[i];
        r.push(callback(ele));
    }
    return r;
}

function reduce(ray, callback, start){
    let total;
    if(start){
        total = start;
        for(let i = 0; i < ray.length; i++){
            total = callback(ray[i], total);
        }
        return total;
    } else {
        total = ray[0];
        for(let i = 1; i < ray.length; i++){
            total = callback(ray[i], total);
        }
        return total;
    }
    
}