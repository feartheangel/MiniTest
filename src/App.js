import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [state, setState] = React.useState([]);
  const [state2, setState2] = React.useState({
    Id: 1,
    ProdName: "LG x4000",
    MinAmount: "100",
    MaxAmount: "500",
    MinTerm: "1",
    MaxTerm: "2",
    Rate: "5",
  });
  const [newState, setNewState] = React.useState({
    Name: "",
    ProdName: "",
    MinAmount: "",
    MaxAmount: "",
    MinTerm: "",
    MaxTerm: "",
    Rate: "",
  });
  const [startIndex, setStartIndex] = React.useState(0);
  const [creatingProd, setCreatingProd] = React.useState(false);
  const [searhThings, setSearchThings] = React.useState("");
  const [stateFilter, setStateFilter] = React.useState([]);
  const [flag, setFlag] = React.useState(false);

  // клики по списку подгружаемых продуктов
  const clickHandler = (item, index) => {
    setState2(item);
    setStartIndex(index);
    setCreatingProd(false);
  };

  // кнопка создания продукта
  const creatingProdhandler = () => {
    setCreatingProd(true);
  };

  // запрос на сервер при первом рендере и сохранение данных в стейт
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/loanProducts.json")
      .then((response) => setState(response.data.products))
      .catch((error) => error);
  }, []);

  // изменения наших входных данных в инпуте
  const productNameHandler = (e) => {
    setState2({ ...state2, ProdName: e.target.value });
  };
  const minAmountHandler = (e) => {
    setState2({ ...state2, MinAmount: e.target.value });
  };
  const maxAmountHandler = (e) => {
    setState2({ ...state2, MaxAmount: e.target.value });
  };
  const minTermHandler = (e) => {
    setState2({ ...state2, MinTerm: e.target.value });
  };
  const maxTermHandler = (e) => {
    setState2({ ...state2, MaxTerm: e.target.value });
  };
  const rateHandler = (e) => {
    setState2({ ...state2, Rate: e.target.value });
  };

  // изменения наших входных данных в инпуте при СОЗДАНИИ НОВОГО ОБЬЕКТА
  const productName2Handler = (e) => {
    setNewState({ ...newState, ProdName: e.target.value });
  };
  const minAmount2Handler = (e) => {
    setNewState({ ...newState, MinAmount: e.target.value });
  };
  const maxAmount2Handler = (e) => {
    setNewState({ ...newState, MaxAmount: e.target.value });
  };
  const minTerm2Handler = (e) => {
    setNewState({ ...newState, MinTerm: e.target.value });
  };
  const maxTerm2Handler = (e) => {
    setNewState({ ...newState, MaxTerm: e.target.value });
  };
  const rate2Handler = (e) => {
    setNewState({ ...newState, Rate: e.target.value });
  };

  // Создание обьекта и сохранение нового обьекта в общий стейт
  const createNewObjHandler = ({ newState, state }) => {
    let newArr = state;
    let prevArr = newArr.concat(newState);
    setState(prevArr);
    alert("Продукт создан!");
    setNewState({
      Name: "",
      ProdName: "",
      MinAmount: "",
      MaxAmount: "",
      MinTerm: "",
      MaxTerm: "",
      Rate: "",
    });
  };

  // сохранение изменённых данных с перезаписыванием в основном стейте(не JSON а state!!!)
  // при ребуте прилетят значения старые с JSON и обновят опять стейт на них.

  const saveHandler = (startIndex, state2) => {
    let arr = state;
    let arr2 = arr.splice(startIndex, 1, state2);
    setState(arr);
    setFlag(true);
    alert("СОХРАНЕНО!");
  };

  React.useEffect(() => {
    setFlag(false);
  }, [flag]);

  // УДАЛЕНИЕ продукта
  const deleteHandler = (startIndex, state) => {
    let arrCopy = state;
    let arrCopy2 = arrCopy.splice(startIndex, 1);
    setState(arrCopy);
    setFlag(true);
    alert("УДАЛЕНО!");
    setStartIndex(0);
    setState2(state[0]);
  };

  // Поиск по названию продукта

  const searchThingsHandler = (e) => {
    setSearchThings(e);
  };

  const searchClickHandler = (state) => {
    let filt = state.filter(
      (item) =>
        item.ProdName.toLocaleUpperCase() === searhThings.toLocaleUpperCase()
    );
    setStateFilter(filt);
  };

  React.useEffect(() => {
    if (searhThings.length === 0) {
      return setStateFilter([]);
    }
  }, [searhThings.length === 0]);

  return (
    <div className="App">
      <div className="Wrapper">
        <div className="Wrapper_container">
          {/* header */}
          <header>
            <div className="Wrapper_container_header">
              <p className="Wrapper_container_header-p">SuperBank</p>
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
          </header>
          {/* content */}

          <div className="Wrapper_container_content">
            <div className="content_leftBar">
              <div className="content_leftBar_btn">
                <button className="content-btn" onClick={creatingProdhandler}>
                  {" "}
                  Создать продукт{" "}
                </button>
              </div>
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
                    <p className="elems_time">24.12.2021</p>
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
                    <p className="elems_time">24.12.2021</p>
                  </div>
                ))}
            </div>
            {/* правая сторона */}
            {/* отображение при клике на СОЗДАТЬ продукт */}
            {creatingProd && (
              <div className="content_infoThings">
                <p className="infoThings_name">{newState.ProdName}</p>
                <div className="infoThings_newName">
                  <label className="infoThings_newName-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    className="infoThings_newName-input"
                    value={newState.ProdName}
                    onChange={productName2Handler}
                  />
                </div>
                <div className="infoThings_newAmount">
                  <div className="infoThings_newAmount-min">
                    <label className="infoThings_newName-label">
                      Min Amount
                    </label>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      className="infoThings_newName-input"
                      value={newState.MinAmount}
                      onChange={minAmount2Handler}
                    />
                  </div>
                  <div className="infoThings_newAmount-max">
                    <label className="infoThings_newName-label">
                      Max Amount
                    </label>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      className="infoThings_newName-input"
                      value={newState.MaxAmount}
                      onChange={maxAmount2Handler}
                    />
                  </div>
                </div>
                <div className="infoThings_newTerm">
                  <div className="infoThings_newTerm-min">
                    <label className="infoThings_newName-label">Min Term</label>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      className="infoThings_newName-input"
                      value={newState.MinTerm}
                      onChange={minTerm2Handler}
                    />
                  </div>
                  <div className="infoThings_newTerm-max">
                    <label className="infoThings_newName-label">Max Term</label>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      className="infoThings_newName-input"
                      value={newState.MaxTerm}
                      onChange={maxTerm2Handler}
                    />
                  </div>
                </div>
                <div className="infoThings_newRate">
                  <label className="infoThings_newName-label">
                    Annual Interest Rate
                  </label>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    className="infoThings_newRate-input"
                    value={newState.Rate}
                    onChange={rate2Handler}
                  />
                </div>
                <button
                  className="content-btn-rgt"
                  onClick={() => createNewObjHandler({ newState, state })}
                >
                  Cоздать
                </button>
              </div>
            )}
            {/* отображение при клике по списку продуктов или дефолтоное при загрузке */}
            {state2 !== undefined && creatingProd === false && (
              <div className="content_infoThings">
                <p className="infoThings_name">{state2.ProdName}</p>
                <div className="infoThings_newName">
                  <label className="infoThings_newName-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    className="infoThings_newName-input"
                    value={state2.ProdName}
                    onChange={productNameHandler}
                  />
                </div>
                <div className="infoThings_newAmount">
                  <div className="infoThings_newAmount-min">
                    <label className="infoThings_newName-label">
                      Min Amount
                    </label>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      className="infoThings_newName-input"
                      value={state2.MinAmount}
                      onChange={minAmountHandler}
                    />
                  </div>
                  <div className="infoThings_newAmount-max">
                    <label className="infoThings_newName-label">
                      Max Amount
                    </label>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      className="infoThings_newName-input"
                      value={state2.MaxAmount}
                      onChange={maxAmountHandler}
                    />
                  </div>
                </div>
                <div className="infoThings_newTerm">
                  <div className="infoThings_newTerm-min">
                    <label className="infoThings_newName-label">Min Term</label>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      className="infoThings_newName-input"
                      value={state2.MinTerm}
                      onChange={minTermHandler}
                    />
                  </div>
                  <div className="infoThings_newTerm-max">
                    <label className="infoThings_newName-label">Max Term</label>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      className="infoThings_newName-input"
                      value={state2.MaxTerm}
                      onChange={maxTermHandler}
                    />
                  </div>
                </div>
                <div className="infoThings_newRate">
                  <label className="infoThings_newName-label">
                    Annual Interest Rate
                  </label>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    className="infoThings_newRate-input"
                    value={state2.Rate}
                    onChange={rateHandler}
                  />
                </div>
                <div>
                  <button
                    className="content-btn-rgt"
                    onClick={() => saveHandler(startIndex, state2)}
                  >
                    Сохранить
                  </button>

                  <button
                    className="content-btn-rgt-delete"
                    onClick={() => deleteHandler(startIndex, state)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
