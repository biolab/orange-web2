/// <reference types="cypress" />
import blogPosts from "../../../blogPosts.json";
import oldBlogs from "./old-blogs.json";

const baseUrl = "http://localhost:3000";

describe("test blogs", () => {
  blogPosts.forEach((blog, index) => {
    it(`test current blogs in repo: ${blog.title}`, () => {
      cy.visit(`${baseUrl}/blog/${blog.url}`);

      cy.get("h1").contains(blog.title);

      // Check if each image is visible
      if (Cypress.$("img").length > 0) {
        cy.get("img").each((img) => {
          cy.wrap(img).scrollIntoView().should("be.visible");
          expect(img[0].naturalWidth).to.be.greaterThan(0);
          expect(img[0].naturalHeight).to.be.greaterThan(0);
        });
      }
    });
  });

  oldBlogs.forEach((blog) => {
    xit(`test old-blogs redirects: ${blog.title}`, () => {
      cy.visit(`${baseUrl}${blog.uri}`);
      cy.wait(100);
      cy.get("h1").contains(blog.title);
    });
  });
});
