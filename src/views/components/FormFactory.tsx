import {Formik, FormikConfig, FormikProps} from 'formik';
import React, {FocusEvent} from 'react';
import Styled from './Styled';

export interface FieldConfig {
  // name of the control to use from the controls object
  control: string;
  // name of the field in the form
  name: string;
  // label to display for the field
  label?: string;
  // placeholder to display for the field
  placeholder?: string;
  // whether the field is required
  required?:
    | boolean
    | ((values: any, errors: any, touched: any) => boolean | undefined);
  // whether the field is disabled
  disabled?:
    | boolean
    | ((values: any, errors: any, touched: any) => boolean | undefined);
  // whether the field is readonly
  readonly?:
    | boolean
    | ((values: any, errors: any, touched: any) => boolean | undefined);
  // whether the field is visible
  visible?:
    | boolean
    | ((values: any, errors: any, touched: any) => boolean | undefined);
  // whether the field is valid
  valid?:
    | boolean
    | ((values: any, errors: any, touched: any) => boolean | undefined);
  // error message to display for the field
  error?:
    | string
    | ((values: any, errors: any, touched: any) => string | undefined);
  // help text to display for the field
  helpText?:
    | string
    | ((values: any, errors: any, touched: any) => string | undefined);
  // className for text to apply to the field
  textClassName?:
    | string
    | ((values: any, errors: any, touched: any) => string | undefined);
  // className for container to apply to the field
  containerClassName?:
    | string
    | ((values: any, errors: any, touched: any) => string | undefined);
  // any other props to pass to the control
  custom?: any | ((values: any, errors: any, touched: any) => any);
  // component to use for the field
  component?: React.FunctionComponent<Omit<ControlProps, 'component'>>;
}

export interface ControlProps extends Omit<FieldConfig, 'control'> {
  // value of the field
  value: any;
  // all values
  values: any;
  // onChange handler for the field
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T,
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  // onBlur handler for the field
  onBlur: {
    (e: FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  // onReset handler for the fields
  onReset?: (values: any) => void;
  // onSubmit handler for the field
  onSubmit: (values: any) => void | Promise<any>;
  // any other props to pass to the control
  // [key: string]: any;
}

// type definition for a control
export type Control = React.FC<ControlProps>;

// type definition for the controls object
export type Controls = {
  [key: string]: Control;
};

// type definition for the form config
export type FormConfig = {
  // name of the form
  name?: string;
  // fields to display in the form
  fields: FieldConfig[];
  // class name to apply to the form
  formClassName?: string;
  // any other props to pass to the form
  // [key: string]: any;
};

// Type definition for the form props
export type FormProps = FormikConfig<any> & FormConfig;

// Form Factory class
export class FormFactory {
  // Default controls
  private controls: Controls;

  constructor(controls: Controls) {
    this.controls = controls;
  }

  // render field
  private renderField = (field: FieldConfig & FormikProps<any>) => {
    const {control, ...fieldProps} = field;
    const Control = this.controls[control];

    if (!Control) {
      throw new Error(`Control ${control} not found`);
    }

    const {name, required, disabled, readonly} = fieldProps;
    const {values, errors, touched} = field;

    // Set default values for required, disabled, readonly, visible, valid
    fieldProps.required =
      typeof required === 'function'
        ? required(values, errors, touched)
        : required;
    fieldProps.disabled =
      typeof disabled === 'function'
        ? disabled(values, errors, touched)
        : disabled;
    fieldProps.readonly =
      typeof readonly === 'function'
        ? readonly(values, errors, touched)
        : readonly;
    fieldProps.visible =
      typeof fieldProps.visible === 'function'
        ? fieldProps.visible(values, errors, touched)
        : fieldProps.visible;
    fieldProps.valid =
      typeof fieldProps.valid === 'function'
        ? fieldProps.valid(values, errors, touched)
        : fieldProps.valid;

    // set default values for error, helpText, className
    fieldProps.error =
      typeof fieldProps.error === 'function'
        ? fieldProps.error(values, errors, touched)
        : fieldProps.error || (errors[name] as string);
    fieldProps.helpText =
      typeof fieldProps.helpText === 'function'
        ? fieldProps.helpText(values, errors, touched)
        : fieldProps.helpText;
    fieldProps.textClassName =
      typeof fieldProps.textClassName === 'function'
        ? fieldProps.textClassName(values, errors, touched)
        : fieldProps.textClassName;
    fieldProps.containerClassName =
      typeof fieldProps.containerClassName === 'function'
        ? fieldProps.containerClassName(values, errors, touched)
        : fieldProps.containerClassName;

    // set default value for custom
    fieldProps.custom =
      typeof fieldProps.custom === 'function'
        ? fieldProps.custom(values, errors, touched)
        : fieldProps.custom;

    if (fieldProps.component) {
      return (
        <fieldProps.component
          key={name}
          {...fieldProps}
          value={values[name]}
          onBlur={field.handleBlur}
          onChange={field.handleChange}
          onSubmit={field.handleSubmit}
          onReset={field.handleReset}
        />
      );
    }

    // render the control
    return (
      <Control
        key={name}
        {...fieldProps}
        value={values[name]}
        onBlur={field.handleBlur}
        onChange={field.handleChange}
        onSubmit={field.handleSubmit}
        onReset={field.handleReset}
      />
    );
  };

  // create a form
  createForm = () => {
    return (props: FormProps) => {
      const {fields, formClassName, ...formik} = props;
      return (
        <Formik {...formik}>
          {formConfig => (
            <Styled.View className={formClassName as string}>
              {fields.map(field => this.renderField({...field, ...formConfig}))}
            </Styled.View>
          )}
        </Formik>
      );
    };
  };

  // get control names as enum
  getControlNames = () => {
    const controlNames = Object.keys(this.controls);
    return controlNames.reduce((acc, controlName) => {
      acc[controlName] = controlName;
      return acc;
    }, {} as {[key: string]: string});
  };
}
