import React from "react";

const CreatingThing = ({
  newState,
  state,
  productName2Handler,
  productPhotoHandler,
  minAmount2Handler,
  maxAmount2Handler,
  minTerm2Handler,
  maxTerm2Handler,
  createNewObjHandler,
  rate2Handler,
}) => {
  return (
    <div className="content_infoThings">
      <p className="infoThings_name">{newState.ProdName}</p>
      <div className="infoThings_newName">
        <label className="infoThings_newName-label">Название товара</label>
        <input
          type="text"
          placeholder="Введите имя продукта"
          className="infoThings_newName-input"
          value={newState.ProdName}
          onChange={productName2Handler}
        />
      </div>
      <div className="infoThings_newName">
        <label className="infoThings_newName-label">Фото товара</label>
        <input
          type="text"
          placeholder="Вставьте URL - ссылку на фото продукта"
          className="infoThings_newName-input"
          value={newState.Photo}
          onChange={productPhotoHandler}
        />
      </div>
      <div className="infoThings_newAmount">
        <div className="infoThings_newAmount-min">
          <label className="infoThings_newName-label">Мин цена</label>
          <input
            type="text"
            placeholder="Введите мин цену"
            className="infoThings_newName-input"
            value={newState.MinAmount}
            onChange={minAmount2Handler}
          />
        </div>
        <div className="infoThings_newAmount-max">
          <label className="infoThings_newName-label">Maкс Цена</label>
          <input
            type="text"
            placeholder="Введите макс цену"
            className="infoThings_newName-input"
            value={newState.MaxAmount}
            onChange={maxAmount2Handler}
          />
        </div>
      </div>
      <div className="infoThings_newTerm">
        <div className="infoThings_newTerm-min">
          <label className="infoThings_newName-label">Мин количество</label>
          <input
            type="text"
            placeholder="Введите мин количество"
            className="infoThings_newName-input"
            value={newState.MinTerm}
            onChange={minTerm2Handler}
          />
        </div>
        <div className="infoThings_newTerm-max">
          <label className="infoThings_newName-label">Макс количество</label>
          <input
            type="text"
            placeholder="Введите макс количество"
            className="infoThings_newName-input"
            value={newState.MaxTerm}
            onChange={maxTerm2Handler}
          />
        </div>
      </div>
      <div className="infoThings_newRate">
        <label className="infoThings_newName-label">Рейтинг</label>
        <input
          type="text"
          placeholder="Укажите рейтинг"
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
  );
};

export default CreatingThing;
