# Instagram Clone

Project made in Hotmart Club with Lucas Caton

## Description

The project idea is to create posts with the Instagrm layout's using Devise to authentication

## Requirements

- Ruby 2.7.0
- Rails 6.1.4
- PostgreSQL 12

## 🚀 Setup

1- Clone the repo to your local:

    git clone git@github.com:mjpancheri/instagram-clone.git && cd instagram-clone

2- Install dependencies:

    bundle install

3- Prepare database.yml

    cp config/database.example.yml config/database.yml

4- Go to the database.yml file and fill in your postgreSQL data

    host: '<your host>'
    username: '<your PostgreSQL username>'
    password: '<your PostgreSQL password>'

5- Create the database for the current environment

    rails db:create

6- Run migrations for the current environment.

    rails db:migrate

7 - Run the server

    rails s
