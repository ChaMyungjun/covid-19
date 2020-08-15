import React from "react";
import { cityPicker } from "../../../api/korea";
import { TextField, MenuItem } from "@material-ui/core";
import styles from "./city.module.css";

class city extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const cityData = await cityPicker();
    this.setState({
      data: cityData,
    });
  }
  render() {
    const data = this.state.data;
    return (
      <div className = {styles.form}>
        <TextField
          select
          label="지역"
          className={styles.formControl}
          onChange={(e) => this.props.handleNumberChange(e.target.value)}
        >
          {data.map((city, i) => (
            <MenuItem key={i} value={i}>
              {city}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

export default city;
