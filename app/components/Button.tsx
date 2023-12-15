'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
    label: string;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    custom?: string;
    icon?: IconType;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, disabled, outline, small, custom, icon: Icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center w-full gap-2 transition rounded-md disabled:opacity-70
             disabled:cursor-not-allowed hover:opacity-80 border-slate-700 
            ${outline ? 'bg-white' : 'bg-slate-700'} ${outline ? 'text-slate-700' : 'text-white'} 
            ${small ? 'text-sm font-light' : 'text-md font-semibold'} 
            ${small ? 'py-1 px-2 border-[1px]' : 'py-3 px-4 border-2'} ${custom ? custom : ''}`}
        >
            {Icon && <Icon size={24} />}
            {label}
        </button>
    );
};

export default Button;
