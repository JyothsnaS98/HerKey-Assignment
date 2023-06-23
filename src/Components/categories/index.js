import React, { useState } from "react";
import oppurtunity from "../../assets/oppurtunity.webp";
import learning from "../../assets/learning.png";
import community from "../../assets/web-Comm-white-1.webp";
import opp1 from "../../assets/Opp-1.webp";
import learn1 from "../../assets/learn-1.png";
import comm1 from "../../assets/comm-1.webp";
import "./categories.scss";
function Categories() {
  const [category, setCategory] = useState("");

  return (
    <div className=" category-wrapper">
      <div className="main">
        <h1 className="category-heading">So how do we do it?</h1>
        <div className="category-btn">
          <div
            onClick={() => setCategory({ category: "oppurtunities" })}
            className={
              category["category"] === "oppurtunities"
                ? `selected-category-img-${category["category"]}`
                : "oppurtunity-category-img"
            }
          ></div>
          <div
            onClick={() => setCategory({ category: "learning" })}
            className={
              category["category"] === "learning"
                ? `selected-category-img-${category["category"]}`
                : "learning-category-img"
            }
          ></div>
          <div
            onClick={() => setCategory({ category: "communities" })}
            className={
              category["category"] === "community"
                ? `selected-category-img-${category["category"]}`
                : "community-category-img"
            }
          ></div>
        </div>
        <div className="data-block">
          {category["category"] !== "learning" &&
            category["category"] !== "communities" && (
              <>
                <div>
                  <h5>Jobs</h5>
                  <p>
                    Find the perfect role for you across industries, skill sets
                    and job roles.
                  </p>
                  <button>Apply for Jobs</button>
                </div>
                <div>
                  <h5>Companies</h5>
                  <p>
                    Follow the biggest names in the tech and non-tech worlds and
                    start engaging with them.
                  </p>
                  <button>Follow companies</button>
                </div>
              </>
            )}
          {category["category"] === "learning" && (
            <>
              <div>
                <h5>Courses</h5>
                <p>
                  Find courses to reskill and upskill yourself to land the
                  perfect job no matter whether you’re a starter, restarter or
                  riser.
                </p>
                <button>Register for Courses</button>
              </div>
              <div>
                <h5>Experts</h5>
                <p>
                  Get coached and mentored by experts who can get you out of any
                  sticky situation.
                </p>
                <button>Find Experts</button>
              </div>
            </>
          )}
          {category["category"] === "communities" && (
            <>
              <div>
                <h5>Groups</h5>
                <p>
                  Network with other like-minded women and find your tribe of
                  women who will pull you up instead of push you down.
                </p>
                <button>Join Groups</button>
              </div>
              <div>
                <h5>Herkey Club</h5>
                <p>
                  An exclusive, invite-only club of highly accomplished and
                  rising women leaders.{" "}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
