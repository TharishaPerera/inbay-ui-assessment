import clsx from "clsx";

interface MessageProps {
  message: string;
  variant?: "info" | "error" | "success" | "warning";
}

export const Message: React.FC<MessageProps> = ({ message, variant="info" }) => {
    return (
      <div
        className={clsx("w-full p-4 rounded-lg shadow-md mt-5", {
          "bg-blue-50 text-blue-800": variant === "info",
          "bg-red-50 text-red-800": variant === "error",
          "bg-green-50 text-green-800": variant === "success",
          "bg-yellow-50 text-yellow-900": variant === "warning",
        })}
      >
        <p>{message}</p>
      </div>
    );
}