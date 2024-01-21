import { useState } from "react";

export function Mywork(data) {
  const [work, setWork] = useState(data?.data);
  console.log(work?.url);
  return (
    <div className="Blog">
      <img className="mainBlogImg" src={work?.img} alt="mainJob" />
      <div className="blogInfo">
        <h2 className="H2">{work?.topic}</h2>

        {work?.credit?.map((name, i) => {
          return (
            <>
              <h5 className="H6" key={i}>
                {name?.lenght > 1 ? name : `${name},`}
              </h5>
            </>
          );
        })}
        <h6 className="H6">{work?.tags}</h6>
        <p className="P"> {work?.about}</p>
        <button className="Button">
          {" "}
          <a
            className="webA"
            href={work?.url === "" ? work?.gitHub : work?.url}>
            Check it out!{" "}
          </a>
        </button>
      </div>
    </div>
  );
}
