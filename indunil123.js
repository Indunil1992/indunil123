let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.subscribe({
            TopicArn: "arn:aws:sns:us-east-1:318300609668:TestSNS",
            Protocol: "https",
            Endpoint: "https://052p9kjn18.execute-api.us-east-1.amazonaws.com/TestM/test/indusns	"
        }).promise();
        console.log("sucsess")
        console.log(data)

    } catch (err) {
        console.log("errrrrr")
        console.log(err)
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};