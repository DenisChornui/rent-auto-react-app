import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  ButtonSearch,
  Label,
  InputContainer,
  Forma,
  InputField,
  MilageInputs,
} from "./Filter.styled";
import { useDispatch } from "react-redux";
import { filterValue } from "redux/filter/filterSlice";


const schema = Yup.object().shape({
  make: Yup.string(),
  price: Yup.number(),
  mileage: Yup.number(),
});

const Filter = () => {
  const dispatch = useDispatch();

  const makes = [
    "Buick", "Volvo", "HUMMER", "Subaru", "Mitsubishi", "Nissan",
    "Lincoln", "GMC", "Hyundai", "MINI", "Bentley", "Mercedes-Benz",
    "Aston Martin", "Pontiac", "Lamborghini", "Audi", "BMW", "Chevrolet",
    "Mercedes-Benz", "Chrysler", "Kia", "Land"
  ];

  return (
    <Formik
      initialValues={{
        make: "",
        price: "",
        mileageFrom: "",
        mileageTo: "",
      }}
      validationSchema={schema}
      onSubmit={(values, action) => {
        dispatch(filterValue(values));

        action.resetForm();
      }}
    >
      <Forma>
        <InputContainer>
          <Label htmlFor="make">Car brand</Label>
          <Field
            style={{
              borderRadius: "14px",

              width: "224px",
              height: "48px",
              backgroundColor: "#f7f7fb",
              border: "none",
              fontWeight: "500",
              fontSize: "18px",

              lineHeight: "1.11111",
              color: "#121417",
              padding: "14px 89px 14px 18px",
            }}
            name="make"
            as="select"
            placeholder="Enter the text"
          >
             <option value="">All</option>
             {makes.map((make, index) => (
  <option key={index} value={make}>{make}</option>
))}
          </Field>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="price">Price/ 1 hour</Label>
          <InputField
            className="inputPrice"
            
            name="price"
            placeholder="To $"
          />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="mileageFrom">Car mileage / km</Label>
          <MilageInputs>
            <InputField
              className="inputFrom"
              name="mileageFrom"
              placeholder="From"
            />
            <Label htmlFor="mileageTo"></Label>
            <InputField className="inputTo" name="mileageTo" placeholder="To" />
          </MilageInputs>
        </InputContainer>

        <ButtonSearch type="submit">Search</ButtonSearch>
      </Forma>
    </Formik>
  );
};

export default Filter;