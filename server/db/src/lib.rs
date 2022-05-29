#[macro_use]
extern crate diesel;
extern crate dotenv;

pub mod models;
pub mod schema;

use diesel::prelude::*;
use dotenv::dotenv;
use std::env;

pub fn establish_connection() -> SqliteConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set!");
    SqliteConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

pub fn create_todo_item(conn: &SqliteConnection, body: &str) -> usize {
    use schema::todo_item;

    let new_todo_item = models::NewToDoItem {
        body
    };

    diesel::insert_into(todo_item::table)
        .values(&new_todo_item)
        .execute(conn)
        .expect("Error saving new todo item")
}
