import React, { useEffect, useState } from "react";
import "../../style/coordinator.css";
import { fetchAllPostCoordinator } from "../../service/userService";

export default function CoordinatorHome() {
  const [listPost, setListPost] = useState([]);
  const [isLike, setIsLike] = useState();
  const [isShowComment, setIsShowComment] = useState();

  const getAllPost = async () => {
    const token = localStorage.getItem("accessToken");
    let res = await fetchAllPostCoordinator(token);
    if (res) {
      setListPost(res);
    }
    console.log(">>>check post", res);
  };

  useEffect(() => {
    getAllPost();
  }, []);
  console.log(">>>check post1112", listPost);
  return (
    <div className="coordinator">
      <div className="title">
        <h1>
          Welcome {localStorage.getItem("name")} to Marketing Coordinator Home
        </h1>
        <h4>Have a good day!</h4>
      </div>

      <div className="Blog">
        <div className="content">
          <div className="post-container">
            {listPost &&
              listPost.map((listPost) => {
                return (
                  <div className="post" key={listPost.id}>
                    <div className="post-header">
                      <h2>
                        Author:{" "}
                        {listPost.is_anonymous
                          ? "Anonymous"
                          : listPost.user.name}
                      </h2>
                      <h6>Title: {listPost.caption}</h6>
                    </div>
                    <p>{listPost.content}</p>
                    <span>Time: {listPost.created_at}</span>
                    <hr />
                    <div>
                      <p>{listPost.description}</p>
                    </div>
                    <div>
                      {listPost.file !== "null" && (
                        <a href={listPost.file}>
                          {listPost.file.substring(
                            listPost.file.lastIndexOf("/") + 1
                          )}
                        </a>
                      )}
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {listPost.image !== "null" && (
                        <img
                          style={{ width: "300px", height: "400px" }}
                          src={listPost.image}
                          alt=""
                        />
                      )}
                    </div>
                    <hr />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}