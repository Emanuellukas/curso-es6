export function soma(...nums) {
    return nums.reduce((total, next) => total + next);
}

export function sub(...nums) {
    return nums.reduce((total, next) => total - next);
}

export function mult(...nums) {
    return nums.reduce((total, next) => total * next);
}
