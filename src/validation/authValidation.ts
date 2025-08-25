import { LoginForm, FormErrors } from "@/types";

// ✅ Login form validation
export const validateLoginForm = (formData: LoginForm): FormErrors => {
  const errors: FormErrors = {};

  // Email validation
  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Password validation
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  // Remember me validation
  if (!formData.remember) {
    errors.remember = "You must check Remember Me before login";
  }

  return errors;
};
