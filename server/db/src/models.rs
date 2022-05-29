use super::schema::todo_item;

#[derive(Queryable)]
pub struct ToDoItem {
    pub id: i32,
    pub body: String,
    pub deleted: bool,
}

#[derive(Insertable)]
#[table_name = "todo_item"]
pub struct NewToDoItem<'a> {
    pub body: &'a str
}
