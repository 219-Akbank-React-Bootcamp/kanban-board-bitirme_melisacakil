import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";
import { X } from "react-feather";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [boardTitle, setBoardTitle] = useState(props.board?.title || "");
  const [isEditable, setIsEditable] = useState(false);
  const [inputText, setInputText] = useState(props.board?.title || "");

  const submission = (e) => {
    e.preventDefault();
    if (inputText) {
      setBoardTitle(inputText);
      setInputText("");
    }
    setIsEditable(false);
  };
  return (
    <div className="board">
      <div className="board_header">
        <div className="editable">
          {isEditable ? (
            <form className="editable_edit " onSubmit={submission}>
              <input
                type="text"
                value={inputText}
                placeholder="title"
                onChange={(event) => setInputText(event.target.value)}
                autoFocus
              />
              <div className="editable_edit_footer">
                <button type="submit">Edit</button>
                <X onClick={() => setIsEditable(false)} className="closeIcon" />
              </div>
            </form>
          ) : (
            <p className="editable_display" onClick={() => setIsEditable(true)}>
              {boardTitle}
            </p>
          )}
        </div>
        <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
        <Editable
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default Board;
