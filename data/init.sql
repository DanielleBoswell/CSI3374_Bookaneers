-- stage the csv so we can skip the index column
CREATE TABLE books_staging (
    index INTEGER,
    publishing_year NUMERIC,
    book_name TEXT,
    author TEXT,
    language_code VARCHAR(10),
    author_rating TEXT,
    book_average_rating NUMERIC,
    book_ratings_count INTEGER,
    genre TEXT,
    gross_sales NUMERIC,
    publisher_revenue NUMERIC,
    sale_price NUMERIC,
    sales_rank INTEGER,
    publisher TEXT,
    units_sold INTEGER
);
COPY books_staging
FROM '/docker-entrypoint-initdb.d/Books_Data_Clean.csv'
DELIMITER ','
CSV HEADER
QUOTE '"';

ALTER TABLE books_staging ALTER COLUMN publishing_year TYPE INTEGER USING publishing_year::INTEGER;

-- init the actual table
CREATE TABLE books AS
SELECT 
    index,
    publishing_year,
    book_name,
    author,
    language_code,
    author_rating,
    book_average_rating,
    book_ratings_count,
    genre,
    gross_sales,
    publisher_revenue,
    sale_price,
    sales_rank,
    publisher,
    units_sold
FROM books_staging;

-- drop the staging table
DROP TABLE books_staging;