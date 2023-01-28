const apodMock = require('./mocks/apod.json');
const fs = require('fs');
const axios = require('axios');

const updateApod = async () => {
    const {data: apodData} = await axios.get('https://api.nasa.gov/planetary/apod?api_key=XG22WVqLEta2Q2eJhF90O5JZkxsGAc1IUKYDGcU7');
    const apodCompair = JSON.stringify(apodMock) === JSON.stringify(apodData);

    if (apodCompair) {
        console.log('no apod changes');
        return;
    }

    fs.writeFile('./mocks/apod.json', JSON.stringify(apodData),  error => console.log(error));
};

const update = () => {
    updateApod();
};

update();