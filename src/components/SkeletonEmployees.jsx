import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonEmployees = () => {
  return (
    <>
      <ul
        style={{
          marginTop: "16px",
          marginLeft: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {Array(12)
          .fill()
          .map((item, index) => (
            <article
              key={index}
              className="px-3 mx-3 mb-3 flex justify-between items-center"
            >
              <div className="flex items-center">
                <figure className="w-28 h-28 rounded-full">
                  <Skeleton circle={true} height={92} width={92} />
                </figure>
                <div className="ml-6">
                  <h4>
                    <Skeleton width={174} />
                  </h4>
                  <span>
                    <Skeleton width={70} />
                  </span>
                </div>
              </div>
            </article>
          ))}
      </ul>
    </>
  );
};

export default SkeletonEmployees;
