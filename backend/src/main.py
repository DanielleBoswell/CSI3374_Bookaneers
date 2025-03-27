import psycopg2
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
import pandas as pd
import logging
import sys

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/search')
def search_books(query: str = Query(..., min_length=1)):
    # Connect to an existing database
    conn = psycopg2.connect("dbname=default_database user=username password=password host=db port=5432")
    cur = conn.cursor()
    
    cur.execute('SELECT index, book_name, author FROM books WHERE LOWER(book_name) LIKE %s', ("%{}%".format(query.lower()),))
    columns = list(cur.description)
    result = cur.fetchmany(size=5)
    # transform result

    # make dict
    results = []
    for row in result:
        row_dict = {}
        for i, col in enumerate(columns):
            row_dict[col.name] = row[i]
        results.append(row_dict)

    return results

@app.get("/view_book")
def view_book(query: int = Query(...)):
    # Connect to an existing database
    conn = psycopg2.connect("dbname=default_database user=username password=password host=db port=5432")
    cur = conn.cursor()
    cur.execute('SELECT * FROM books WHERE index = %s', (query,))
    columns = list(cur.description)
    result = cur.fetchone()

    # transform result
    results = {
        'index': result[0],
        'publishing_year': result[1],
        'book_name': result[2], 
        'author': result[3],
        'language_code': result[4],
        'author_rating': result[5],
        'book_average_rating': result[6],
        'book_ratings_count': result[7],
        'genre': result[8],
        'gross_sales': result[9],
        'publisher_revenue': result[10],
        'sale_price': result[11],
        'sales_rank': result[12],
        'publisher': result[13],
        'units_sold': result[14]}

    return results

@app.get("/")
def root():
    return {"message": " from FastAPI!"}
