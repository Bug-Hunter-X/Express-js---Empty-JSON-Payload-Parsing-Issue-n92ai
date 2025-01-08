# Express.js - Empty JSON Payload Parsing Issue

This repository demonstrates a common issue in Express.js applications where parsing JSON payloads fails when the request body is empty.  The bug occurs when an empty JSON body is sent to a POST endpoint expecting JSON data. The solution shows how to properly handle this scenario.

## Bug

The `bug.js` file contains an Express.js application that attempts to parse an empty JSON body.  When an empty request is sent to the `/data` endpoint, it throws an error or fails silently, instead of correctly handling the empty request.

## Solution

The `bugSolution.js` file provides a solution that correctly handles the empty JSON payload by checking for the existence of `req.body` before accessing its properties or attempting to parse it.