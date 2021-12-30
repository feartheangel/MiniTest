import React from "react";

const InformationThing = ({
  state2,
  state,
  startIndex,
  productNameHandler,
  minAmountHandler,
  maxAmountHandler,
  minTermHandler,
  maxTermHandler,
  rateHandler,
  saveHandler,
  deleteHandler,
}) => {
  return (
    <div className="content_infoThings">
      <p className="infoThings_name">{state2.ProdName}</p>
      <div className="infoThing_photo_gl">
        <img src={state2.Photo} alt="photoTV" className="infoThing_photo" />
      </div>
      <div className="infoThings_newName">
        <label className="infoThings_newName-label">Имя продукта</label>
        <input
          type="text"
          placeholder="Введите имя продукта"
          className="infoThings_newName-input"
          value={state2.ProdName}
          onChange={productNameHandler}
        />
      </div>
      <div className="infoThings_newAmount">
        <div className="infoThings_newAmount-min">
          <label className="infoThings_newName-label">Мин цена</label>
          <input
            type="text"
            placeholder="Введите минимальную цену"
            className="infoThings_newName-input"
            value={state2.MinAmount}
            onChange={minAmountHandler}
          />
        </div>
        <div className="infoThings_newAmount-max">
          <label className="infoThings_newName-label">Макс цена</label>
          <input
            type="text"
            placeholder="Введите максимальную цену"
            className="infoThings_newName-input"
            value={state2.MaxAmount}
            onChange={maxAmountHandler}
          />
        </div>
      </div>
      <div className="infoThings_newTerm">
        <div className="infoThings_newTerm-min">
          <label className="infoThings_newName-label">Мин количество</label>
          <input
            type="text"
            placeholder="Введите минимальное количество"
            className="infoThings_newName-input"
            value={state2.MinTerm}
            onChange={minTermHandler}
          />
        </div>
        <div className="infoThings_newTerm-max">
          <label className="infoThings_newName-label">Макс количество</label>
          <input
            type="text"
            placeholder="Введите максимальное количество"
            className="infoThings_newName-input"
            value={state2.MaxTerm}
            onChange={maxTermHandler}
          />
        </div>
      </div>
      <div className="infoThings_newRate">
        <label className="infoThings_newName-label">Рейтинг</label>
        <input
          type="text"
          placeholder="Укажите рейтинг"
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
  );
};

export default InformationThing;
