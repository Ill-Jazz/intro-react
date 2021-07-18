import React, {forwardRef} from "react";

const Input = (props, ref) => (
    <input ref={ref} type="text" name="duty" placeholder="New Duty"/>
)
export default forwardRef(Input);