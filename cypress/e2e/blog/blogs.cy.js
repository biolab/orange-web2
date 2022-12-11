/// <reference types="cypress" />
import blogPosts from "../../../blogPosts.json";
import oldBlogs from "./old-blogs.json";

const baseUrl = "http://localhost:3000";

describe("test blogs", () => {
  blogPosts.forEach((blog) => {
    it(`test current blogs in repo: ${blog.title}`, () => {
      cy.visit(`${baseUrl}/blog/${blog.url}`);
      cy.get("h1").contains(blog.title);
    });
  });

  oldBlogs.forEach((blog) => {
    it(`test old-blogs redirects: ${blog.title}`, () => {
      cy.visit(`${baseUrl}${blog.uri}`);
      cy.get("h1").contains(blog.title);
    });
  });
});
