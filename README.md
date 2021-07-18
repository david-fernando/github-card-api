<h3 align="center">GitHub Card API</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]() [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Unofficial GItHub API that return your social preview url
    <br> 
</p>

## 📝 Table of Contents

- [How to use](#how_to_use)
- [How to contribute](#how_to_contribute)
- [Built Using](#built_using)
- [Authors](#authors)


## 🏁 <span id="how_to_use">How to use </span>

Make a get request to the url below with your Medium user

```bash
GET https://mediumpostsapi.herokuapp.com/?githubuser={{yourgithubusername}}&repository={{yourrepository}}
```

Example

```bash
https://mediumpostsapi.herokuapp.com/?githubuser=david-fernando&repository=medium-posts-api
```
The request for the above url will bring the following results

```bash
[
  imageUrl	"https://repository-images.githubusercontent.com/328493464/dba6e680-569b-11eb-8a15-47228be0ccfe"
]
```

### <span id="how_to_contribute">How to contribute</span>

 Fork this repository, make clone for your machine.

 Install the dependencies with one of the commands below:

 ```bash
 yarn install
 
 # or

 npm install
 ```

Then, run the development server.

```bash
yarn dev

# or

npm dev
```
Then, let's get coding.
When everything is ready, do a pull request to the branch development.

## ⛏️ <span id="built_using">Built Using</span>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ <span id="authors">Author</span>

- [@david-fernando](https://github.com/david-fernando) - Idea & Initial work
