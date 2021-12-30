import React from "react";

const ListProducts = ({
  stateFilter,
  state,
  startIndex,
  clickHandler,
  creatingProdhandler,
  selectShow,
}) => {
  return (
    <div className="content_leftBar">
      {selectShow === "admin" && (
        <div className="content_leftBar_btn">
          <button className="content-btn" onClick={creatingProdhandler}>
            {" "}
            Создать продукт{" "}
          </button>
        </div>
      )}

      {/* список подгружаемых элементов */}
      {/* по фильтру */}
      {stateFilter &&
        stateFilter.map((item, index) => (
          <div
            className={
              startIndex === index
                ? "content_leftBar_elems_active"
                : "content_leftBar_elems "
            }
            key={index}
            onClick={() => clickHandler(item, index)}
            id={index}
          >
            <p className="elems_name">{item.ProdName}</p>
            <p className="elems_time">{item.Date}</p>
          </div>
        ))}
      {/* без фильтра */}
      {state &&
        stateFilter.length === 0 &&
        state.map((item, index) => (
          <div
            className={
              startIndex === index
                ? "content_leftBar_elems_active"
                : "content_leftBar_elems "
            }
            key={index}
            onClick={() => clickHandler(item, index)}
            id={index}
          >
            <p className="elems_name">{item.ProdName}</p>
            <p className="elems_time">{item.Date}</p>
          </div>
        ))}
    </div>
  );
};

export default ListProducts;
