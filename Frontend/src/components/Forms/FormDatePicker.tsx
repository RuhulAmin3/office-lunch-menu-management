import { DatePicker, DatePickerProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type DatePikerProps = {
    onChange?: (valOne: Dayjs | null, valTwo: string) => void;
    name: string;
    label?: string;
    value?: Dayjs;
    size?: "large" | "small";
};

const FormDatePicker = ({
    name,
    label,
    onChange,
    size = "large",
}: DatePikerProps) => {
    const { control, setValue } = useFormContext();

    const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
        onChange ? onChange(date, dateString) : null;
        setValue(name, date);
    };

    return (
        <div>
            {label ? label : null}
            <br />
            <Controller
                name={name}
                control={control}
                render={({ field }) => {
                    return <DatePicker
                        value={field.value ? dayjs(field.value) : dayjs(Date.now())}
                        size={size}
                        onChange={handleOnChange}
                        style={{ width: "100%" }}
                    />
                }}
            />
        </div>
    );
};

export default FormDatePicker;