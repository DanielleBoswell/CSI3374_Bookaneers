# CSI3374_Bookaneers

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

## 3/20 - Project Plan:
* Non-CRUD pages (2):
  * Dashboard/Search for Books
  * Book Profile
  * Data Visualization on Ratings/Reviews of the Book
    * Report Page
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
* Frontend pages are currently:
  * Book Profile - Views the book information
  * Search for Books - Can search books using a simple search bar
