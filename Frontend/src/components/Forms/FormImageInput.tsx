/* eslint-disable @typescript-eslint/no-explicit-any */
// external imports
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../common/utils";


interface ImageUploadProps {
    name: string;
    label?: string;
    accept?: string;
    setImageFile: (file: any) => void;
}

const FormImageUpload = ({
    name,
    label,
    accept,
    setImageFile,
}: ImageUploadProps) => {
    const { control, formState: { errors } } = useFormContext();

    const errorMessage = getErrorMessageByPropertyName(errors, name);


    const handleChange = (e: any) => {
        setImageFile(e?.target?.files[0]);
    };

    return (
        <div>
            {label && <span>{label}</span>}
            <Controller
                name={name}
                control={control}
                render={() => (
                    <Input type="file" accept={accept} name={name} onChange={handleChange} />
                )}
            />
            <small style={{ color: "red" }}>{errorMessage}</small>
        </div>
    );
};

export default FormImageUpload;
