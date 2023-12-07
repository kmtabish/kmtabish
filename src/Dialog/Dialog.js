import "./index.css";
import { useSpring, animated } from "@react-spring/web";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

function Dialog() {
  const subTitle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    // loop: true,
    // delay: 1000,
  });
  const title = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <div className="dialog">
      <animated.div className="title" style={{ ...title }}>
        Khan Mohammed Tabish
      </animated.div>
      <div className="contact-group">
        <animated.div className="sub-title" style={{ ...subTitle }}>
          Undefined Programmer
        </animated.div>
      </div>

      <div className="tags-group">
        <div className="tags orange">
          <span className="tags-icon">
            <IoLogoJavascript />
          </span>
          <span className="tags-text">JS</span>
        </div>

        <div className="tags blue">
          <span className="tags-icon">
            <RiReactjsFill />
          </span>
          <span className="tags-text"> ReactJS</span>
        </div>

        <div className="tags green">
          <span className="tags-icon">
            <FaNodeJs />
          </span>
          <span className="tags-text">NodeJS</span>
        </div>
      </div>

      <div className="blogs">My Blogs</div>
      <div className="tags-group">
        <a
          className="blog-link"
          href="https://medium.com/@kmtabish"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>

        <a
          className="blog-link"
          href="https://blog.semicolon.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          Hashnode
        </a>

        <a
          className="blog-link"
          href="https://dev.to/kmtabish"
          target="_blank"
          rel="noreferrer"
        >
          Dev.to
        </a>
      </div>

      <div className="blogs">Connect with me</div>
      <div className="contact-group">
        <div className="contact-link">hi@kmtabish.com</div>
      </div>
    </div>
  );
}

export default Dialog;
