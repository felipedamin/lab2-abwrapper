# lab2-abwrapper

This is a prototype of a wrapper to handle all the event logging and AB test experimentation logic, this repo also contains some infra and applications that allows this wrapper to provide useful insights. The wrapper itself is located under demo-website-/src/ab-wrapper

Each folder is a different microservice:
- A dashboard application;
- Backend responsible for receiving all tracked events
- Backend responsible for all the AB tests information
- Another application that is supposed to be used by the product team in order to manage the experiments
- One statistics engine (unfinished, only does some basic stuff)
- One demo-website