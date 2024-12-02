// import React from 'react';
// import LoadingSpinner from './LoadingAuth';

// type ButtonProps ={
//   type?: "button" | "submit" | "reset"; // Specifies the button type
//   text: string; // The text displayed on the button
//   isLoading?: boolean; // Loading state for the button
//   onClick?: () => void; // Optional click handler
//   className?: string; // Additional custom classes
//   icon?: React.ReactNode; // Optional icon or image
//   disabled?: boolean; // Disable the button
// }

// function Button({
//   type = "button",
//   text,
//   isLoading = false,
//   onClick,
//   className = "",
//   icon,
//   disabled = false,
// }: ButtonProps) {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`w-full py-3 px-3 bg-primary text-white font-medium rounded-xl shadow-sm hover:bg-primarycolor800 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2 ${className} ${
//         disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
//       }`}
//       disabled={disabled || isLoading}
//     >
//       {isLoading ? (
//         <span className="loader animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
//       ) : (
//         icon
//       )}
//       {text}
//     </button>
//   );
// }

// export default Button;

// import React from 'react';

// type ButtonProps = {
//   type?: 'button' | 'submit' | 'reset'; // Specifies the button type
//   text: string; // The text displayed on the button
//   isLoading?: boolean; // Loading state for the button
//   onClick?: () => void; // Optional click handler
//   className?: string; // Additional custom classes
//   icon?: React.ReactNode; // Optional icon or image
//   disabled?: boolean; // Disable the button
// };

// function Button({
//   type = 'button',
//   text,
//   isLoading = false,
//   onClick,
//   className = '',
//   icon,
//   disabled = false,
// }: ButtonProps) {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`py-3 px-3 border rounded-xl font-medium flex items-center justify-center gap-2 ${className} ${
//         disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''
//       }`}
//       disabled={disabled || isLoading}
//     >
//       {isLoading ? (
//         <span className="loader animate-spin border-2 border-gray-300 border-t-transparent rounded-full w-4 h-4"></span>
//       ) : (
//         <>
//           {icon && <span className="flex items-center">{icon}</span>}
//           {text}
//         </>
//       )}
//     </button>
//   );
// }

// export default Button;

import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

function Button({
  type = 'button',
  text,
  isLoading = false,
  onClick,
  className = '',
  icon,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-3 rounded-xl font-medium flex items-center justify-center gap-2 ${className} ${
        disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <span className="loader animate-spin border-2 border-gray-300 border-t-transparent rounded-full w-4 h-4"></span>
      ) : (
        <>
          {icon && <span className="flex items-center">{icon}</span>}
          {text}
        </>
      )}
    </button>
  );
}

export default Button;

