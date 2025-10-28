import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export function useShowPassword(){
    const [showPassword, setShowPassword] = useState(false);

    const changeVisibility = () => setShowPassword((prev) => !prev);

    const inputType = showPassword ? "text" : "password";
    const icon = showPassword ? faEyeSlash : faEye;

    return {
        inputType,
        icon,
        changeVisibility,
        showPassword
    }
}