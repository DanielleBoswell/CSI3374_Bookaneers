# CSI3374_Group3_Bookaneers

## Running the Project:
When first running the containers, execute the following command in the terminal:

```bash
./init-database
```

This script will ensure all the volumes are clear and empty the database environment to ready it for initialization.
It then builds and runs the docker compose file.

All other instances when starting up the containers should be executed with this command:

```bash
docker compose up -d
```

Followed by this command to shut them down:

```bash
docker compose down
```

## Project Overview

### Summary
This website application gives users the ability to look up their favorite books and view their informaiton.

**(COMING SOON)**
* Reading Lists
* Book Clubs
* Discussion Posts

### Getting to the Website
To get to the website, just run the docker container and go to [localhost:3000](localhost:3000), built using a React Frontend.
This will bring you to the homepage, where you can choose to go to the [search page](localhost:3000/search). 

To view a book, search for a book, then click on one of the search results.

### Extras
Along with a React Frontend, this projects runs on a FastAPI Backend, which can be accessed on [localhost:8000](localhost:8000) for all necessary API calls, and a PostgreSQL database that is running on [localhost:5432](localhost:5432). This database can be accessed using pgAdmin on [localhost:5050](localhost:5050) using the credientials found in the ``docker-compose.yml`` file. 

# Project Log

## 3/20 - Project Plan:
* Non-CRUD pages (2):
  * Dashboard/Search for Books
  * Book Profile
  * Data Visualization on Ratings/Reviews of the Book (OPTIONAL)
    * Report Page (OPTIONAL)
* Database portion: BOOKS
  * Kaggle: [Books Sales and Ratings](https://www.kaggle.com/datasets/thedevastator/books-sales-and-ratings)
  * OpenLibrary
* Other Database options
  * Ratings + Reviews
*	Functions/Requirements
  * View Books
  * Search Up Books
  * (optional) Create Reading List

## 3/21 - Docker Containers
* Really confused on how to create the compose files
* Got the backend, frontend, and postgres db situated, but not yet running
* Need to fix errors on backend and db

## 3/22 - Docker Containers cont.
* Got pgAdmin and PostgreSQL db to work
* Got CSV data to populate PostgreSQL db
* Got backend (on port 8000) and frontend (on port 3000) to work
* Currently working on API endpoints on backend and front end pages
* Frontend non-CRUD pages are currently:
  * Book Profile - Views the book information
  * Search for Books - Can search books using a simple search bar

## 3/27 - Got Search Books and View Book Pages Completed!
* Fixed endpoints on main.py for
  * Searching for books - made sure to have case-insensitivity
  * Viewing a book - turned the result from an array to an object for easier conversion and access in react
* Added Routes to and from Search and View pages in App.js
* Created View Book Page in order to view a book's information
