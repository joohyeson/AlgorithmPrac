function solution(before, after) {

    return [...after].reduce((acc, cur)=> acc.replace(cur,''),before)===''? 1: 0;
}