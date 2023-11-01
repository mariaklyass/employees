import React from "react";

const err_content = {
  common: {
    heading: "Some supreme mind broke everything",
    description: "We'll try to fix it a.s.a.p.",
    img: "/public/ufo.svg",
    actionText: "Try again",
  },
  search: {
    heading: "There isn't anyone matching the search parameters...",
    description: "Try smth else",
    img: "/public/search.png",
  },
};

export function CriticalError({ onTryAgain }) {
  const content = err_content.common;

  return (
    <div className="mt-[133px] w-[343px] h-[150px] mx-auto text-center">
      <img className="mx-auto" src={content.img} />
      <h2 className="font-semibold leading-[22px] text-[17px]">
        {content.heading}
      </h2>
      <p className="text-[#97979B] my-3">{content.description}</p>
      {content.actionText && (
        <button className="text-[#6534FF]" onClick={onTryAgain}>
          {content.actionText}
        </button>
      )}
    </div>
  );
}
export function SearchError({ onSearchAgain }) {
  const content = err_content.search;

  return (
    <div className="mt-[133px] w-[343px] h-[150px] mx-auto text-center">
      <img className="mx-auto" src={content.img} />
      <h2 className="font-semibold leading-[22px] text-[17px]">
        {content.heading}
      </h2>
      <p className="text-[#97979B] my-3">{content.description}</p>
      {content.actionText && (
        <button className="text-[#6534FF]" onClick={onSearchAgain}>
          {content.actionText}
        </button>
      )}
    </div>
  );
}
