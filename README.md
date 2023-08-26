## Dukaan backend developer internship assignment

### Problem statement

Can be found [here](https://github.com/Bot9Ai/assignment/blob/main/readme.md)

### Solution

This solution is only focused on routes and their functionality with SQLite database using sequelize ORM. No Bonus section is implemented i.e.

-   Implement authentication for the user. Consider using libraries like passport.js.
-   Implement a search feature for chatbots or end users.
-   Implement pagination on endpoints that return lists of entities.

For Bonus section go to [here](https://github.com/sayeed205/dukaan-internship-assignment-bonus)

### Getting started

-   Clone the repo
-   Install dependencies
-   Run the server

```bash
git clone https://github.com/sayeed205/dukaan-internship-assignment.git
cd dukaan-internship-assignment
pnpm install
pnpm build
pnpm start
```

### env variables

-   PORT: port on which the server will run
-   JWT_SECRET: secret key for JWT token
-   DATABASE_NAME: name of the database
-   DATABASE_USERNAME: username of the database
-   DATABASE_PASSWORD: password of the database

### Postman collection

A postman collection is provided in the repo or click [here](./Dukaan.postman_collection.json). Import it to postman and start testing the routes.

### Routes

#### Users

-   POST /users

    ```jsonc
    {
        // request body
        "name": "Sayeed",
        "email": "test@example.com",
        "password": "Abcd@1234"
    }
    ```

    ```jsonc
    {
        // response body
        "ok": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVxJ9.eyJpZCI..."
    }
    ```

-   GET /users

    ```jsonc
    {
        // response body
        "ok": true,
        "users": [
            {
                "id": 1,
                "name": "Sayeed",
                "email": "test@example.com"
            },
            {
                "id": 2,
                "name": "John Doe",
                "email": "john@doe.com"
            }
        ]
    }
    ```

-   GET /users/:id

    ```jsonc
    {
        // response body
        "ok": true,
        "user": {
            "id": 1,
            "name": "Sayeed",
            "email": "test@example.com"
        }
    }
    ```

-   PUT /users/:id

    ```jsonc
    {
        // request body
        "name": "Sayeed Ahmed",
        "email": "test@gmail.com"
    }
    ```

    ```jsonc
    {
        // response body
        "ok": true,
        "user": {
            "id": 1,
            "name": "Sayeed Ahmed",
            "email": "test@gmail.com",
            "updatedAt": "2023-08-26T16:00:00.000Z"
        }
    }
    ```

-   DELETE /users/:id

    ```jsonc
    {
        // response body
        "ok": true,
        "user": {
            "id": 1,
            "name": "Sayeed Ahmed",
            "email": "test@gmail.com"
        }
    }
    ```

#### Chatbots

-   POST /users/:userId/chatbots

    ```jsonc
    {
        // request body
        "name": "Chatbot 1",
        "description": "This is a chatbot"
    }
    ```

    ```jsonc
    {
        // response body
        "ok": true,
        "chatbot": {
            "id": 1,
            "name": "Chatbot 1",
            "description": "This is a chatbot",
            "userId": 1,
            "createdAt": "2021-08-26T16:00:00.000Z",
            "updatedAt": "2021-08-26T16:00:00.000Z"
        }
    }
    ```

-   GET /users/:userId/chatbots

    ```jsonc
    {
        // response body
        "ok": true,
        "chatbots": [
            {
                "id": 1,
                "name": "Chatbot 1",
                "description": "This is a chatbot"
            },
            {
                "id": 2,
                "name": "Chatbot 2",
                "description": "This is a chatbot"
            }
        ]
    }
    ```

-   GET chatbots/:chatbotId

    ```jsonc
    {
        // response body
        "ok": true,
        "chatbot": {
            "id": 1,
            "name": "Chatbot 1",
            "description": "This is a chatbot"
        }
    }
    ```

-   PUT /chatbots/:chatbotId

    ```jsonc
    {
        // request body
        "name": "Chatbot 1",
        "description": "This is a chatbot"
        // minimum one field is required
    }
    ```

    ```jsonc
    {
        // response body
        "ok": true,
        "chatbot": {
            "id": 1,
            "name": "Chatbot 1",
            "description": "This is a chatbot",
            "updatedAt": "2023-08-26T16:00:00.000Z"
        }
    }
    ```

-   DELETE /chatbots/:chatbotId

    ```jsonc
    {
        // response body
        "ok": true,
        "chatbot": {
            "id": 1,
            "name": "Chatbot 1",
            "description": "This is a chatbot"
        }
    }
    ```

#### Conversations

-   POST /chatbots/:chatbotId/conversations

    ```jsonc
    {
        // request body
        "content": "Hello there!",
        "title": "Greeting",
        "endUserId": 1,
        "chatbotId": 1
    }
    ```

    ```jsonc
    {
        // response body
        "ok": true,
        "conversation": {
            "id": 1,
            "content": "Hello there!",
            "title": "Greeting",
            "endUserId": 1,
            "chatbotId": 1,
            "isCompleted": false,
            "createdAt": "2021-08-26T16:00:00.000Z",
            "updatedAt": "2021-08-26T16:00:00.000Z"
        }
    }
    ```

-   GET /chatbots/:chatbotId/conversations

    ```jsonc
    {
        // response body
        "ok": true,
        "conversations": [
            {
                "id": 1,
                "content": "Hello there!",
                "title": "Greeting",
                "endUserId": 1,
                "chatbotId": 1,
                "isCompleted": false,
                "createdAt": "2023-08-26T16:00:00.000Z"
            },
            {
                "id": 2,
                "content": "How are you?",
                "title": "Greeting",
                "endUserId": 1,
                "chatbotId": 1,
                "isCompleted": false,
                "createdAt": "2023-08-26T16:00:00.000Z"
            }
        ]
    }
    ```

-   GET /conversations/:conversationId

    ```jsonc
    {
        // response body
        "ok": true,
        "conversation": {
            "id": 1,
            "content": "Hello there!",
            "title": "Greeting",
            "endUserId": 1,
            "chatbotId": 1,
            "isCompleted": false,
            "createdAt": "2023-08-26T16:00:00.000Z"
        }
    }
    ```

-   PUT /conversations/:conversationId

    ```jsonc
    {
        // request body
        "isCompleted": true
    }
    ```

    ```jsonc
    {
        // response body
        "ok": true,
        "conversation": {
            "id": 1,
            "content": "Hello there!",
            "title": "Greeting",
            "endUserId": 1,
            "chatbotId": 1,
            "isCompleted": true,
            "updatedAt": "2023-08-26T16:00:00.000Z"
        }
    }
    ```

-   DELETE /conversations/:conversationId

    ```jsonc
    {
        // response body
        "ok": true,
        "conversation": {
            "id": 1,
            "content": "Hello there!",
            "title": "Greeting",
            "endUserId": 1,
            "chatbotId": 1,
            "isCompleted": true
        }
    }
    ```

#### End users

-   POST /endusers

    ```jsonc
    {
        // request body
        "name": "John Doe",
        "email": "test@example.com",
        "password": "Abcd@1234"
    }
    ```

    ```jsonc
    {
        // response body
        "ok": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVxJ9.eyJpZC..."
    }
    ```

-   GET /endusers

    ```jsonc
    {
        // response body
        "ok": true,
        "endusers": [
            {
                "id": 1,
                "name": "John Doe",
                "email": "john@doe.com"
            },
            {
                "id": 2,
                "name": "Jane Doe 2",
                "email": "john2@doe.com"
            }
        ]
    }
    ```

-   GET /endusers/:id

    ```jsonc
    {
        // response body
        "ok": true,
        "endUser": {
            "id": 1,
            "name": "John Doe",
            "email": "john@doe.com"
        }
    }
    ```

-   PUT /endusers/:id

    ```jsonc
    {
        // request body
        "name": "John Doe",
        "email": "test@gmail.com"
    }
    ```

    ```jsonc
    {
        // response body
        "ok": true,
        "endUser": {
            "id": 1,
            "name": "John Doe",
            "email": "test@gmail.com",
            "updatedAt": "2023-08-26T16:00:00.000Z"
        }
    }
    ```

-   DELETE /endusers/:id

    ```jsonc
    {
        // response body
        "ok": true,
        "endUser": {
            "id": 1,
            "name": "John Doe",
            "email": "test@gmail.com"
        }
    }
    ```
