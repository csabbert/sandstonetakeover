

# Sandstone Takeover

## Introduction
Your assignment is to build a prototype of a Vue.js web app called “Sandstone Takeover”. Sandstone Takeover is  multi-day festival where music artist perform and in order to see which of your favorite artist you can see, you need to order and find the conflicts in the show times. The app must display a list of shows, sectioned by start date, and listed in chronological order. The app must also correctly identify conflicts between shows.

## Getting Started
Fork or clone this repository and run the following commands to initialize your development environment:

```
$ yarn
$ yarn serve
```

Within this repo in the directory /src/assets/ is a JSON file titled data.json. This file contains the input for this assignment: an array of Show objects that match the following schema:

interface Event {
  artist: string;
  start: string; // i.e. "July 6, 2020 12:26 PM”
  end: string;
}


Note that the events in the input file are not presorted chronologically. The application must interpret this data and meet the following requirements:

UI Requirements
In this project, SASS and Buefy are configured for your convenience, but you may install any style preprocessor or UI bootstrap framework you prefer as long as you provide an explanation for your preference.

All event information must be displayed (title, start, end)
Shows are listed in chronological order
Shows are grouped by date
There is some indication that a show conflicts (overlaps) with another show.


## Functional Requirements
To implement the event conflict feature, you will need to design an algorithm to find events that overlap with each other. Note that an event ending at the same time another event starts should not be considered a conflict.

Sort all events chronologically
Design and implement an algorithm to determine event conflicts
Determining event conflicts in the entire data set must perform better than O(n2)

Clear separation of concerns, good software architecture
Comments with a brief description of the algorithm


## Analytical Requirements
Edit this README.md in your forked repository and at the bottom of the document, provide an analysis of your implementation process with consideration of the following:

Thought process while designing your application
Explanation of additionally installed dependencies
Trade-offs or assumptions you made in your design
Run time complexity analysis


## Submission
To submit your work, deploy your project to GitHub and make sure to have your analysis within the README.md file.

### Tips & FAQs

Don’t worry too much about UI design. You can use any bootstrap framework of your choice and keep it simple
You can use any external libraries and dependencies as long as you can clearly explain how they work
You can assume that events occur in your local timezone (i.e., you may ignore time zones for this assignment)
An event ending at the same time another event starts should not be considered a conflict


## Project Analysis
Full Name: Type here
Write your analysis here
