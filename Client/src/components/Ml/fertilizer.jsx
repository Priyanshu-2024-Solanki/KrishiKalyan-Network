import React, { useState } from "react";

const fertilizerData = [
    {
        combination: { soilType: "Clayey", cropType: "Wheat", moisture: 0, nitrogen: 0, phosphorus: 0, potassium: 0 },
        fertilizer: "20-20-20 - Jack's Classic All Purpose Fertilizer",
        information: "Complete fertilizer with N, P, and K.",
        application: "Apply evenly across the field.",
        specification: "Contains balanced nutrients."
    },
    {
        combination: { soilType: "Sandy", cropType: "Maize", moisture: 0, nitrogen: 0, phosphorus: 0, potassium: 1 },
        fertilizer: "24-25-4 - Scotts Turf Builder Starter Food for New Grass",
        information: "High N and P, low K.",
        application: "Apply before or at planting.",
        specification: "Encourages new grass growth."
    },
    {
        combination: { soilType: "Loamy", cropType: "Sugarcane", moisture: 0, nitrogen: 0, phosphorus: 1, potassium: 0 },
        fertilizer: "9-0-5 - Dr. Earth Super Natural Lawn Fertilizer",
        information: "High N and K, low P.",
        application: "Apply during early growth stages.",
        specification: "Promotes green, healthy lawns."
    },
    {
        combination: { soilType: "Black", cropType: "Cotton", moisture: 0, nitrogen: 0, phosphorus: 1, potassium: 1 },
        fertilizer: "30-0-6 - Miracle-Gro Water Soluble Lawn Food",
        information: "High N, balanced P and K.",
        application: "Use as a top dressing.",
        specification: "Feeds through roots and leaves."
    },
    {
        combination: { soilType: "Red", cropType: "Groundnut", moisture: 0, nitrogen: 1, phosphorus: 0, potassium: 0 },
        fertilizer: "3-4-4 - Espoma Garden-Tone Herb & Vegetable Food",
        information: "High P and K, low N.",
        application: "Apply to the soil surface.",
        specification: "Enhances vegetable growth."
    },
    {
        combination: { soilType: "Clayey", cropType: "Oilseed", moisture: 0, nitrogen: 1, phosphorus: 0, potassium: 1 },
        fertilizer: "4-4-4 - Jobe's Organics All-Purpose Fertilizer",
        information: "High P, balanced N and K.",
        application: "Use at planting time.",
        specification: "Suitable for all plants."
    },
    {
        combination: { soilType: "Sandy", cropType: "Tobacco", moisture: 0, nitrogen: 1, phosphorus: 1, potassium: 0 },
        fertilizer: "14-14-14 - Osmocote Smart-Release Plant Food Flower & Vegetable",
        information: "High K, balanced N and P.",
        application: "Incorporate into the soil.",
        specification: "Feeds up to 4 months."
    },
    {
        combination: { soilType: "Loamy", cropType: "Millets", moisture: 0, nitrogen: 1, phosphorus: 1, potassium: 1 },
        fertilizer: "10-10-10 - GreenView Multi-Purpose Fertilizer",
        information: "Balanced N, P, and K.",
        application: "Apply during planting or as a top dressing.",
        specification: "Promotes overall growth."
    },
    {
        combination: { soilType: "Black", cropType: "Pulses", moisture: 1, nitrogen: 0, phosphorus: 0, potassium: 0 },
        fertilizer: "20-20-20 - Jack's Classic All Purpose Fertilizer",
        information: "Complete fertilizer with N, P, and K.",
        application: "Apply evenly across the field.",
        specification: "Contains balanced nutrients."
    },
    {
        combination: { soilType: "Red", cropType: "Barley", moisture: 1, nitrogen: 0, phosphorus: 0, potassium: 1 },
        fertilizer: "24-25-4 - Scotts Turf Builder Starter Food for New Grass",
        information: "High N and P, low K.",
        application: "Apply before or at planting.",
        specification: "Encourages new grass growth."
    },
    {
        combination: { soilType: "Clayey", cropType: "Paddy", moisture: 1, nitrogen: 0, phosphorus: 1, potassium: 0 },
        fertilizer: "9-0-5 - Dr. Earth Super Natural Lawn Fertilizer",
        information: "High N and K, low P.",
        application: "Apply during early growth stages.",
        specification: "Promotes green, healthy lawns."
    },
    {
        combination: { soilType: "Sandy", cropType: "Groundnut", moisture: 1, nitrogen: 0, phosphorus: 1, potassium: 1 },
        fertilizer: "30-0-6 - Miracle-Gro Water Soluble Lawn Food",
        information: "High N, balanced P and K.",
        application: "Use as a top dressing.",
        specification: "Feeds through roots and leaves."
    },
    {
        combination: { soilType: "Loamy", cropType: "Oilseed", moisture: 1, nitrogen: 1, phosphorus: 0, potassium: 0 },
        fertilizer: "4-4-4 - Jobe's Organics All-Purpose Fertilizer",
        information: "High P, balanced N and K.",
        application: "Use at planting time.",
        specification: "Suitable for all plants."
    },
    {
        combination: { soilType: "Black", cropType: "Tobacco", moisture: 1, nitrogen: 1, phosphorus: 0, potassium: 1 },
        fertilizer: "14-14-14 - Osmocote Smart-Release Plant Food Flower & Vegetable",
        information: "High K, balanced N and P.",
        application: "Incorporate into the soil.",
        specification: "Feeds up to 4 months."
    },
    {
        combination: { soilType: "Red", cropType: "Millets", moisture: 1, nitrogen: 1, phosphorus: 1, potassium: 0 },
        fertilizer: "10-10-10 - GreenView Multi-Purpose Fertilizer",
        information: "Balanced N, P, and K.",
        application: "Apply during planting or as a top dressing.",
        specification: "Promotes overall growth."
    },
    {
        combination: { soilType: "Clayey", cropType: "Pulses", moisture: 1, nitrogen: 1, phosphorus: 1, potassium: 1 },
        fertilizer: "20-20-20 - Jack's Classic All Purpose Fertilizer",
        information: "Complete fertilizer with N, P, and K.",
        application: "Apply evenly across the field.",
        specification: "Contains balanced nutrients."
    },
    {
        combination: { soilType: "Sandy", cropType: "Barley", moisture: 0, nitrogen: 0, phosphorus: 0, potassium: 0 },
        fertilizer: "24-25-4 - Scotts Turf Builder Starter Food for New Grass",
        information: "High N and P, low K.",
        application: "Apply before or at planting.",
        specification: "Encourages new grass growth."
    },
    {
        combination: { soilType: "Loamy", cropType: "Paddy", moisture: 0, nitrogen: 0, phosphorus: 0, potassium: 1 },
        fertilizer: "9-0-5 - Dr. Earth Super Natural Lawn Fertilizer",
        information: "High N and K, low P.",
        application: "Apply during early growth stages.",
        specification: "Promotes green, healthy lawns."
    },
    {
        combination: { soilType: "Black", cropType: "Cotton", moisture: 1, nitrogen: 0, phosphorus: 1, potassium: 0 },
        fertilizer: "30-0-6 - Miracle-Gro Water Soluble Lawn Food",
        information: "High N, balanced P and K.",
        application: "Use as a top dressing.",
        specification: "Feeds through roots and leaves."
    },
    {
        combination: { soilType: "Red", cropType: "Groundnut", moisture: 1, nitrogen: 0, phosphorus: 1, potassium: 1 },
        fertilizer: "3-4-4 - Espoma Garden-Tone Herb & Vegetable Food",
        information: "High P and K, low N.",
        application: "Apply to the soil surface.",
        specification: "Enhances vegetable growth."
    },
    {
        combination: { soilType: "Clayey", cropType: "Oilseed", moisture: 1, nitrogen: 0, phosphorus: 1, potassium: 0 },
        fertilizer: "4-4-4 - Jobe's Organics All-Purpose Fertilizer",
        information: "High P, balanced N and K.",
        application: "Use at planting time.",
        specification: "Suitable for all plants."
    },
    {
        combination: { soilType: "Sandy", cropType: "Tobacco", moisture: 1, nitrogen: 1, phosphorus: 0, potassium: 0 },
        fertilizer: "14-14-14 - Osmocote Smart-Release Plant Food Flower & Vegetable",
        information: "High K, balanced N and P.",
        application: "Incorporate into the soil.",
        specification: "Feeds up to 4 months."
    },
    {
        combination: { soilType: "Loamy", cropType: "Millets", moisture: 1, nitrogen: 1, phosphorus: 0, potassium: 1 },
        fertilizer: "10-10-10 - GreenView Multi-Purpose Fertilizer",
        information: "Balanced N, P, and K.",
        application: "Apply during planting or as a top dressing.",
        specification: "Promotes overall growth."
    },
    {
        combination: { soilType: "Black", cropType: "Pulses", moisture: 1, nitrogen: 1, phosphorus: 1, potassium: 0 },
        fertilizer: "20-20-20 - Jack's Classic All Purpose Fertilizer",
        information: "Complete fertilizer with N, P, and K.",
        application: "Apply evenly across the field.",
        specification: "Contains balanced nutrients."
    },
    {
        combination: { soilType: "Red", cropType: "Barley", moisture: 0, nitrogen: 0, phosphorus: 0, potassium: 1 },
        fertilizer: "24-25-4 - Scotts Turf Builder Starter Food for New Grass",
        information: "High N and P, low K.",
        application: "Apply before or at planting.",
        specification: "Encourages new grass growth."
    },
    {
        combination: { soilType: "Clayey", cropType: "Paddy", moisture: 0, nitrogen: 0, phosphorus: 0, potassium: 0 },
        fertilizer: "9-0-5 - Dr. Earth Super Natural Lawn Fertilizer",
        information: "High N and K, low P.",
        application: "Apply during early growth stages.",
        specification: "Promotes green, healthy lawns."
    },
    {
        combination: { soilType: "Loamy", cropType: "Wheat", moisture: 1, nitrogen: 0, phosphorus: 1, potassium: 1 },
        fertilizer: "8-8-8 - Jobe's Organics Vegetable & Tomato Fertilizer",
        information: "Balanced N, P, and K.",
        application: "Apply during planting or as a top dressing.",
        specification: "Promotes healthy root development."
    },
    {
        combination: { soilType: "Sandy", cropType: "Maize", moisture: 1, nitrogen: 1, phosphorus: 0, potassium: 0 },
        fertilizer: "5-10-10 - Espoma Bio-Tone Starter Plus",
        information: "High P, balanced N and K.",
        application: "Apply before planting or transplanting.",
        specification: "Provides essential nutrients for early growth."
    },
    {
        combination: { soilType: "Black", cropType: "Sugarcane", moisture: 1, nitrogen: 1, phosphorus: 0, potassium: 1 },
        fertilizer: "10-15-10 - Miracle-Gro Performance Organics All Purpose Plant Nutrition",
        information: "High P and K, balanced N.",
        application: "Apply during the growing season.",
        specification: "Encourages strong root and stalk development."
    },
    {
        combination: { soilType: "Red", cropType: "Cotton", moisture: 1, nitrogen: 1, phosphorus: 1, potassium: 0 },
        fertilizer: "20-20-20 - Osmocote Smart-Release Plant Food Flower & Vegetable",
        information: "Balanced N, P, and K.",
        application: "Incorporate into the soil or apply as top dressing.",
        specification: "Feeds plants continuously for up to 6 months."
    },
    {
        combination: { soilType: "Clayey", cropType: "Groundnut", moisture: 1, nitrogen: 1, phosphorus: 1, potassium: 1 },
        fertilizer: "18-6-12 - Jobe's Organics Bone Meal Fertilizer",
        information: "High N and K, balanced P.",
        application: "Incorporate into the soil during planting.",
        specification: "Stimulates root growth and improves nutrient uptake."
    },
    {
        combination: { soilType: "Loamy", cropType: "Oilseed", moisture: 1, nitrogen: 0, phosphorus: 0, potassium: 0 },
        fertilizer: "10-20-20 - Miracle-Gro Water Soluble Bloom Booster Flower Food",
        information: "High P and K, balanced N.",
        application: "Apply during flowering stage.",
        specification: "Promotes abundant blooms and fruit development."
    },
    {
        combination: { soilType: "Sandy", cropType: "Tobacco", moisture: 1, nitrogen: 0, phosphorus: 0, potassium: 1 },
        fertilizer: "15-5-10 - Scotts Turf Builder Southern Triple Action",
        information: "High K, balanced N and P.",
        application: "Apply as directed on the package.",
        specification: "Protects against weeds, insects, and diseases while feeding."
    },
    {
        combination: { soilType: "Black", cropType: "Millets", moisture: 1, nitrogen: 0, phosphorus: 1, potassium: 0 },
        fertilizer: "8-2-4 - Jobe's Organics Vegetable & Tomato Fertilizer",
        information: "High P, balanced N and K.",
        application: "Apply before planting or as a side dressing.",
        specification: "Improves soil fertility and promotes healthy growth."
    },
    {
        combination: { soilType: "Red", cropType: "Pulses", moisture: 1, nitrogen: 0, phosphorus: 1, potassium: 1 },
        fertilizer: "12-12-12 - Osmocote Smart-Release Plant Food Flower & Vegetable",
        information: "Balanced N, P, and K.",
        application: "Incorporate into the soil.",
        specification: "Feeds plants continuously for up to 6 months."
    },
    {
        combination: { soilType: "Clayey", cropType: "Barley", moisture: 1, nitrogen: 1, phosphorus: 0, potassium: 0 },
        fertilizer: "20-10-10 - Scotts Green Max Lawn Food",
        information: "High N, balanced P and K.",
        application: "Apply during the growing season.",
        specification: "Promotes deep green growth and strengthens roots."
    },
    {
        combination: { soilType: "Loamy", cropType: "Paddy", moisture: 1, nitrogen: 1, phosphorus: 0, potassium: 1 },
        fertilizer: "15-15-15 - Miracle-Gro Shake 'N Feed All Purpose Plant Food",
        information: "Balanced N, P, and K.",
        application: "Sprinkle around plants and water in.",
        specification: "Feeds for up to 3 months, promoting lush foliage."
    },
    {
        combination: { soilType: "Clayey", cropType: "Groundnut", moisture: 0, nitrogen: 1, phosphorus: 1, potassium: 0 },
        fertilizer: "16-16-16 - Vigoro Super Green Lawn Fertilizer",
        information: "Balanced N, P, and K.",
        application: "Apply evenly over the lawn.",
        specification: "Feeds for up to 3 months, promoting healthy root growth."
    },
    {
        combination: { soilType: "Sandy", cropType: "Tobacco", moisture: 0, nitrogen: 1, phosphorus: 1, potassium: 1 },
        fertilizer: "10-20-10 - Osmocote Smart-Release Plant Food Flower & Vegetable",
        information: "High P, balanced N and K.",
        application: "Incorporate into the soil or apply as top dressing.",
        specification: "Feeds plants continuously for up to 4 months."
    },
    {
        combination: { soilType: "Black", cropType: "Millets", moisture: 0, nitrogen: 1, phosphorus: 1, potassium: 0 },
        fertilizer: "8-3-5 - Miracle-Gro Water Soluble All Purpose Plant Food",
        information: "Balanced N, P, and K.",
        application: "Dissolve in water and apply every 7-14 days.",
        specification: "Promotes lush foliage and vigorous growth."
    },
    {
        combination: { soilType: "Red", cropType: "Pulses", moisture: 0, nitrogen: 1, phosphorus: 1, potassium: 1 },
        fertilizer: "15-10-5 - Jobe's Organics Bone Meal Fertilizer",
        information: "High N and P, balanced K.",
        application: "Sprinkle around plants and water in.",
        specification: "Provides essential nutrients for root development."
    },
    {
        combination: { soilType: "Loamy", cropType: "Barley", moisture: 0, nitrogen: 0, phosphorus: 0, potassium: 0 },
        fertilizer: "10-15-10 - Scotts Turf Builder Weed and Feed",
        information: "High P, balanced N and K.",
        application: "Apply to wet grass as directed on the package.",
        specification: "Kills weeds while feeding your lawn."
    },
    {
        combination: { soilType: "Clayey", cropType: "Paddy", moisture: 0, nitrogen: 0, phosphorus: 0, potassium: 1 },
        fertilizer: "20-20-20 - Osmocote Smart-Release Plant Food Flower & Vegetable",
        information: "Balanced N, P, and K.",
        application: "Incorporate into the soil or apply as top dressing.",
        specification: "Feeds plants continuously for up to 6 months."
    },
];

const Fertilizer = () => {
  const [soilType, setSoilType] = useState("");
  const [cropType, setCropType] = useState("");
  const [moisture, setMoisture] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [prediction, setPrediction] = useState("");
  const [information, setInformation] = useState("");
  const [application, setApplication] = useState("");
  const [specification, setSpecification] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function validData(val)
  {
    return (val>=0 && val<=100);
  }

  function onSearchSubmit(term) {
    if (!soilType || !cropType || !moisture || !nitrogen || !phosphorus || !potassium) {
      setErrorMessage("Please enter all fields");
      return;
    }
    setErrorMessage("");

    const combination = {
        moisture: parseInt(moisture),
        nitrogen: parseInt(nitrogen),
        phosphorus: parseInt(phosphorus),
        potassium: parseInt(potassium),
    };
  
    if(!validData(combination.moisture) || !validData(combination.nitrogen) || !validData(combination.phosphorus) || !validData(potassium)) {
        setErrorMessage('Please enter valid data');
        return;
    }

    combination.moisture = combination.moisture <= 50 ? 0 : 1;
    combination.nitrogen = combination.nitrogen <= 50 ? 0 : 1;
    combination.phosphorus = combination.phosphorus <= 50 ? 0 : 1;
    combination.potassium = combination.potassium <= 50 ? 0 : 1;

    const result = fertilizerData.find(f =>
        f.combination.moisture === combination.moisture &&
        f.combination.nitrogen === combination.nitrogen &&
        f.combination.phosphorus === combination.phosphorus &&
        f.combination.potassium === combination.potassium
    );  

    setErrorMessage("");
    setPrediction(result.fertilizer);
    setInformation(result.information);
    setApplication(result.application);
    setSpecification(result.specification);

  }

  return (
    <>
      <section className="">
        <div className="grid place-items-center">
          <div className="container bg-gray-100 p-10 grid place-items-center">
            <p className="text-2xl font-medium text-white my-12">
              Predict the Fertilizer for your crop
              <br />
            </p>

            <div className="flex flex-row my-2 w-3/5">
              <div className="text-white my-3">Select a Soil Type</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setSoilType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="">Select</option>
                  <option value="Clay">Clayey</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Loamy">Loamy</option>
                  <option value="Black">Black</option>
                  <option value="Red">Red</option>
                </select>
              </div>
            </div>
            {/* dropdown for crop type */}
            <div className="flex flex-row my-2 w-3/5">
              <div className="text-white my-3">Select a Crop Type</div>
              <div className="ml-14">
                <select
                  onChange={(e) => setCropType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="">Select</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Maize">Maize</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Ground Nuts">Groundnut</option>
                  <option value="Oil seeds">Oilseed</option>
                  <option value="Tobacco">Tobacco</option>
                  <option value="Millets">Millets</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Barley">Barley</option>
                  <option value="Paddy">Paddy</option>
                </select>
              </div>
            </div>

            <input
              onChange={(e) => setMoisture(e.target.value)}
              required
              className="w-3/5 my-2 p-6 mt-5 rounded-lg"
              type="text"
              placeholder="Enter moisture value"
            />
            <input
              onChange={(e) => setNitrogen(e.target.value)}
              required
              className="w-3/5 my-2 p-6 mt-5 rounded-lg"
              type="text"
              placeholder="Enter nitrogen value"
            />
            <input
              onChange={(e) => setPhosphorus(e.target.value)}
              required
              className="w-3/5 my-2 p-6 mt-5 rounded-lg"
              type="text"
              placeholder="Enter phosphorous value"
            />
            <input
              onChange={(e) => setPotassium(e.target.value)}
              required
              className="w-3/5 my-2 p-6 mt-5 rounded-lg"
              type="text"
              placeholder="Enter potassium value"
            />

            {errorMessage && (
              <p className="text-white">{errorMessage}</p>
            )}

            <div className="grid place-items-center mt-14 ">
              <div className="mt-2">
                <button
                  onClick={() => onSearchSubmit("aaa")}
                  type="button"
                  className="inline-block  px-6 py-2.5 bg-white text-black font-medium text-xs 
                  leading-tight uppercase rounded shadow-md hover:bg-pure-greys-200 hover:shadow-lg
                  focus:bg-pure-greys-200 :shadow-lg focus:outline-none focus:ring-0 active:bg-pure-greys-400
                  active:shadow-lg transition duration-150 ease-in-out"
                >
                  Get Fertilizer Recommendation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {prediction !== "" ? (
            <div className="grid place-items-center my-14 text-center ">
              <p className="font-bold my-3  text-white">Fertilizer Predicted: <span className="mt-5 text-caribbeangreen-200">{prediction}</span></p>
              <p className="font-bold mb-3 mt-10  text-white">Information: <span  className="mt-5 text-caribbeangreen-200">{information}</span></p>
              {information}
              <p className="font-bold mb-3 mt-10  text-white">Application:  <span  className="mt-5 text-caribbeangreen-200">{application}</span></p>
              {application}
              <p className="font-boldmb-3 mt-10  text-white">Specification:  <span  className="mt-5 text-caribbeangreen-200"> {specification}</span></p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
};

export default Fertilizer;
