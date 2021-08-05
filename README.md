# **Smart Attenuation Boilerplate**  

## Purpose

The smart attenuation server is designed to run 27/4 using `forever`it takes data from the Met Office RSS feed and searches it for data relating to Yellow and Red warnings for Rain.

## Installing and running

`git clone https://github.com/wilburforce83/smart.git`
then;
`cd smart`
then;
`npm install`

you can do this in any IDE, or if you are on linux you can just `cd lib`, `sudo nano globals.js`

to run;
`cd smart` then, `npm start`


## Work to be completed still

The daemon will need to be installed on a raspberry pi, and the npm module relay-raspberry will need installing:

once on the rpi and the repo is set up and installed is installed you will need install relay-raspberry:

`npm i relay-raspberry`

https://www.npmjs.com/search?q=relay

You will need to inject the code for the relay into the trigger function, triggering an attached relay. You will need it to stay powered until the warning clears:

An example enabling the relay on the GPIO 4 and printing its current state.
```
let relay = new Relay(4, 7000); // 4 is the PIN number, 7000 is the number of seconds after which the relay will be deactivated.
relay.enable(); // enables the relay
 
// Gets the current state of the relay
relay.getState().then((value) => {
    switch (value) {
        case 1:
            console.log("Enabled !");
            break;
        case 0:
            console.log("Disabled !");
            break;
    }
});
```



## Requirements.

Some modules require `Node 10.16.2` The bot has been written on on 10.16.2, but may work on lower versions.


## Error Handling

There should be fairly comprehensive error handling, the bot shouldnavigate most errors and carry on. In the event that there is an error, in order to keep the bot running 24/7 i recommend using one of the following:

https://www.npmjs.com/package/forever

or 

https://www.npmjs.com/package/nodemon

## Issues and PR's

I am happy to receive any bugs, issues or pull requests to help make the code better, and improve functionality.



License
=======

    Copyright 2021 Will Shearer for Aquaco Water Recycling Limited

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

