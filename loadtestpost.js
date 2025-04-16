import http from 'k6/http';
import {sleep } from 'k6';



//grab from cli or use default values
let address = __ENV.ADDRESS || 'http://localhost:8080';
let virtualUsers = Number(__ENV.VUS) || 10;
let duration = __ENV.DURATION || '30s';

export let options = {
    vus: virtualUsers, //virtual users
    duration: duration, //duration
}

//test data
export default function () {
    const payload = JSON.stringify({
        username: 'testuser',
        password: 'supersecurepassword'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(address, payload, params);
    sleep(1);
}

