import React from "react";

const InformationThingUser = ({ state2 }) => {
  return (
    <div className="content_infoThings">
      <p className="infoThings_name">{state2.ProdName}</p>
      <div className="infoThing_photo_gl">
        <img src={state2.Photo} alt="photoTV" className="infoThing_photo" />
      </div>
      <div className="infoThings_newName">
        <label className="infoThings_newName-label">Имя продукта</label>
        <p className="infoThings_newName-input">{state2.ProdName}</p>
      </div>
      <div className="infoThings_newAmount">
        <div className="infoThings_newAmount-min">
          <label className="infoThings_newName-label">Мин цена</label>
          <p className="infoThings_newName-input">{state2.MinAmount}</p>
        </div>
        <div className="infoThings_newAmount-max">
          <label className="infoThings_newName-label">Макс цена</label>

          <p className="infoThings_newName-input">{state2.MaxAmount}</p>
        </div>
      </div>
      <div className="infoThings_newTerm">
        <div className="infoThings_newTerm-min">
          <label className="infoThings_newName-label">Мин количество</label>

          <p className="infoThings_newName-input">{state2.MinTerm}</p>
        </div>
        <div className="infoThings_newTerm-max">
          <label className="infoThings_newName-label">Макс количество</label>

          <p className="infoThings_newName-input">{state2.MaxTerm}</p>
        </div>
      </div>
      <div className="infoThings_newRate">
        <label className="infoThings_newName-label">Рейтинг</label>

        <p className="infoThings_newName-input">{state2.Rate}</p>
      </div>
    </div>
  );
};

export default InformationThingUser;
