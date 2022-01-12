import React from "react";
import { useNavigate } from "react-router-dom";

export const NavSearchForm = ({ client }) => {
  const [cat, setCat] = React.useState(null);
  const [selectCat, setSelect] = React.useState("");
  const [query, setQuery] = React.useState("");

  const history = useNavigate();

  const getCat = async () => {
    const response = await client.get("/categories");
    setCat(response.data);
  };

  const handleSubmit = e =>{
    e.preventDefault();
    // console.log(cate, q);
    // history(`/search/${cate}?query=${q}`);
  };

  React.useEffect(() => {
    getCat();
  }, []);

  return (
    <div class="search-top">
      <div class="top-search">
        <a href="#0">
          <i class="ti-search"></i>
        </a>
      </div>
      {/* <!-- Search Form --> */}
      <div
        class="search-top active"
        // style={{
        //   right: "50px",
        //   top: "-57px",
        // }}
      >
        <form
          class="search-form"
          role="search"
          action={"/search/"+selectCat}
          onSubmit={()=>handleSubmit()}
        >
          <input
            type="text"
            placeholder="Search here..."
            name="query"
            role="search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="form-control"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="" selected disabled>
              Pilih Kategori
            </option>
            {!cat
              ? null
              : cat.map((c, k) => {
                  return (
                    <option value={c.slug} key={k}>
                      {c.nama}
                    </option>
                  );
                })}
          </select>
          <button class="btn" value="search" type="submit">
            <i class="ti-search"></i>
          </button>
        </form>
      </div>
      {/* <!--/ End Search Form --> */}
    </div>
  );
};
