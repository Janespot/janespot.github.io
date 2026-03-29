import linkedinIcon from '/image/linkedin.png';
import githubIcon from '/image/github.png';
import twitterIcon from '/image/twitter.png';

export default function SocialLinks({ id = 'social-links-final' }) {
  return (
    <div id={id} className="social-links" role="list" aria-label="Social media links">
      <a href="https://www.linkedin.com/in/jane-odhiambo-99066137b/" target="_blank" rel="noreferrer" role="listitem" aria-label="LinkedIn">
        <img src={linkedinIcon} alt="" />
      </a>
      <a href="https://github.com/Janespot" target="_blank" rel="noreferrer" role="listitem" aria-label="GitHub">
        <img src={githubIcon} alt="" />
      </a>
      <a href="https://x.com/Janejunell777" target="_blank" rel="noreferrer" role="listitem" aria-label="Twitter / X">
        <img src={twitterIcon} alt="" />
      </a>
    </div>
  );
}
