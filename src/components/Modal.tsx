import "../../public/css/modal.css";
import useProjectsStore from "../stores/useProjectsStore";
import Theme from "../context/Theme";
import { useContext } from "react";

const Modal = () => {
  const { projectKey } = useProjectsStore();
  const { projArr } = useProjectsStore();
  const { mode } = useContext(Theme);

  return (
    <div>
      <div
        className="modal fade"
        id="projectModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div
            className={
              mode === "light" ? "modal-content" : "modal-content bg-dark"
            }
            style={mode === "light" ? { color: "#444" } : { color: "#f2f2f2" }}
          >
            <div className="modal-header">
              <button
                type="button"
                className={
                  mode === "light" ? "btn-close" : "btn-close bg-secondary"
                }
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img id="modal-img" src={projArr[projectKey].prev} alt="" />
              <div>
                <h2>{projArr[projectKey].title}</h2>
                <p>{projArr[projectKey].descr}</p>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Technologies:
                </div>
                <div className="techs">
                  {projArr[projectKey].techs.map((tech, index) => (
                    <div key={index}>{tech}</div>
                  ))}
                </div>

                <div className="access">
                  {projArr[projectKey].repo !== "" ? (
                    <a
                      target="_blank"
                      href={projArr[projectKey].repo}
                      className="btn btn-success"
                    >
                      Github <i className="fa-brands fa-github"></i>
                    </a>
                  ) : null}

                  {projArr[projectKey].link !== "" ? (
                    <a
                      target="_blank"
                      href={projArr[projectKey].link}
                      className="btn btn-secondary"
                    >
                      Demo{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
