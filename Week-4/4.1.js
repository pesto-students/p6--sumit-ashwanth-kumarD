//Question
// Implement a function named getNumber which generates a random number. If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise. 


const getNumber = () => {
    return Math.ceil(Math.random() * 1024);
}
const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
    RESOLVED: 'RESOLVED'
}

function isThenable(val) {
    return val instanceof MyPromise;
}
class MyPromise {
    constructor(callback) {
        this.state = STATE.PENDING;
        this.value = undefined;
        this.handlers = [];
        try {
            callback(this.resolve, this.reject);
        } catch (err) {
            this.reject(err)
        }
    }

    resolve = (value) => {
        this.updateResult(value, STATE.RESOLVED);
    }

    reject = (error) => {
        this.updateResult(error, STATE.REJECTED);
    }

    updateResult(value, state) {
        setTimeout(() => {
            if (this.state !== STATE.PENDING) {
                return;
            }
            if (isThenable(value)) {
                return value.then(this.resolve, this.reject);
            }

            this.value = value;
            this.state = state;

            this.executeHandlers();
        }, 0);
    }

    addHandlers(handlers) {
        this.handlers.push(handlers);
        this.executeHandlers();
    }

    executeHandlers() {
        if (this.state === STATE.PENDING) {
            return null;
        }

        this.handlers.forEach((handler) => {
            if (this.state === STATE.RESOLVED) {
                return handler.onSuccess(this.value);
            }
            return handler.onFail(this.value);
        });
        this.handlers = [];
    }

    then(onSuccess, onFail) {
        return new MyPromise((res, rej) => {
            this.addHandlers({
                onSuccess: function (value) {
                    if (!onSuccess) {
                        return res(value);
                    }
                    try {
                        return res(onSuccess(value))
                    } catch (err) {
                        return rej(err);
                    }
                },
                onFail: function (value) {
                    if (!onFail) {
                        return rej(value);
                    }
                    try {
                        return res(onFail(value))
                    } catch (err) {
                        return rej(err);
                    }
                }
            });
        });
    }
    catch(onFail) {
        return this.then(null, onFail);
    }

    finally() {
        console.log(STATE.FULFILLED)
    }
}

const test = (time) => new MyPromise((resolve, reject) => {
    const value = getNumber();
    console.log("Value : " + value);
    console.time();
    setTimeout(() => {
        if (value % 5 === 0) {
            reject();
        }
        else {
            resolve();
        }
        console.timeEnd();
    }, time);
});

test(5000).then(() => {
    console.log(STATE.RESOLVED);
}).catch((err) => {
    debugger
    console.log(STATE.REJECTED, err);
})