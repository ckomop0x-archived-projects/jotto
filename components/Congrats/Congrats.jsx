import React from "react";

/**
 * Functional react component for congratulatory message
 * @param {{
 *   success: boolean
 * }} props – React props
 * @returns {JSX.Element} – rendered component or null of `success`
 */
const Congrats = ({success}) => {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Congratulations! You guessed the word!</span>
      </div>
    );
  }
  return <div data-test="component-congrats"/>;

};

export default Congrats;
