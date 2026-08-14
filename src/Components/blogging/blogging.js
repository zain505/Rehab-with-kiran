import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../data/blogs.json";
import "./blogging.css";

function Blogging() {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="blog-showcase" aria-labelledby="blog-showcase-title">
      <div className="blog-showcase__heading">
        <span>Expert guidance for every stage</span>
        <h2 id="blog-showcase-title">Latest from the blog</h2>
        <p>Practical, reassuring guidance to help you and your family move with more confidence.</p>
      </div>

      <div className="blog-showcase__grid">
        {featuredBlogs.map((blog, index) => (
          <article className={`featured-blog-card${index === 0 ? " featured-blog-card--lead" : ""}`} key={blog.id}>
            <img
              className="featured-blog-card__image"
              src={`${process.env.PUBLIC_URL}/images/blogs/${blog.image}`}
              alt={blog.imageAlt}
            />
            <div className="featured-blog-card__shade" />
            <div className="featured-blog-card__content">
              <span className="featured-blog-card__category">{blog.category}</span>
              <div>
                <p className="featured-blog-card__meta">
                  {blog.readTime} <span aria-hidden="true">•</span>{" "}
                  {new Date(`${blog.publishedDate}T00:00:00`).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <h3>{blog.title}</h3>
                <p className="featured-blog-card__excerpt">{blog.excerpt}</p>
                <Link to={`/blogs?post=${blog.slug}`} className="featured-blog-card__link">
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link className="blog-showcase__all" to="/blogs">
        Explore all articles <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

export default Blogging;
