import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import posts from '../data/posts';

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <section className="blog-section">
        <div className="section-header">
          <span className="section-tag blog-tag">Writing</span>
          <h2>Blog</h2>
          <p>Thoughts on AI, web development, and building things.</p>
        </div>
        <div className="blog-list">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
              {post.image && (
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
              )}
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <div className="blog-card-tags">
                    {post.tags.map((tag) => (
                      <span className="skill-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-read-more">Read more &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
