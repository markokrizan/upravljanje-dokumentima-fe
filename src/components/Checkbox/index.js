import React from "react";
import { Field } from "formik";

const Checkbox = props => {
    return (
        <Field name={props.name}>
          {({ field, form }) => (
            <label>
              <input
                type="checkbox"
                checked={field.value}
                onChange={() => {
                    form.setFieldValue(props.name, !field.value);
                }}
                {...props}
              />
              {props.value}
            </label>
          )}
        </Field>
      );
}

export default Checkbox;
