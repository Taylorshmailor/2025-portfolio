import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
import Modals from "./Modals";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Store the selected item

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => curElem.category === categoryItem);
    setItems(updatedItems);
  };

  // Open the modal with the selected item's data
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null); // Clear the selected item when the modal closes
  };

  return (
    <section className="work container section" id="portfolio">
      {/* Pass selectedItem to the Modals component */}
      <Modals show={showModal} handleClose={handleCloseModal} selectedItem={selectedItem} />
      <h2 className="section_title">Recent Works</h2>
      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work_item" onClick={() => filterItem("App")}>
          App
        </span>
        <span className="work_item" onClick={() => filterItem("UX Design")}>
          UX Design
        </span>
        <span className="work_item" onClick={() => filterItem("Art")}>
          Art
        </span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a
                href="#!"
                className="work_button"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default navigation
                  handleOpenModal({ id, title}); // Pass the item data to the modal
                }}
              >
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
