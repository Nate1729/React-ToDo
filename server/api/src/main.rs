use actix_web::{
    get,
    post,
    web,
    App,
    HttpResponse,
    HttpServer,
    Responder,
    Result,
};
use serde::Serialize;

#[derive(Serialize)]
struct ToDoList {
    items: Vec<String>
}


#[get("/get-todo-list")]
async fn get_todo_list() -> Result<impl Responder> {
    let obj = ToDoList {
       items: vec![
                    "One".to_string(),
                    "Two".to_string(),
                    "Three".to_string(),
       ],
    };
    Ok(web::Json(obj))
}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(get_todo_list)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
