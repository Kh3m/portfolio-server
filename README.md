# Server RESTful api 
This api is developed to provide services for the [Portfolio](https://www.github.com/kh3m/portfolio/)
client side react app.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them


You need to have install [NodeJs](https://www.nodejs.org/) 
and Install [MongoDB](https://www.mongodb.com) on your machine.


### Installing

A step by step series of examples that tell you how to get a development env running

Install all requried depedencies.
```
npm install
```

Install all required development dependencies.
```
npm install --save-dev
```

Create a .env file on your root development directory.
You will find a .env.example file that describes what keys are required and what the value looks like.

Run the dev npm script command to start the deevelopment server
```
npm run dev.
```

# Endpoints
* POST /auth/local/signin 
    This let you sigin with username and password.
    data required {username: "khem6333@gmail.com", password: "your password"}
* POST /auth/local/signup
    This let you sigup with fullname, username and password.
    data required {fullname: "Abdu Kareem Adamu", username: "khem6333@gmail.com", password: "your password"}

## Built With

* [ReactJS](http://www.reactjs.org/docs/getting-started/html) - The web framework used
* [Npm](https:///) - Dependency Management
* [NodeJS](https://nodejs.org/) - used to generate servercies for client.
* [MongoDB](https://mongodb.com/) - fused tr storing datas used

## Contributing

Please read [CONTRIBUTING.md](https://www.github.com/kh3m/portfolio-client/contributor.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Git](http://git.org/) for versioning. For the versions available, see the [tags on the client repository](https://github.com/ahmeddoo/portfolio/tags). 
[server](https://github.com/kh3m/portfolio-server/tags).

## Authors

* **Abdul Kareem - Kh3m** - *Server* - [Portfolio-Server](https://github.com/Kh3m)
* **Ahmad Sheik Tijani - Ahmeddoo** - *Client* - [Portfolio-Server](https://github.com/ahmeddoo)

See also the list of [client contributors](https://github.com/ahmeddoo/portfolio/contributors) who participated in this project.

See also the list of [server contributors](https://github.com/kh3m/portfolio-server/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration

