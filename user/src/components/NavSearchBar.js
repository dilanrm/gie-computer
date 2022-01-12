import React from "react";
import { useNavigate } from "react-router-dom";

export const NavSearchBar = ({ client }) => {
  const [cat, setCat] = React.useState(null);
  const [selectCat, setSelect] = React.useState("");
  const [query, setQuery] = React.useState("");

  const history = useNavigate();

  const getCat = async () => {
    const response = await client.get("/categories");
    setCat(response.data);
  };

  const handleSubmit = (cate, q) => {
    // e.preventDefault();
    console.log(cate,q);
    history(`/search/${cate}?query=${q}`);
  };

  React.useEffect(() => {
    getCat();
  }, []);

  return (
    <div class="col-lg-4 col-md-5 col-12">
      <div class="search-bar-top">
        {/* <div class="search-bar">
          <form>
            <input
              name="search"
              placeholder="Search Products Here....."
              type="search"
            />
            <button class="btnn">
              <i class="ti-search"></i>
            </button>
          </form>
        </div> */}

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <div
            class="nice-select"
            tabindex="0"
            style={{ backgroundColor: "white" }}
          >
            <span class="current">All Category</span>
            <ul class="list" style={{ zIndex: "9999" }}>
              <li
                data-value="All Category"
                class="option selected focus"
                onClick={(e) => setSelect("")}
              >
                All Category
              </li>
              {!cat
                ? null
                : cat.map((c, k) => {
                    return (
                      <li
                        data-value={c.nama}
                        class="option"
                        onClick={(e) => setSelect(c.slug)}
                      >
                        {c.nama}
                      </li>
                    );
                  })}
            </ul>
          </div>
          <div class="input-group-append">
            <button
              class="btn"
              type="submit"
              onClick={()=>handleSubmit(selectCat, query)}
            >
              <i class="ti-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
