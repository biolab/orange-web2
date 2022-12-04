/// <reference types="cypress" />
import blogPosts from "../../../blogPosts.json";
import oldBlogs from "./old-blogs.json";

const baseUrl = "http://localhost:3002";

describe("test blogs", () => {
  blogPosts.forEach((blog) => {
    it(`test current blogs in repo: ${blog.title}`, () => {
      cy.visit(`${baseUrl}/blog/${blog.url}`);

      cy.get("h1").contains(blog.title);

      // Check if each image is visible
      cy.get("img").each((img) => {
        cy.wrap(img).scrollIntoView().should("be.visible");
        expect(img[0].naturalWidth).to.be.greaterThan(0);
        expect(img[0].naturalHeight).to.be.greaterThan(0);
      });
    });
  });

  // Enable these tests when all the blogs are copied to the new repo
  oldBlogs.forEach((blog) => {
    xit(`test old-blogs redirects: ${blog.title}`, () => {
      cy.visit(`${baseUrl}/${blog.url}`);
      cy.get("h1").contains(blog.title);
    });
  });
});
