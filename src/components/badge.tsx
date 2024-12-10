export const Badge = ({ label }: { label: string }) => {
    return (
      <p className="text-sm uppercase text-gray-950 font-medium bg-gray-300 px-4 rounded-md w-fit">
        {label}
      </p>
    );
}