const axios = require("axios");
const uuid = require("uuid");

const reqTraceId1 = uuid.v4();
console.log("Making request with id =>", reqTraceId1);
getResponse(reqTraceId1);

setTimeout(() => {
    const reqTraceId2 = uuid.v4();
    console.log("Making request with id =>", reqTraceId2);
    getResponse(reqTraceId2);
}, 2000);

setTimeout(() => {
    const reqTraceId2 = uuid.v4();
    console.log("Making request with id =>", reqTraceId2);
    getResponse(reqTraceId2);
}, 3000);

function getResponse(traceId) {
    axios.get("http://localhost:3000/api/values/test", {
        headers: {
            "x-trace-id": traceId
        }
    }).then(response => {
        console.log("Get response for req " + traceId);
        console.log(response.data);
    }).catch(err => {
        console.error(err.toJSON());
    });
}