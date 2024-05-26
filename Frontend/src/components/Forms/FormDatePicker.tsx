import { DatePicker, DatePickerProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { getErrorMessageByPropertyName } from "../../common/utils";

type DatePikerProps = {
    onChange?: (valOne: Dayjs | null, valTwo: string) => void;
    name: string;
    label?: string;
    value?: Dayjs;
    size?: "large" | "small";
    required?: boolean;
};

const FormDatePicker = ({
    name,
    label,
    onChange,
    size = "large",
    required
}: DatePikerProps) => {
    const { control, setValue, formState: { errors } } = useFormContext();

    const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
        onChange ? onChange(date, dateString as string) : null;
        setValue(name, new Date(dateString as string).toISOString());
    };

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
            <br />
            <Controller

                name={name}
                control={control}
                render={({ field }) => {
                    return <DatePicker
                        mode="date"
                        style={{ width: "100%" }}
                        defaultValue={dayjs(field.value) || Date.now()}
                        size={size}
                        onChange={handleOnChange}
                    />
                }}
            />
            <small style={{ color: "red" }}>{errorMessage}</small>
        </div>
    );
};

export default FormDatePicker;