import React from "react";

const Header = ({
  state,
  setStateFilter,
  searhThings,
  setSearchThings,
  stateFilter,
  setState2,
  startIndex,
  setSelectShow,
}) => {
  // Поиск по названию продукта
  const searchClickHandler = (state) => {
    let filt = state.filter(
      (item, index) =>
        item.ProdName.toLocaleUpperCase() === searhThings.toLocaleUpperCase()
    );
    setStateFilter(filt);
    if (filt.length === 0) {
      alert("Ничего не найдено!");
    }
  };

  const searchThingsHandler = (e) => {
    setSearchThings(e);
  };

  React.useEffect(() => {
    if (stateFilter.length !== 0) {
      return setState2(stateFilter[startIndex]);
    }
  }, [stateFilter.length !== 0]);

  React.useEffect(() => {
    if (searhThings.length === 0) {
      return setStateFilter([]);
    }
  }, [searhThings.length === 0]);

  const selectAdminHandler = (e) => {
    setSelectShow(e);
  };

  return (
    <div className="Wrapper_container_header">
      <p className="Wrapper_container_header-p">
        <select
          className="header_select"
          onChange={(e) => selectAdminHandler(e.target.value)}
        >
          <option className="header_select_option" value="user">
            Пользователь
          </option>
          <option className="header_select_option" value="admin">
            Админ
          </option>
        </select>
      </p>
      <div className="Wrapper_container_header_rightSide">
        <input
          type="text"
          className="header_search_input"
          placeholder="Введите название продукта..."
          onChange={(e) => searchThingsHandler(e.target.value)}
        />
        <button
          onClick={() => searchClickHandler(state)}
          className="btn-header"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
