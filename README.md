# Evaluate News Article with Natural Language Processing

This is a project for Udacity Frontend Web Development Program that evaluates news articles using NLP (Natural Language Processing). This project utilizes webpack and its' various loaders and plugins. Also uses Aylien API to get the NLP data. 

### More about NLP

According to Wikipedia:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## Getting started

- `git clone`
- `cd` into your new folder and run:
- `npm install`

## Setting up the API

### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup).

### Step 2: Environment Variables
- [ ] Require the Aylien npm package
- [ ] Create a new .env file in the root of your project
- [ ] Go to your .gitignore file and add .env
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```

### Step 3: Run
- On your terminal:
    - `npm run build-prod`
    - `npm run build-dev`
- On a separate terminal:
    - `npm run start`

### Step 4: Final Step
- Add a news article to get it evaluated!

