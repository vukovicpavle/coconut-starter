import controls from './Control';
import {FormFactory} from './FormFactory';

const formFactory = new FormFactory(controls);
const Form = formFactory.createForm();

export default Form;
