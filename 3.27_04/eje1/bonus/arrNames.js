import faker from "faker"

export const arrNames = (num) => {
    for(let i = 1;i < num; i++){
        arr[i] = faker.name.findName();
    }

    return arr;
}
