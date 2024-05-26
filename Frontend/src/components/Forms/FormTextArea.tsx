
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../common/utils";

type TextAreaProps = {
    name: string;
    label?: string;
    rows?: number;
    value?: string;
    placeholder?: string;
    required?: boolean;
};

const FormTextArea = ({
    name,
    label,
    rows,
    value,
    placeholder,
    required
}: TextAreaProps) => {
    const { control, formState: { errors }, } = useFormContext();
    const errorMessage = getErrorMessageByPropertyName(errors, name);
    return (
        <div>
            {required ? (
                <span
                    style={{
                        color: "red",
                    }}
                >
                    *
                </span>
            ) : null}
            {label ? <span>{label}</span> : null}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input.TextArea
                        rows={rows}
                        placeholder={placeholder}
                        {...field}
                        defaultValue={value}
                    />
                )}
            />
            <small style={{ color: "red" }}>{errorMessage}</small>
        </div>
    );
};

export default FormTextArea;