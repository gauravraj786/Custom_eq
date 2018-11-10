import React from "react";
import MentionMenu from './MentionMenu';
import MentionWrapper from './MentionWrapper';
import cn from "classnames";

let profiles, stocks, type;
fetch('http://localhost:5050/market')
  .then(function(response) {
    return response.json();
  })
  .then(function(marketData) {
   
    profiles = marketData
  });

  fetch('http://localhost:5050/stock')
  .then(function(response) {
    return response.json();
  })
  .then(function(marketData) {
   
    stocks = marketData
  });
  
  fetch('http://localhost:5050/type')
  .then(function(response) {
    return response.json();
  })
  .then(function(marketData) {
   
    type = marketData
  });
const MenuItem = props => {
  const { active, value } = props;
  let display_name = value;
  return (
    <div className={cn("menuitem", { active: active })}>{display_name}</div>
  );
};

const filterValue = prefix => {
  let textarea= document.querySelector('textarea').value;
  let numberOfDot = textarea.split('.').length-1;
  if(textarea.startsWith('market') || textarea.startsWith('avg(market') || textarea.startsWith('min(market') || textarea.startsWith('max(market')){
  if (numberOfDot === 1) {
    if(prefix === ""){
      return profiles
    }
    return profiles
    .filter(profile => profile.value.toLowerCase().includes(prefix.toLowerCase()))
  }
  else if (numberOfDot === 2) {
    if(prefix === ""){
      return stocks
    }
    return stocks
      .filter(stock => stock.value.toLowerCase().includes(prefix.toLowerCase()))
  } 
  else if (numberOfDot === 3) {
    if(prefix === ""){
      return type
    }
    return type
    .filter(type => type.value.toLowerCase().includes(prefix.toLowerCase()))
  } return -1;
} return -1;
};

class Equation extends React.Component {
  render() {
    return (
      <MentionWrapper {...this.props}>
        <MentionMenu
          className="mentionwrapper"
          trigger="."
          item={MenuItem}
          resolve={filterValue}
        />
      </MentionWrapper>
    );
  }
}

export default Equation;
