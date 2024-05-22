import React, { Component } from "react";
import "./doubleselect.css";

const items = [
  {
    name: "apple",
    category: "fruit",
  },
  {
    name: "Cucumber",
    category: "vegetable",
  },
  {
    name: "Banana",
    category: "fruit",
  },
  {
    name: "Celery",
    category: "vegetable",
  },
  {
    name: "orange",
    category: "fruit",
  },
  {
    name: "sausage",
    category: "meat",
  },
  {
    name: "bacon",
    category: "meat",
  },
];

class DoubleSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "",
      selectedName: "",
      listMap: {},
    };
  }

  componentDidMount() {
    const data = {};
    items.forEach((item) => {
      if (data[item.category]) {
        data[item.category].push(item.name);
      } else {
        data[item.category] = [item.name];
      }
    });
    this.setState({
      listMap: data,
      selectedCategory: Object.keys(data)[0],
      selectedName: data[Object.keys(data)[0]][0],
    });
  }

  handleCategoryOnChange = (event) => {
    const selectedCategory = event.target.value;
    this.setState({
      selectedCategory,
      selectedName: this.state.listMap[selectedCategory][0],
    });
  };

  handleNameOnChange = (event) => {
    this.setState({ selectedName: event.target.value });
  };

  render() {
    const { selectedCategory, selectedName, listMap } = this.state;

    return (
      <div>
        <div className="selected_content">
          <h1>{selectedName}</h1>
        </div>
        <div className="double_select">
          <div>
            <select
              value={selectedCategory}
              onChange={this.handleCategoryOnChange}
            >
              {Object.keys(listMap).map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select value={selectedName} onChange={this.handleNameOnChange}>
              {listMap[selectedCategory] &&
                listMap[selectedCategory].map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default DoubleSelect;
