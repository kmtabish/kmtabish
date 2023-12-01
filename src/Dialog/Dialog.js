import "./index.css";
import { useSpring, animated } from "@react-spring/web";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

function Dialog() {
  const subTitle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    loop: true,
    delay: 1000,
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
      <animated.div className="sub-title" style={{ ...subTitle }}>
        Undefined Programmer
      </animated.div>
      <div className="tags-group">
        <div className="tags orange">
          <span className="tags-icon">
            <IoLogoJavascript />
          </span>
          <span className="tags-text">Javascript</span>
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

        <div className="tags orange">
          <span className="tags-icon">
            <FaAws />
          </span>
          <span className="tags-text">AWS</span>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
