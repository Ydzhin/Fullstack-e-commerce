
# RED BRICK E-COMMERCE APP

The PURPOSE of this project is to train and discover NestJS, then explore all the new features of vuejs version 3 such as the COMPOSITION API, suspense, teleport and to use the pinia store.

This is an e-commerce site whose model was taken on DRIBBLE :) :)


## Installation

Install my project in two parts. For client side : 

```bash
    npm i
```

For api side, you need to type following commands after installing pgadminb : 

```bash
    sudo apt install pgadmin4
    sudo -u postgres psql
    CREATE DATABASE redbrick;
    sudo -u postgres createuser postgres;
    alter user postgres with encrypted password postgres;
    GRANT ALL PRIVILEGES ON DATABASE redbrick TO postgres;
    npm i
```
    
## Tech Stack

**Client:** Vue3

**Server:** NestJS

**Database:** Postgres SQL



## Run Locally

Start the server front end and backend command

```bash
  npm run dev
```
