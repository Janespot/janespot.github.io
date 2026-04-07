import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import posts from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <section className="blog-section">
          <div className="blog-not-found">
            <h2>Post not found</h2>
            <Link to="/blog" className="btn-primary">Back to Blog</Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <article className="blog-post-section">
        <Link to="/blog" className="back-link">
          <i className="material-icons">arrow_back</i>
          Back to Blog
        </Link>

        <div className="blog-post-header">
          <div className="blog-card-tags">
            {post.tags.map((tag) => (
              <span className="skill-tag" key={tag}>{tag}</span>
            ))}
          </div>
          <h1>{post.title}</h1>
          <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </div>

        {/* Preview block, iframe if demoUrl, hero image if image, nothing otherwise */}
        {post.demoUrl ? (
          <div className="blog-preview-block">
            <div className="blog-preview-block-header">
              <div>
                <i className="material-icons">open_in_new</i>
                <span>Live Preview</span>
              </div>
              <a href={post.demoUrl} target="_blank" rel="noreferrer" className="btn-primary btn-sm">
                Visit Site &rarr;
              </a>
            </div>
            <div className="blog-demo-iframe-wrap">
              <iframe
                src={post.demoUrl}
                title={`${post.title} preview`}
                className="blog-demo-iframe"
                loading="lazy"
              />
            </div>
          </div>
        ) : post.image ? (
          <div className="blog-preview-block blog-preview-block--image">
            <img src={post.image} alt={post.title} />
          </div>
        ) : null}

        <div className="blog-post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      <Footer />
    </>
  );
}
