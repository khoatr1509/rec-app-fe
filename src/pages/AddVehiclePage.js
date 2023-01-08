import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AddVehiclePage = () => {
  const [vehicles, setVehicles] = useState({
    1: {
      id: 1,
      name: "KIA",
      plate: "52A-123-4567",
      unit: "km",
      displacement: 0,
    },
    2: {
      id: 2,
      name: "KIA",
      plate: "52A-123-4567",
      unit: "km",
      displacement: 0,
    },
    3: {
      id: 3,
      name: "KIA",
      plate: "52A-123-4567",
      unit: "km",
      displacement: 0,
    },
    4: {
      id: 4,
      name: "KIA",
      plate: "52A-123-4567",
      unit: "km",
      displacement: 0,
    },
    5: {
      id: 5,
      name: "KIA",
      plate: "52A-123-4567",
      unit: "km",
      displacement: 0,
    },
  });
  const [alert, setAlert] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  }, [alert]);

  return (
    <div className="w-full h-screen overflow-y-auto bg-black text-white px-2">
      <div
        className={`bg-[#f1f5f9] fixed top-0 left-0 w-full h-[80px] flex justify-center items-center rounded-b-xl pt-16 pb-8 z-[1000] transition-transform ${
          alert ? "" : "translate-y-[-100%]"
        }`}
        id="alert"
      >
        <p className="text-lg text-red-600">You need to fill all the fields</p>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div
          className="w-fit px-3 py-2 transition-[background] active:bg-[#0082f5]/20 rounded-lg"
          onClick={() => {
            history.goBack();
          }}
        >
          <p className="text-[#0082f5]">Cancel</p>
        </div>
        <p className="font-bold">Vehicles - Add ODO</p>
        <div
          className="w-fit px-3 py-2 transition-[background] active:bg-[#0082f5]/20 rounded-lg"
          onClick={() => {
            history.goBack();
            //   if (false) {
            //   setAlert(true)
            // }
            // else {
            //   // Add stock

            //   // Return
            // }
          }}
        >
          <p className="text-[#0082f5]">Done</p>
        </div>
      </div>
      {Object.entries(vehicles).map(([key, value]) => {
        return (
          <div className={`mx-3 mt-6 relative z-5`} key={key}>
            <input
              type="number"
              className="bg-black w-full px-[110px] h-[56px] text-center border-[rgba(255,255,255,0.3)] rounded-xl border-2 placeholder:text-[rgba(255,255,255,0.3)] focus:outline-none"
              placeholder="0"
              onChange={(e) => {
                setVehicles({
                  ...vehicles,
                  [key]: { ...value, displacement: e.value },
                });
              }}
            />
            <div className="w-[110px] pl-5 py-2 absolute top-0 left-0">
              <p className="text-[rgba(255,255,255,0.3)] text-sm">
                {value.name}
              </p>
              <p className="text-[rgba(255,255,255,0.3)] text-sm">
                {value.plate}
              </p>
            </div>
            <div className="w-[80px] pr-5 py-2 absolute top-[10px] right-0">
              <p className="text-[rgba(255,255,255,0.3)] text-sm text-right">
                {value.unit}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddVehiclePage;
