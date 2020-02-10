const asyncFnPromise = url => { return new Promise((resolve, reject) => {
setTimeout(() => {
    url === 'google.com' ? resolve('all good') : reject('not good');
}, 1000);
});
};

asyncFnPromise('google.com').then(
        returnData => {
        console.log('promise resolved', returnData);
        },
        errorData => {
        console.log('promise rejected', errorData);
        }
    );

