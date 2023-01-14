import { StyledCheckBox } from "./checkbox.styles";

const CheckBox = ({ checked, setChecked, checkBoxHandler }) => {
  return (
    <div>
      <StyledCheckBox
        type="checkbox"
        onChange={checkBoxHandler}
        checked={checked}
      />
    </div>
  );
};

export default CheckBox;
