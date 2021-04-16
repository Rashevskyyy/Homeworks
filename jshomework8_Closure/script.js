// первое задание 
function tickets(person) {
    for (var i = 0; i < person.length; i++) {
        if (Number(person[i]) + Number(person[i + 1]) >= Number(person[i + 2])) {   
            return `Yes`
        } else {
            return `No`;
        }
    }
}

Примеры:
console.log(tickets([25, 25, 50])); // => YES
console.log(tickets([25, 100]));    // => NO. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 25, 50, 100])); // Yes
console.log(tickets([25, 50, 100])); // No
console.log(tickets([`25`, `25`, `50`, `100`])); // Yes
console.log(tickets([`25`, `50`, `100`])); // No

// третье задание
var listOfPosts2 = [
    { // 0
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    { // 1
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    { // 2
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    { // 3
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
]

function  getPostsByAuthor(array, authorName) {
    var obj = {
        posts: 0,
        comments: 0
    }
        function counter(arr, property) {
            for(var i = 0; i < arr.length; i++) {
                if (arr[i].author === authorName) {
                    obj[property]++
                }
                if (Array.isArray(arr[i].comments)){
                    counter(arr[i].comments, 'comments')
                }
            }
        }
    counter(array, 'posts')
    return obj;
}
//console.log(getPostsByAuthor(listOfPosts2, 'Rimus'));

// 4 задание
function complexFunction(arg1, arg2) {
    return arg1 + arg2
}

function cache(func) {
    var cache = [];
    return function (arg1, arg2) {
        for (var i = 0; i < cache.length; i++) {
        if (arguments[0] === cache[i].arg1 && arguments[1] === cache[i].arg2) {
            return cache[i].result
        }
    }
    var result = func(arg1, arg2);
    cache.push({ arg1: arguments[0], arg2: arguments[1], result });
    return result;
    };
}
    var cachedFunc = cache(complexFunction);

    cachedFunc('foo', 'bar')
    cachedFunc('foo', 'bar')
    cachedFunc('foo', 'baz')
    cachedFunc('foo', 'bar')

    module.exports = {
        tickets,
        getPostsByAuthor,
        complexFunction,
        cache
    }