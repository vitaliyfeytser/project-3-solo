import axios from "axios";

export default {
  // Gets all promotedBooks
  getPromotedBooks: function() {
    return axios.get("/api/promotedBooks");
  },
  // Gets all BookClubs
  getBookClubs: function() {
    return axios.get("/api/bookClubs");
  },
  // Gets all Readers
  getReaders: function() {
    return axios.get("/api/readers");
  },
  createPost: function(data) {
    return axios.post("/api/posts", data);
  },

  // SignUp and Login
  signUp: function(data) {
    return axios.post("/api/readers/signup", data);
  },
  login: function(data) {
    return axios.post("/api/readers/:email", data);
  },


  dashboard: function(data) {
    return axios.post("/api/user/dashboard", data);
  },
  validateToken: function(token) {
    return axios.post("/api/user/validate", { token: token });
  },
  addProperty: function(data) {
    return axios.post("/api/propertyform/propertyform", data);
  }
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
