import { useMemo } from "react";
import clsx from "clsx";

export const PASSWORD_RULES = [
  { label: "Lower-case", test: /[a-z]/ },
  { label: "Upper-case", test: /[A-Z]/ },
  { label: "At least 1 number", test: /\d/ },
  { label: "Special character", test: /[^A-Za-z0-9]/ },
  { label: "8 or more characters", test: /.{8,}/ },
] as const;

type PasswordStrengthProps = { value: string };

export function PasswordStrength({ value }: PasswordStrengthProps) {
  const { passed, score } = useMemo(() => {
    const passedList = PASSWORD_RULES.map((r) => r.test.test(value));
    return { passed: passedList, score: passedList.filter(Boolean).length };
  }, [value]);

  const verdict = score < 3 ? "Weak" : score < 5 ? "Good" : "Strong";

  return (
    <div>
      <div className="my-2 flex h-1.5 w-full  gap-1">
        {PASSWORD_RULES.map((_, i) => (
          <span
            key={i}
            className={clsx(
              "flex-1 rounded transition-colors",
              i < score ? "bg-yellow-500" : "bg-gray-300/60"
            )}
          />
        ))}
        <span className="ml-2 text-xs font-medium text-gray-500">
          {verdict}
        </span>
      </div>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
        {PASSWORD_RULES.map((rule, idx) => (
          <li key={rule.label} className="flex items-center gap-1">
            <span
              className={clsx(
                "h-2 w-2 rounded-full",
                passed[idx] ? "bg-green-500" : "bg-gray-300"
              )}
            />
            {rule.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
