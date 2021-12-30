import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import ListProducts from "./Components/ListProducts";
import CreatingThing from "./Components/CreatingThing";
import InformationThingAdmin from "./Components/InformationThingAdmin";
import InformationThingUser from "./Components/InformationThingUser";

function App() {
  const [state, setState] = React.useState([]);
  const [state2, setState2] = React.useState({
    Id: 0,
    ProdName: "LG NanoCell",
    MinAmount: "100",
    MaxAmount: "500",
    MinTerm: "1",
    MaxTerm: "2",
    Rate: "5",
    Date: "28.12.2020",
    Photo:
      "https://www.belta.by/uploads/lotus/news/2020/000025_D4C94573CC3DFFFC432584EB0050929E_607846.jpg",
  });
  const [newState, setNewState] = React.useState({
    Id: "",
    ProdName: "",
    MinAmount: "",
    MaxAmount: "",
    MinTerm: "",
    MaxTerm: "",
    Rate: "",
    Date: "",
    Photo: "",
  });
  const [startIndex, setStartIndex] = React.useState(0);
  const [creatingProd, setCreatingProd] = React.useState(false);
  const [searhThings, setSearchThings] = React.useState("");
  const [stateFilter, setStateFilter] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [selectShow, setSelectShow] = React.useState("user");

  // Актуальная дата создания карточек
  const globalDate = new Date().toLocaleDateString();

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
  const productPhotoHandler = (e) => {
    setNewState({ ...newState, Photo: e.target.value });
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
    newState.Id = state.length;
    newState.Date = globalDate;
    let prevArr = newArr.concat(newState);
    setState(prevArr);
    alert("Продукт создан!");
    setNewState({
      Id: "",
      ProdName: "",
      MinAmount: "",
      MaxAmount: "",
      MinTerm: "",
      MaxTerm: "",
      Rate: "",
      Date: "",
    });
  };

  // сохранение изменённых данных с перезаписыванием в основном стейте(не JSON а state!!!)
  // при ребуте прилетят значения старые с JSON и обновят опять стейт на них.

  const saveHandler = (startIndex, state2) => {
    let arr = state;
    let findID = state2.Id;

    if (stateFilter.length === 0) {
      let arr2 = arr.splice(startIndex, 1, state2);
      setState(arr);
    } else {
      let arr3 = arr.splice(findID, 1, state2);
      setState(arr);
      let copyFilterState = stateFilter;
      let checkFilter = copyFilterState.splice(startIndex, 1, state2);
      setStateFilter(copyFilterState);
    }
    setFlag(true);
    alert("СОХРАНЕНО!");
  };

  React.useEffect(() => {
    setFlag(false);
  }, [flag]);

  // React.useEffect(() => {
  //   setState2(startIndex);
  // }, [selectShow === "user"]);

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

  return (
    <div className="App">
      <div className="Wrapper">
        <div className="Wrapper_container">
          {/* header */}
          <header>
            <Header
              state={state}
              setStateFilter={setStateFilter}
              searhThings={searhThings}
              setSearchThings={setSearchThings}
              stateFilter={stateFilter}
              setState2={setState2}
              startIndex={startIndex}
              setSelectShow={setSelectShow}
            />
          </header>

          {/* content */}
          <div className="Wrapper_container_content">
            <ListProducts
              stateFilter={stateFilter}
              state={state}
              startIndex={startIndex}
              clickHandler={clickHandler}
              creatingProdhandler={creatingProdhandler}
              selectShow={selectShow}
            />

            {/* правая сторона */}

            {/* отображение при клике на СОЗДАТЬ продукт */}
            {creatingProd && (
              <CreatingThing
                newState={newState}
                productName2Handler={productName2Handler}
                productPhotoHandler={productPhotoHandler}
                minAmount2Handler={minAmount2Handler}
                maxAmount2Handler={maxAmount2Handler}
                minTerm2Handler={minTerm2Handler}
                maxTerm2Handler={maxTerm2Handler}
                rate2Handler={rate2Handler}
                createNewObjHandler={createNewObjHandler}
                state={state}
              />
            )}
            {/* Информация по продукту для админа */}
            {state2 !== undefined &&
              creatingProd === false &&
              selectShow === "admin" && (
                <InformationThingAdmin
                  state2={state2}
                  state={state}
                  startIndex={startIndex}
                  saveHandler={saveHandler}
                  deleteHandler={deleteHandler}
                  productNameHandler={productNameHandler}
                  minAmountHandler={minAmountHandler}
                  maxAmountHandler={maxAmountHandler}
                  minTermHandler={minTermHandler}
                  maxTermHandler={maxTermHandler}
                  rateHandler={rateHandler}
                />
              )}
            {/* Информация по продукту для админа */}
            {state2 !== undefined &&
              creatingProd === false &&
              selectShow === "user" && <InformationThingUser state2={state2} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
