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

export default function () {
    http.get(address);
    sleep(1);
}

