let num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num_list.forEach(element => {
    if (element == 1) {
        console.log(`${element}st`);
    }
    else if (element == 2) {
        console.log(`${element}nd`);
    }
    else if (element == 3) {
        console.log(`${element}rd`);
    }
    else {
        console.log(`${element}th`);
    }
});
export {};
