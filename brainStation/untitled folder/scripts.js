
    let string1 = 'hello';
    let string2 = 'world';

    let join = (str1, str2) => {

        console.log(str1 + " " + str2);

    }

    join(string1, string2)


    let arr = [1, 2, 3, "hello", [], {}, 7];

    const allNumbers = (arr) => {
        arr.forEach(element => {
        if (typeof element !== 'number') 

        console.log(false)

        })
    
        console.log(true)
    }

    allNumbers(arr)

    const onlyNumbers = (arr) => {
        arr.filter(value => {
            if (typeof value === "number") {
                console.log(value)
            }
        })
    }






