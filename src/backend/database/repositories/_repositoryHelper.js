import Promise            from 'bluebird';


function stubData(data, delay = 500) {
    return Promise.delay(delay)
        .then(() => {
            return data;
        });
}

export default {
  stubData
};