
import { useState, ChangeEvent, FormEvent } from 'react';

interface UseFormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => void | Promise<void>;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
}

export const useForm = <T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate,
}: UseFormOptions<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : value
    }));
    
    // Clear error when field is edited
    if (errors[name as keyof T]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (validate) {
      const validationErrors = validate(values);
      const hasErrors = Object.keys(validationErrors).length > 0;
      
      setErrors(validationErrors);
      
      if (hasErrors) {
        return;
      }
    }
    
    setIsSubmitting(true);
    
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };
  
  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
    setValues,
  };
};
