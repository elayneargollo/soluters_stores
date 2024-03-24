
export function removeEmpty(object: any): Object {
    Object.keys(object).forEach((key) => object[key] === '' && delete object[key]);
    return object;
}
