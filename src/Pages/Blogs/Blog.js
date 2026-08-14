import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Blog.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import blogs from "../../data/blogs.json";

const imagePath = (image) => `${process.env.PUBLIC_URL}/images/blogs/${image}`;

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedBlog, setSelectedBlog] = useState(
    () => blogs.find((blog) => blog.slug === searchParams.get("post")) || null
  );

  useEffect(() => {
    const requestedBlog = blogs.find((blog) => blog.slug === searchParams.get("post")) || null;
    setSelectedBlog(requestedBlog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchParams]);

  const openBlog = (blog) => setSearchParams({ post: blog.slug });
  const closeBlog = () => setSearchParams({});
  const formatDate = (date) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="blog-page">
        {selectedBlog ? (
          <article className="blog-detail">
            <button onClick={closeBlog} className="blog-detail__back">
              <span aria-hidden="true">←</span> Back to all articles
            </button>
            <div className="blog-detail__header">
              <span className="blog-detail__category">{selectedBlog.category}</span>
              <h1>{selectedBlog.title}</h1>
              <p>By Dr. Kiran Fatima <span aria-hidden="true">•</span> {formatDate(selectedBlog.publishedDate)} <span aria-hidden="true">•</span> {selectedBlog.readTime}</p>
            </div>
            <img
              src={imagePath(selectedBlog.image)}
              alt={selectedBlog.imageAlt}
              className="blog-detail__image"
            />
            <div className="blog-detail__body">
              {selectedBlog.description.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <aside className="blog-detail__note">
              This article offers general educational information and does not replace an individual medical assessment.
            </aside>
          </article>
        ) : (
          <>
            <header className="blog-page__hero">
              <span>Move better. Understand more.</span>
              <h1>Health & development insights</h1>
              <p>Clear, practical guidance on physiotherapy, child development, and everyday wellbeing.</p>
            </header>
            <div className="blog-page__grid">
              {blogs.map((blog) => (
                <article className="article-card" key={blog.id}>
                  <button className="article-card__button" onClick={() => openBlog(blog)} aria-label={`Read ${blog.title}`}>
                    <div className="article-card__image-wrap">
                      <img src={imagePath(blog.image)} alt={blog.imageAlt} className="article-card__image" />
                      <span className="article-card__category">{blog.category}</span>
                    </div>
                    <div className="article-card__content">
                      <p className="article-card__meta">{formatDate(blog.publishedDate)} <span aria-hidden="true">•</span> {blog.readTime}</p>
                      <h2>{blog.title}</h2>
                      <p className="article-card__excerpt">{blog.excerpt}</p>
                      <span className="article-card__read">Read article <span aria-hidden="true">→</span></span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
