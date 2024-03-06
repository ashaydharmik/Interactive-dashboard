import React from "react";
import { GoPlus } from "react-icons/go";
import BrandData from "../Data/BrandData";
import "./table.scss";
const Table = ({ searchQuery }) => {
  // Filter the BrandData based on the search query
  const filteredBrandData = BrandData.filter((brand) =>
    brand.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <section className="table-container">
        <table>
          <thead>
            <tr>
              <th id="brand">
                <label>
                  <input type="checkbox" />
                  Brand
                </label>
                <span>
                  <GoPlus />
                </span>
              </th>
              <th>Description</th>
              <th>Members</th>
              <th>Description</th>
              <th>Categories</th>
              <th>Tags</th>
              <th>Next Meeting</th>
              <th>
                <GoPlus />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBrandData.map((brand, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                  {brand.logo && (
                    <img
                      src={brand.logo}
                      alt={`${brand.brand} Logo`}
                      style={{
                        width: "25px",
                        height: "20px",
                        marginRight: "8px",
                        borderRadius: "20px",
                      }}
                    />
                  )}
                  {brand.brand}
                </td>
                <td>{brand.description}</td>
                <td>{brand.members}</td>
                <td>{brand.description}</td>
                <td id="categories">
                  <span>{brand.categories.join(", ")}</span>
                </td>
                <td id="tags">
                  <span>{brand.tags.join(", ")}</span>
                </td>
                <td id="meeting">
                  <span>{brand.nextMeeting}</span>
                </td>
                <td></td>
              </tr>
            ))}
            <tr id="last">
              <td>10 count</td>
              <td>
                <GoPlus />
                Add calculations
              </td>
              <td>
                <GoPlus />
                Add calculations
              </td>
              <td>
                <GoPlus />
                Add calculations
              </td>
              <td>
                <GoPlus />
                Add calculations
              </td>
              <td>
                <GoPlus />
                Add calculations
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
