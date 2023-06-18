#### Description
The **subscribe** method allows the users to subscribe to a newsletter by providing their email address

The **unsubscribe** method allows the user to unsubscribe from the news letter.

#### Endpoint

- POST /api/newsletter/subscribe
- POST /api/newsletter/unsubscribe

#### Request parameters

- **email (string)** - The email address of the user subscribing to the newsletter

#### Methods

**subscribe** - This method is responsible for handling user subscription to the newsletter. 
it expects a valid email address as input.

**unsubscribe** - this method is responsible for removing the user from the subscription email service.
