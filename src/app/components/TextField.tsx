import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function TextField({ label, className, ...rest }: TextFieldProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        {...rest}
        className={clsx(
          "w-full rounded-md border-gray-200 bg-gray-100 px-3 py-2 text-sm",
          "outline-none focus:ring-2 focus:ring-blue-500",
          className
        )}
      />
    </div>
  );
}
